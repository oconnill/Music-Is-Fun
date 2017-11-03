function ItunesController(){
  var itunesService = new ItunesService()
  //Do Not Modify the getMusic function
  this.getMusic = function getMusic(e){
    e.preventDefault();
    var artist = e.target.artist.value;
    itunesService.getMusicByArtist(artist).then(draw); //after get music by artist returns what are you doing with the objects?
  }

  //Start coding here
  function draw(songList){
    var template = ''
    for (var i = 0; i < songList.length; i++)
    {
    var selection = songList[i]
    template += `
    <div class="col-sm-6 outline">
    <div class="album-price">
        <h5>${selection.title}</h5>
        <h5>${selection.price}</h5>
    </div>
    <div class="album-art">
    <img src="${selection.albumArt}">
    </div>
    <h5>${selection.artist}</h5>
    <h5>${selection.collection}</h5>
    <h5><audio controls class='audio'><source src="${selection.preview}" type="audio/mpeg"></audio></h5>
</div>
    `
    }

  document.getElementById('music').innerHTML = template 
}
document.addEventListener('play', function (e) {
   var audios = document.getElementsByClassName('audio');
   for (var i = 0, len = audios.length; i < len; i++) {
     if (audios[i] != e.target) {
       audios[i].pause();
     }
   }
 }, true);


}
