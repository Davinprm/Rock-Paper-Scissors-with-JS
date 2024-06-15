function com () //make random num
    {const c = Math.random(); //this function took random num between  0 n 1
    if (c <= 0.34) return 'rock'; //manipulate it
    if (c > 0.34 && c < 0.67) return 'paper';
    return 'scissors';}

function result (com, player)//rules
    {if (player == com) return 'Draw!';
    if (player == "rock") 
        // {if (c == "papper") 
        //     {result = 'Win!';}
        // else {result = 'Lose!';}}
        return (com == 'paper') ? 'Lose!' : 'Win!'; //use ternary technique for shorthand 3 line above like this
    if (player == "paper")
        // {if (c == "scissors")
        //     {result = 'Lose!';}
        // else {result = 'Win!';};}
        return (com == 'scissors') ? 'Lose!' : 'Win!'; //ternary technique
    if (player == 'scissors')
        // {if (c == 'rock')
        //     {result = 'Lose!'}
        // else {result = 'Win!';};}
        return (com == 'rock') ? 'Lose!' : 'Win!';} //ternary technique

// //choose rock area to execute d event
// const pRock = document.querySelector('.rock'); //took element based on Class
// pRock.addEventListener('click', function () //add Click event
//     {const comChoices = com (); //make var to catch computer choices
//     const playerChoices = pRock.className; //take player choices based on CLass
//     const results = result (comChoices, playerChoices); //send to function for catch d match result later

//     //change computer img based on com choices
//     const comImg = document.querySelector('.comImg'); 
//     comImg.setAttribute('src', 'img/' + comChoices + '.png'); //layering new value attr based com choices

//     //change info div to shows d match result
//     const info = document.querySelector('.info');
//     info.innerHTML = results;} //change it based on result function
// );
    //make 2 more for paper n scissors.


let cScore = 0;
let comScore = document.querySelector('p');
comScore.innerHTML = 'Computer Score = 0';

let pScore = 0;
let playerScore = document.querySelector('.player');
playerScore.innerHTML = 'Your Score = 0';

//make more simpler than above
const choice = document.querySelectorAll('li img');
choice.forEach (function (choic) //for each element inside image, run..
    {choic.addEventListener('click', function () //will run object that clicked in each image
        {const comChoices = com ();
        const playerChoices = choic.className; //choic as a param to choose img's class
        const results = result (comChoices, playerChoices);

        spin ();

        setTimeout(function () //run this after 'spin' function
            {const comImg = document.querySelector('.comImg');
            comImg.setAttribute('src', 'img/' + comChoices + '.png');
        
            const info = document.querySelector('.info');
            info.innerHTML = results; //1000 = 1 s

            //make score
            if (results === 'Win!')
                {pScore += 1;
                playerScore.innerHTML = 'Your Score = ' + pScore;}
            else if (results === 'Lose!')
                {cScore += 1;
                comScore.innerHTML = 'Computer Score = ' + cScore}}, 1000);
        }
    );}
);

//js timing
function spin ()
    {const comImg = document.querySelector('.comImg')
    const img = ['rock', 'paper', 'scissors']; //make img name same as this array
    let i = 0; //for 
    const timeStart = new Date().getTime(); //took now real time
    setInterval(function() //'setInterval' function for making object do repeating things in duration
        {if (new Date().getTime() - timeStart > 1000)
            {clearInterval; //stop interval
            return;} //exit d function
            comImg.setAttribute('src', 'img/' + img[i++] + '.png');
        if (i == img.length) i = 0; //if d img reach d end, looping to start again
        }, 100 //100 = 0.1 s is changing d pic
    );
}