// Test access token 
// let accessToken = '338148107599656';

// Making my URL for API
    // const logic = document.getElementById('text-box').value;

    // const url = `https://www.superheroapi.com/api.php/338148107599656/${logic}/powerstats`;

    

// Make my jQuery variables
let $name = $('#name');
let $strength = $('.strength');
let $speed = $('.speed');           // Made my variables using classes
let $power = $('.power');
let $combat = $('.combat');
let $image = $('.image')
let $form = $('form');
let $input = $('input[type="text"]')
let $article = $('.appearance')

// Stylling for DOM elements ....
const mainName = document.querySelector('#name')
mainName.style.color = '#FDE311';
mainName.style.fontSize = '26px';
mainName.style.fontFamily = 'helvetica';

const strength = document.querySelector('.strength')
strength.style.color = '#FDE311';
strength.style.fontSize = '26px';
strength.style.fontFamily = 'helvetica';


const speed = document.querySelector('.speed')
speed.style.color = '#FDE311';
speed.style.fontSize = '26px';
speed.style.fontFamily = 'helvetica';


const power = document.querySelector('.power')
power.style.color = '#FDE311';
power.style.fontSize = '26px';
power.style.fontFamily = 'helvetica';

const combat = document.querySelector('.combat')
combat.style.color = '#FDE311';
combat.style.fontSize = '26px';
combat.style.fontFamily = 'helvetica';

// Now I need event listener ...
$form.on('submit', statsData)

let userInput = $input.val();
// A function for my stats

function statsData(e) {
    e.preventDefault()  
    userInput = $input.val();
    // const logic = document.getElementById('text-box').value;
    const url = `https://www.superheroapi.com/api.php/338148107599656/${userInput}/powerstats`;
    // const imgUrl = `https://www.superheroapi.com/api.php/338148107599656/${userInput}/image`;

    $.ajax(url).then(function(data) {
        // console.log('data is ready!')
        console.log(data)

        $name.text(data.name);
        $strength.text(data.strength);
        $speed.text(data.speed);
        $power.text(data.power);
        $combat.text(data.combat);
        
        // $('main').append(`<img src="${data.url}"/>`)
    }) 
}


$form.on('submit', imageData)

function imageData(e) {
    e.preventDefault();
    userInput = $input.val();
    const imgUrl = `https://www.superheroapi.com/api.php/338148107599656/${userInput}/image`;
    if (userInput === true) {
        return userInput.empty();
    }

    $.ajax(imgUrl).then(function(data) {
        console.log('data is ready!')
        console.log(data)

        $('main').append(`<img src="${data.url}"/>`)
    })

}

// More variables
let $gender = $('.gender')
let $race = $('.race')
let $height = $('.height')
let $weight = $('.weight')

// Styling DOM elements
const gender = document.querySelector('.gender')
gender.style.color = '#FDE311';
gender.style.fontSize = '26px';
gender.style.fontFamily = 'helvetica';

const race = document.querySelector('.race')
race.style.color = '#FDE311';
race.style.fontSize = '26px';
race.style.fontFamily = 'helvetica';

const height = document.querySelector('.height')
height.style.color = '#FDE311';
height.style.fontSize = '26px';
height.style.fontFamily = 'helvetica';

const weight = document.querySelector('.weight')
weight.style.color = '#FDE311';
weight.style.fontSize = '26px';
weight.style.fontFamily = 'helvetica';


$form.on('submit', getLooks)

function getLooks(e) {
    e.preventDefault();
    userInput = $input.val();
    const app = `https://www.superheroapi.com/api.php/338148107599656/${userInput}/appearance`;

    $.ajax(app).then(function(data) {
        $gender.text(data.gender);
        $race.text(data.race);
        $height.text(data.height);
        $weight.text(data.weight);
    })

}

