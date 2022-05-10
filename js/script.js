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
let $form = $('form');
let $input = $('input[type="text"]')

// Now I need event listener ...
$form.on('submit', handleGetData)


// A function for my stats

function handleGetData(e) {
    e.preventDefault()  
    const userInput = $input.val();
    const logic = document.getElementById('text-box').value;
    const url = `https://www.superheroapi.com/api.php/338148107599656/${logic}/powerstats`;


    $.ajax(url).then(function(data) {
        // console.log('data is ready!')
        console.log(data)

        $name.text(data.name);
        $strength.text(data.strength);
        $speed.text(data.speed);
        $power.text(data.power);
        $combat.text(data.combat);
    }) 
}

