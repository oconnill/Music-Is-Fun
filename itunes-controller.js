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
  console.log(songList)
  }




  
}



// {title: "Country Grammar (Hot...)", albumArt: "http://is3.mzstatic.com/image/thumb/Music/v4/2e/84…7a-8251-9f21-89c6-172c58d4ddda/source/60x60bb.jpg", artist: "Nelly", collection: "Country Grammar", price: 9.99, …}

// cats = []

// function Cat(name, age, personality, image) {
//     this.name = name,
//         this.age = age,
//         this.personality = personality || 'grumpy'
//     this.image = image || 'http://lorempixel.com/200/200/cats/'
}

// var garfield = new Cat('Garfield', 22, 'lazy', 'https://pbs.twimg.com/profile_images/451027744361422849/f5KCfGHa_200x200.jpeg')
// var mittens = new Cat('Mittens', 2)
// var snibbly = new Cat('Mr. Snibbly', 152)
// cats.push(garfield, mittens, snibbly)

// function draw(arr) {
//     var template = ''
//     for (var i = 0; i < arr.length; i++) {
//         var cat = arr[i]
//         template += `
//         	<div class="col s3 red-border">
// 				<img src="${cat.image}">
// 				<h4>${cat.name}</h4>
// 				<h6>${cat.age}</h6>
// 				<h6>${cat.personality}</h6>
//                 <button onclick="meow('${cat.name}')">MEOW!</button>
// 			</div>
//         `
//     }
//     document.getElementById('my-cats').innerHTML = template
// }

// globals.meow = function meow(catName){
//     console.log(catName, 'Meow')
// }



// draw(cats)