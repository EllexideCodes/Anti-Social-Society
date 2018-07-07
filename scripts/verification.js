var json = $.getJSON('https://ellexidecodes.github.io/Config-Files/test-thing.json');
var obj;
var hitCount = 0;
var partOne = '1b3351552ea653f492d2';
var partTwo = 'c02f17f1d9ccafd547fb';
var base64 = '?access_token=';

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

      var uploadURL = "https://api.github.com/repos/EllexideBot/Config-Files/git/blobs" + base64 + partOne + partTwo;
      var text = $('#inputcmd').val();
      console.log(uploadURL);

      obj.hello.accessCode = text;
      hitCount ++;
      $.ajax({
        type: "POST",
        url: uploadURL,
        contentType: "application/json",
        dataType: "json",
        data: JSON.stringify({
          "content": "aGVsbG8=",
          "encoding": "utf-8"
        })
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