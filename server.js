var express = require('express');
var app = express();
var mysql = require('mysql');

app.set('view engine', 'ejs');

var bodyParser = require('body-parser');
	
	app.use(bodyParser.urlencoded({ extended: true }));
	
	app.use(bodyParser.json());

  /*
	this makes routes for everything in the public folder automatically based on its filepath

	and

	it automatically makes the root route go to index.html in the public folder
*/
app.use(express.static("public"));
var path = require("path");

var connection = mysql.createConnection({
	host: "localhost",
  
	// Your port; if not 3306
	port: 3306,
  
	// Your username
	user: "root",
  
	// Your password
	password: "root",
	database: "animals_db"
  });



app.post('/submit', function(req, res){
	// res.json(req.body);

	connection.query(
		"INSERT INTO animals (question, answer) VALUES (?,?)",
		[req.body.question, req.body.answer],
		function(err, response) {
		  // res.redirect('/');
		  res.redirect('/form.html');
		}
	  );
  });

 
  app.get('/animals', function(req, res){
	connection.query(
		"SELECT * FROM animals",
		function(err, response) {
		  res.json(response);
		}
	  );
  });


  app.get('/show-animals', function(req, res){
  connection.query(
      "SELECT * FROM animals",
      function(err, response) {
        res.render('show', {
          animals: response
        });
      }
    );
});

 app.get('/animals/:id', function(req, res){
	connection.query('SELECT * FROM animals WHERE id = ?', [req.params.id],function (error, results, fields) {
	  if (error) throw error;
	  
	  res.json(results[0]);
	});
	});

app.get('/edit/:id', function(req, res){
	res.sendFile(path.join(__dirname, "public/edit.html"));
});

app.post('/update/:id', function(req, res){
	var query = connection.query(
	  "UPDATE animals SET ? WHERE id = ?",
	  [req.body, req.params.id],
	  function(err, response) {
	    res.redirect('/');
	  }
	);
});

//Cannot GET /delete/2
app.post('/delete/:id', function(req, res){
	// var id = req.params.id;

	// res.send(id + "");

	var query = connection.query(
	  "DELETE FROM animals WHERE id = ?",
	  [req.params.id],
	  function(err, response) {
	    res.redirect('/');
	  }
	);

})



app.listen(3000, function(){
	console.log('listening on 3000');
});