/**
 * Created by beelarr on 7/25/17.
 */


// must be var let can only be instantiated one time -- no a class because its JS
var Starwars = (() =>{
    let location = 'The Unknown Regions';
    let darkside_location = 'Deathstar';
    let key_players = ['Count Dooku', 'Darth Maul', 'General Grievous', 'Greedo', 'Jango Fett', 'Darth Sidious', 'Jabba the Hutt'];


    return {
        get_evil: () => {
            return key_players;
        },

        get_evil_location: () =>{
            return darkside_location
        }
    }
})();


