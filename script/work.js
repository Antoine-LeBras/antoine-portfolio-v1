

   var movieCard = document.querySelector('#movie-work');
   var movieCross = document.querySelector('.work-movie-cross');

   movieCard.addEventListener('click',function(openCardMovie){
        var movieContainer = document.querySelector('.work-movie-container');
        movieContainer.style.display= "flex";
   });
   movieCross.addEventListener('click',function(closeCardMovie){
        var movieContainer = document.querySelector('.work-movie-container');
        movieContainer.style.display= "none";
   });


/*
var on = document.querySelector('.exo-16-button-on');
    var off = document.querySelector('.exo-16-button-off');

    on.addEventListener('click', function(darkmode){
        var body = document.querySelector('.main');
        body.style.backgroundColor = "#000";
        body.style.color ="#FFF";

        on.style.backgroundColor = "#FFF";
        on.style.color = "#000";

        off.style.backgroundColor = "#000";
        off.style.color = "#FFF";
    });


    imageChoice.style.display = "flex";
    videoChoice.style.display = "none";

    */