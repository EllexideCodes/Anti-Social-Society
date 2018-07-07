var json = $.getJSON('https://ellexidecodes.github.io/Config-Files/test-thing.json');
var obj;
var hitCount = 0;
var base64 = 'b03c00366b6ed814f142b894ba87055a9fe377db';

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

      var uploadURL = "https://api.github.com/repos/EllexideCodes/Config-Files/git/blobs/text-thing.json" + base64;
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