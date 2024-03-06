document.addEventListener('DOMContentLoaded', function() {


let beautyBegins = document.getElementById('beautyimg');
let lvlUp = document.getElementById('lvlUpimg');
let styling = document.getElementById('stylingimg');
let teacozy = document.getElementById('teacozyimg');
let blues = document.getElementById('bluesimg');
let numGame = document.getElementById('numgameimg');


//Start Animations //


function animateImages2() {
    beautyBegins.src = "resources/beauty.gif";
         }

function animateStyling() {
    styling.src = "resources/styling.gif";
        }

function animatelvlUp() {
     lvlUp.src = "resources/lvlup.gif";
      }

function animateTeacozy() {
    teacozy.src = "resources/teacozy.gif";
      }

function animateBlues() {
    blues.src = "resources/blues.gif";
      }

 function animateNum() {
    numGame.src = "resources/numgame.gif";
      }      


// Stop Animations //
function stopAnimate() {
    beautyBegins.src = 'resources/beautybeginsscreen.jpg';
}
function stopAnimateLvlUp() {
    lvlUp.src = 'resources/web1.jpg';
}
function stopAnimateStyling() {
    styling.src = 'resources/style.JPG';
}

function stopAnimateTeacozy() {
    teacozy.src = 'resources/teacozy.JPG';
}

function stopAnimateBlues() {
    blues.src = 'resources/bluesclues.jpg';
}

function stopNum() {
    numGame.src = 'resources/numgame.JPG';
}



beautyBegins.addEventListener('mouseover', animateImages2);
beautyBegins.addEventListener('mouseout', stopAnimate);

lvlUp.addEventListener('mouseover', animatelvlUp);
lvlUp.addEventListener('mouseout', stopAnimateLvlUp);

styling.addEventListener('mouseover', animateStyling);
styling.addEventListener('mouseout', stopAnimateStyling);

blues.addEventListener('mouseover', animateBlues);
blues.addEventListener('mouseout', stopAnimateBlues);

teacozy.addEventListener('mouseover', animateTeacozy);
teacozy.addEventListener('mouseout', stopAnimateTeacozy);

numGame.addEventListener('mouseover', animateNum);
numGame.addEventListener('mouseout', stopNum);
   
});