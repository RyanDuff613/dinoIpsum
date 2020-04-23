import './styles.css';



$(document).ready(function(){
  $('#submit').click(function(){
  
    const words = parseInt($('#words').val());
    const paragraphs = parseInt($('#paragraphs').val());

    let request = new XMLHttpRequest();
    const url = `http://dinoipsum.herokuapp.com/api?format=json&words=${words}&paragraphs=${paragraphs}`;

    request.onreadystatechange = function(){
      if (this.readyState === 4 && this.status === 200){
        const response = JSON.parse(this.responseText);
        showText(response);
      }
    }

    request.open('GET', url, true);
    request.send();

    const showText = function(response) {
      $('#output').text(`${response}`);
    }

  });
});