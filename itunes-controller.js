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
        <h4>${selection.title}</h4>
        <h7>${selction.price}</h7>
    </div>
    <div class="album-art">
    <img src="${selction.albumArt}">
    </div>
    <h5>${selction.artist}</h5>
    <h5>${selction.collection}</h5>
    <h5><source src="${selction.preview}" type="audio/mpeg"></h5>
</div>
    `
    }

  document.getElementById('music').innerHTML = template 
}


draw(songList)
}
