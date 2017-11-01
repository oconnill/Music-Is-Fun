//global play/pause

$('#global').click(function(){
    var song = $('audio controls');
    if(song.paused){
        song.play();
     } else {
         song.pause();
     }
});
//audio tag play/pause
    var curPlaying;
    $(function() {
        $(".playback").click(function(e){
            e.preventDefault();
            var song = $(this).next('audio controls')[0];
            if(song.paused){
                song.play();
                if(curPlaying) $("audio controls", "#"+curPlaying)[0].pause();
            } else {
                song.pause();
                }
            curPlaying = $(this).parent()[0].id;
        });
    });