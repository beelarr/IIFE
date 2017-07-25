/**
 * Created by beelarr on 7/25/17.
 */

var Starwars = ((e)=>{
    let location = 'D Qar'
    let key_players = ["Princess Leia", "Han Solo", "Chewbacca", "Admiral Ackbar", "Jar Jar Binks"]
    let jedi = ["Luke Skywalker", "Yoda", "Obi-Wan Kenobi", "Anakin Skywalker", "Mace Windu"]



    e.get_location = (who_asks)=>{
        console.log('who asks', who_asks)
        let tell = true;
        let evil_players = Starwars.get_evil();
        evil_players.forEach((e)=>{
            if (e === who_asks){
                tell = false;
            }
        });
        if (tell){
            console.log(who_asks, 'is on the good side. Location: ', location)

        }else{
            console.log('You are Evil, cannot tell you!')
        }

    },
        e.add_jedi = (who)=>{
            jedi.push(who);
            console.log('jedi list', jedi)
        };


  return e

})(Starwars);

