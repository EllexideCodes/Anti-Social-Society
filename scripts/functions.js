$(document).ready(() => {
  var staff = ['aeri', 'tommy', 'alex', 'tim', 'angelo', 'em', 'emilina', 'tin', 'burberry', 'sock', 'john', 'gamerz', 'crimson', 'crim', 'mema', 'elle', 'kevin', 'dreams', 'josh', 'smelly', 'smelliot', 'elliot', 'coru', 'coruscate', 'senkan', 'richard', 'rom', 'romaniac', 'naugrim', 'holley', 'pup', 'friendly', 'naits', 'ris', 'amy', 'driz', 'drizard', 'ju', 'juju', 'menma', 'crystal', 'nard', 'meggu', 'coffee', 'meg', 'harlie', 'harley', 'thrax', '2roses', 'roses', 'charmed'];

  $("#inpt_search").on('focus', function () {
    $(this).parent('label').addClass('active');
  });
  
  $("#inpt_search").on('blur', function () {
    if($(this).val().length == 0)
      $(this).parent('label').removeClass('active');
  });

  $('.picture').each( function (i) {
    var image = $(this).attr('image');
    var background = `background-image:url(${image})`;
  
    $(this).attr('style', background);
  });

  $('.picture').click((event) => {
    var image = $(event.currentTarget).attr('image');
  
    $('#gallery-overlay').fadeIn('fast', 'swing');
    $('#gallery-overlay img').attr('src',  image);
  });

  $('#inputcmd').keypress((e) => {
    if (e.keyCode == 13) {
      console.log('Enter was hit!');
      var staffname = $('#inputcmd').val().slice(10);
      var command = $('#inputcmd').val().toLowerCase();
      console.log(staffname);
      if(command == `ass-staff-${staffname}` && staff.includes(staffname)) {
        $('#inputcmd').addClass('correct');
        $('#inputcmd').attr('placeholder', 'Access Granted');
        setTimeout(function(){ $('#lock').fadeOut('slow', 'swing'); }, 2000);
      } else {
        $('#inputcmd').addClass('error');
        setTimeout(function(){ $('#inputcmd').removeClass('error'); }, 1000);
        $('#inputcmd').attr('placeholder', 'Wrong Access Code');
      }
      $('#inputcmd').val("");
      $('#inputcmd').blur();
      e.preventDefault();
    }
  })
});

function toggleGallery() {
  $('#gallery-overlay').fadeToggle(200, 'swing');

}

function searchName() {
  // Declare variables
  var input, filter, ul, li, a, i;
  input = document.getElementById('inpt_search');
  filter = input.value.toUpperCase();
  ul = document.getElementById("gallproper");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("div")[0];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
      } else {
          li[i].style.display = "none";
      }
  }
}