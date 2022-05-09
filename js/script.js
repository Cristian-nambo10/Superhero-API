// Test access token 
let accessToken = '338148107599656';
// Making my URL for API

const val = document.getElementById('text-box').value
const url = 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/powerstats/';
// const apiUrl = 'https://superheroapi.com/api/3328323083897178/search/'+val;
// let xhrRequest = new XMLHttpRequest();

// xhrRequest.onload = function () {
//     let result = JSON.parse(xhrRequest.response);
//     let names = reult.results;
// }

// xhrRequest.open("get", 'http://superheroapi.com/api.php/338148107599656/search/name/'+userInput);
// xhrRequest.send();

// Make my jQuery variables
let $name = $('#name');
let $strength = $('.strength');
let $speed = $('.speed');           // Made my variables using classes
let $power = $('.power');
let $combat = $('.combat');
let $form = $('form');
let $input = $('input[type="text"]')

// Now I need event listener ...
$form.on('submit', handleGetData)


// A function

function handleGetData(e) {
    e.preventDefault()  
    const userInput = $input.val();

    $.ajax(url + userInput).then(function(data) {
        console.log('data is ready!')
        console.log(data)

        $name.text(data.Name);
        $strength.text(data.strength)
        $speed.text(data.speed)
    }) 
}