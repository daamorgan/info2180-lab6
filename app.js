window.onload = function() {

  var xHttp;

  document.getElementById('Searchbtn').addEventListener('click', function(element) {
  element.preventDefault();

    xHttp = new XMLHttpRequest();
    var hero=document.getElementById("searchfield").value;
    var url = "superheroes.php?query="+hero;
    xHttp.onreadystatechange = fetching;
    xHttp.open('GET', url);
    xHttp.send();
  });

  function fetching() {
    if (xHttp.readyState === XMLHttpRequest.DONE) {
      if (xHttp.status === 200) {
        var result = document.querySelector('#result');
        result.innerHTML =xHttp.responseText;
      } else {
        alert('There was a problem with the request.');
      }
    }
  }

};

