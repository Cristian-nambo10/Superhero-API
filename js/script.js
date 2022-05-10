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

// Now I need event listener ...
$form.on('submit', handleGetData)

let userInput = $input.val();
// A function for my stats

function handleGetData(e) {
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

