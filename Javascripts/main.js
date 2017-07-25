/**
 * Created by beelarr on 7/25/17.
 */

let resistance_location = 'DQar';

let location_button = document.querySelector('#check_location');

location_button.addEventListener('click', ()=>{
    console.log('We are located at ', resistance_location)

});

let object_button = document.querySelector('#check_object');
object_button.addEventListener('click', indroduce_starwars);

function indroduce_starwars(e) {

    console.log('Starwars IIFE', Starwars)

}

let dark_button = document.querySelector('#get_dark_players')
dark_button.addEventListener('click', get_dark_location)

function get_dark_location(e) {

    console.log('Darkside Players', Starwars.get_evil())

}

let dark_side_location_button = document.querySelector('#get_dark_locations')
dark_side_location_button.addEventListener('click', get_darkside_location)

function get_darkside_location(e) {
    console.log('Darkside Location: ', Starwars.get_evil_location())

}


let dark_location_button = document.querySelector('#btn-get_location-dark');
dark_location_button.addEventListener('click', ()=>{
    Starwars.get_location(dark_location_button.getAttribute('who_is_it'));
})

let light_location_button = document.querySelector('#btn-get_location_light');
light_location_button.addEventListener('click', ()=>{
    Starwars.get_location(light_location_button.getAttribute('who_is_it'));
})