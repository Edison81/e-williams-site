
function toggle(element) {
  var e = document.getElementById(element);
    if(e.style.display == "block") {
      e.style.display = "none";
    } else {
      e.style.display = "block";
    }
};

$('#name').tooltip({'trigger':'focus', 'title': "What's your name?"});
$('#email').tooltip({'trigger':'focus', 'title': "What's your email?"});
$('#comment').tooltip({'trigger':'focus', 'title': "What's do you have to say?"});
