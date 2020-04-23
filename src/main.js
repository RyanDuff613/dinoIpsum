import './styles.css';



$(document).ready(function(){
  $('#submit').click(function(event){
    event.preventDefault();
  
    const words = parseInt($('#words').val());
    const paragraph = parseInt($('#paragraphs').val());

    $('#output').text(words.toString() + paragraph.toString());

  });
});