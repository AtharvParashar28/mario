finalscore = 0;
score = 0;
cross = true;
document.onkeydown = function(e){
    console.log('key code:' , e.keyCode);
    if(e.keyCode == 38)
    {
        mario = document.querySelector('.mario');
        mario.classList.add('animatemario');
        setTimeout(() => {
            mario.classList.remove('animatemario');
        }, 700);
    }
    if(e.keyCode == 39)
    {
        mario = document.querySelector('.mario');
        mariox = parseInt(window.getComputedStyle(mario,null).getPropertyValue('left'));
        mario.style.left = mariox + 112 + "px"; 
    }
    if(e.keyCode == 37)
    {
        mario = document.querySelector('.mario');
        mariox = parseInt(window.getComputedStyle(mario,null).getPropertyValue('left'));
        mario.style.left = mariox - 112 + "px"; 
    }
}
setInterval(() => {
    mario = document.querySelector('.mario');
    gameover = document.querySelector('.gameover');
    dragon = document.querySelector('.dragon');
    yourscore = document.querySelector('#yourscore');
    restart = document.querySelector('#reload');
    name = document.querySelector('#name');

    mx = parseInt(window.getComputedStyle(mario,null).getPropertyValue('left'));
    my = parseInt(window.getComputedStyle(mario,null).getPropertyValue('top'));

    dx = parseInt(window.getComputedStyle(dragon,null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dragon,null).getPropertyValue('top'));

    diffx = Math.abs(mx-dx); 
    diffy = Math.abs(my-dy);
    console.log(diffx,diffy);

    if(diffx < 80 && diffy < 100){
        gameover.style.visibility = 'visible';
        dragon.classList.remove('animatedragon');
        finalscore = score;
        scoreboard.style.visibility = "hidden";
        yourscore.style.visibility = "visible";
        restart.style.visibility = "visible";
        yourscore.innerHTML = "your score:" + finalscore;
    }
    else{
        score += 1;
        updatescoreboard(score);
    }
    console.log(yourscore);
}, 100);

function updatescoreboard(score){
    scoreboard.innerHTML = "SCORE :" + score;
}

const reloadtButton = document.querySelector("#reload");
// Reload everything:
function reload() {
reload = location.reload();
}
// Event listeners for reload.
reloadButton. addEventListener("click", reload, false);