// function update () {
//   var albhedToEnglish = document.getElementById('albhed-to-english');
//   var englishToAlBhed = document.getElementById('english-to-albhed');
//   var tmp = albhedToEnglish.value;  
//   englishToAlBhed.value = tmp;
// } 

$(document).ready(function() {
  $('#albhed-to-english').keyup(function(){
    var albhedToEnglish = $('#albhed-to-english').val();
    var englishToAlBhed = $('#english-to-albhed').val();
    var alBhedPhabet = 
    $('#english-to-albhed').html(albhedToEnglish);
  });
});
