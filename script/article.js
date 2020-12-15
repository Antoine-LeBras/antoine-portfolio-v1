window.addEventListener("DOMContentLoaded", (event) => {
    const items = document.querySelectorAll('.article_card');
    const image = document.querySelector('.image-article');
    
    
    items.forEach((el) => {
      el.addEventListener('mouseover', (e) => {
        let $articleCard = e.target.closest('.article_card');
        imageData = $articleCard.getAttribute('data-image');
        console.log(imageData);
        $articleCard.style.zIndex = 99
        image.setAttribute('src', imageData);
        cursor.classList.add("article-hover");
        image.style.animationName = CursorImage;
        image.style.animationDuration = "1s ease-in";
      })
      el.addEventListener('mousemove', (e) => {
        image.style.top = e.clientY + 'px';
        image.style.left = e.clientX + 'px';

      })
      el.addEventListener('mouseleave', (e) => {
        e.target.style.zIndex = 1
        image.setAttribute('src', '');
      });
    });
});