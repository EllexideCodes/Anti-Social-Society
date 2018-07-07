var github = require('octonode');

var client = github.client(partOne+partTwo);

client.get('/user', {}, function (err, status, body, headers) {
  console.log(body); //json object
});

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

      ghrepo.updateContents('lib/index.js', 'test commit', `${obj}`, '8b137891791fe96927ad78e64b0aad7bded08bdc', callback);

      /*var uploadURL = "https://api.github.com/repos/EllexideBot/Config-Files/git/blobs/8b137891791fe96927ad78e64b0aad7bded08bdc/test-thing.json" + base64 + partOne + partTwo;
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
        });*/
    } else if (e.keyCode == 13 && hitCount == 1) {
      console.log('Here\'s your access code');
      hitCount --;
      console.log(obj.hello.accessCode);
    }
  });

});