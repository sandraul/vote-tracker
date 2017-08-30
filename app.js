//Creating a Voting Tracker for random images
var imagesArray = ["bag.jpg", "banana.jpg", "boots.jpg", "chair.jpg", "cthulhu.jpg", "dragon.jpg", "pen.jpg", "scissors.jpg", "shark.jpg", "sweep.jpg", "unicorn.jpg", "usb.jpg", "water_can.jpg", "wine_glass.jpg"];

function addImage(imageFileName) {
  var container = document.getElementById("image-container");
  var image = document.createElement("img");
  image.src = imageFileName;
  image.addEventListener("click", recordClick);
  container.appendChild(image);
}


function showImages() {
  var index1 = Math.floor(Math.random() * imagesArray.length);
  var index2 = Math.floor(Math.random() * imagesArray.length);
  var index3 = Math.floor(Math.random() * imagesArray.length);

  while (index1 == index2 || index2 == index3 || index1 == index3) {
    index1 = Math.floor(Math.random() * imagesArray.length);
    index2 = Math.floor(Math.random() * imagesArray.length);
    index3 = Math.floor(Math.random() * imagesArray.length);
  }

  addImage("pictures/"+imagesArray[index1]);
  addImage("pictures/"+imagesArray[index2]);
  addImage("pictures/"+imagesArray[index3]);
}

function recordClick(event) {
  var imageSource = event.target.src;
  console.log("Image Clicked: "+imageSource);
}

window.addEventListener("load", showImages);
