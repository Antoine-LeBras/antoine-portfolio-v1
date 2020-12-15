document.addEventListener('mousemove', function(mouvement) {

  document.body.style.setProperty('--y', mouvement.clientY + 'px');
  document.body.style.setProperty('--x', mouvement.clientX + 'px');     
  
});

var cursor = document.querySelector('.cursor');
var border = document.querySelector('.cursor_border');

/* --------------------------------- 


document.querySelectorAll('.article_card')[0].addEventListener('mouseenter', function(event){
cursor.classList.add("article_cursor");
});

document.querySelectorAll('.article_card')[0].addEventListener('mouseenter', function(event){
cursor.classList.remove("article_cursor");
});
*/


/* article card hover */

