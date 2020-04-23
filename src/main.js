import './styles.css';
import $ from 'jquery';


$(document).ready(function(){
  $('#submit').click(function(){
  
    const words = parseInt($('#words').val());
    const paragraphs = parseInt($('#paragraphs').val());

    let promise = new Promise(function(resolve, reject){
      let request = new XMLHttpRequest();
      const url = `http://dinoipsum.herokuapp.com/api?format=json&words=${words}&paragraphs=${paragraphs}`;

      request.onLoad = function(){
        if (this.status === 200){
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      };

      request.open('GET', url, true);
      request.send();
    });

    promise.then(function(response){
      let body=JSON.parse(response);
      $('#output').text(body);
    }, function(error){
      $('#output').text(`There was an error ${error.message}`);
    });


  });
});