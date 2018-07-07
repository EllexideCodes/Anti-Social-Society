$(document).ready(()=> {

var obj;

$.getJSON('./scripts/test.json', function(data){
  obj = data;
});

console.log(obj);

  $('#inputcmd').keypress((e) => {
    if (e.keyCode == 13) {
      console.log('Enter was hit!');
      var uploadURL = "test.json";
      var text = $('#inputcmd').val();
      console.log(uploadURL);
      
      $.ajax({
        type: "POST",
        url: uploadURL,
        contentType: "application/json",
        dataType: "json",
        data: JSON.stringify(obj)
      })
        .done(function( data ) {
          console.log(data)
        });
    }
  });

});