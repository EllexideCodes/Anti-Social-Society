var json = $.getJSON('https://ellexidecodes.github.io/Config-Files/test-thing.json');
var obj;
var hitCount = 0;
var base64 = '?access_token=ba56a6ec151025b18f92a47cca44f8afc3d057d0';

function setOBJ() {
  obj = json.responseJSON;
}

$(document).ready(()=> {

  setOBJ();
  console.log(obj);

  $('#inputcmd').keypress((e) => {
    if (e.keyCode == 13 && hitCount == 0) {
      console.log('Enter was hit!');
      setOBJ();

      var uploadURL = "https://api.github.com/repos/EllexideBot/Config-Files/git/blobs/text-thing.json" + base64;
      var text = $('#inputcmd').val();
      console.log(uploadURL);

      obj.hello.accessCode = text;
      hitCount ++;
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
    } else if (e.keyCode == 13 && hitCount == 1) {
      console.log('Here\'s your access code');
      hitCount --;
      console.log(obj.hello.accessCode);
    }
  });

});