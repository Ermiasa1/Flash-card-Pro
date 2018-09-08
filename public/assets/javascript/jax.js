  $.ajax({
  url: '/animals',
  method: 'GET'
}).then(function(animals){
  //console.log(data);
  var exDiv,midDiv,animalZ ,sp,sp2,ob,div,div2,div3,p,p2,z,form, button,a ;  

  div3 = $('<div>)');
  div3.addClass('div3');
  div = $('<div>');
  div.addClass('firstDiv');
  z = 0;
  var animalZ = animals[z];
  div.text(animalZ.question);
  div.addClass('quesVisble');
  div3.append(div);
  div2 = $('<div>');
  div2.text(animalZ.answer);
  // console.log(animalZ.answer);
  div2.addClass('hide');
  div3.append(div2);
  $("#quetBox").append(div3);

  $("#quetBox").on('click', function (){
    $('.quesVisble').siblings().eq(0).removeClass('hide');    
    $('.quesVisble').hide();    
    console.log(this);
  })


  $('#next').on('click', function (){
  z+=1;   
  div3 = $('<div>)');
  div3.addClass('div3');
  div = $('<div>');
  div.addClass('firstDiv');
  var animalZ = animals[z];
  div.text(animals[z].question);
  div.addClass('quesVisble');
  div3.append(div);
  div2 = $('<div>');
  div2.text(animalZ.answer);  
  div2.addClass('hide');
  div3.append(div2);
  $("#quetBox").empty();
  $("#quetBox").append(div3);

    
    // $('.quesVisble').on('click', function (){      
    // $(this).siblings().eq(0).removeClass('hide');
    // $(this).hide();
    // console.log(this);

    $("#quetBox").on('click', function (){
      $('.quesVisble').siblings().eq(0).removeClass('hide');
      $('.quesVisble').hide();
      console.log(this);
    })

  
});

  $('#previous').on('click', function (){
    z-=1;   
  div3 = $('<div>)');
  div3.addClass('div3');
  div = $('<div>');
  var animalZ = animals[z];
  div.text(animalZ.question);
  div.addClass('quesVisble');
  div3.append(div);
  div2 = $('<div>');
  div2.text(animalZ.answer);
  // console.log(animalZ.answer);
  div2.addClass('hide');
  div3.append(div2);
  $("#quetBox").empty();
  $("#quetBox").append(div3);

  // //  $('.quesVisble').on('click', function (){
  //   $("#quetBox").on('click', function (){
  //   $(this).siblings().eq(0).removeClass('hide');
  //   $(this).hide();
  //   console.log(this);
  //  })

   $("#quetBox").on('click', function (){
    $('.quesVisble').siblings().eq(0).removeClass('hide');
    $('.quesVisble').hide();
    console.log(this);
  })



  })

  for (var i=0; i<animals.length; i++){
    ob = animals[i];
    exDiv =$('<div>');
    exDiv.addClass('qCards');    
    midDiv = $('<div>');
    midDiv.addClass('quesVisble');
    p =$('<p>');
    p.addClass('paragraph');
    p.text(ob.question);    
    midDiv.append(p);
    exDiv.append(midDiv);
    p2 = $('<p>');
    p2.addClass('paragraph');
    p2.text(ob.answer);
    midDiv2 =$('<div>');
    midDiv2.addClass('hide');
    midDiv2.append(p2);
    exDiv.append(midDiv2);
    $("#listCards").append(exDiv);

    form = $('<form>');
    form.attr('method', 'POST');
    form.attr('action', '/delete/' + ob.id);
    button = $('<button>');
    button.addClass('deleteButton');
    button.text('delete');
    form.append(button);
    a = $('<a>');
    a.addClass('edit');   
    a.text('edit'); 
    a.attr('href', '/edit/' + ob.id);   
    form.append(a);
    $("#listCards").append(form); 

    $('.quesVisble').on('click', function (){
      $(this).siblings().eq(0).removeClass('hide');
      $(this).hide();
      console.log(this);
    })


  
  }
 
});