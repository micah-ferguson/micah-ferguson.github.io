/*var main = function() { 

 

    var volume; 

 

    //PLAY button 

    $('#play').click(function(){ 

        $('#message').text("Playing track"); 

        $('#player').trigger("play"); 

    }); 

 

    //PAUSE button 

    $('#pause').click(function(){ 

        $('#message').text("Track paused"); 

        $('#player').trigger("pause"); 

    }); 

 

    //STOP button 

    //Set the Current Time to 0 

    //and then pause the track 

    $('#stop').click(function(){ 

        $('#message').text("Track stopped"); 

        $("#player").prop("currentTime",0); 

        $('#player').trigger("pause"); 

    }); 

 

    //MUTE button 

    $('#mute').click(function(){ 

        $('#message').text("Track muted"); 

        $("#player").prop("muted",true); 

    }); 

 

    //UNMUTE button 

    $('#unmute').click(function(){ 

        $('#message').text("Playing track"); 

        $("#player").prop("muted",false); 

    }); 

 

    //VOLUME UP button 

    $('#up').click(function(){ 

        volume = $("#player").prop("volume"); 

        volume = volume + 0.1; 

        $("#player").prop("volume",volume); 

    });  

*/
var main=function() {
  var volume;
  //The PLAY button
  $('#play').click(function(){
    $('#message').text("Playing track");
    $('#player').trigger("play");
    });
    //PAUSE button 

    $('#pause').click(function(){ 

        $('#message').text("Track paused"); 

        $('#player').trigger("pause"); 

    }); 
    //MUTE button 

    $('#mute').click(function(){ 

        $('#message').text("Track muted"); 

        $("#player").prop("muted",true); 

    }); 
 //UNMUTE button 

    $('#unmute').click(function(){ 

        $('#message').text("Playing track"); 

        $("#player").prop("muted",false); 

    }); 
  $('#stop').click(function(){ 

        $('#message').text("Track stopped"); 

        $("#player").prop("currentTime",0); 

        $('#player').trigger("pause"); 

    }); 
//VOLUME UP button 

    $('#up').click(function(){ 

        volume = $("#player").prop("volume"); 

        volume = volume + 0.1; 

        $("#player").prop("volume",volume); 



    });
    //STOP button 

    //Set the Current Time to 0 

    //and then pause the track 

//VOLUME Down button 

    $('#down').click(function(){ 

        volume = $("#player").prop("volume"); 

        volume = volume - 0.1; 

        $("#player").prop("volume",volume); 
    });



    
}
   $(document).ready(main);