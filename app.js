//===============Creating a Vote Tracker for random images====================

//================Constructor function==================
//Create a Constructor function for all the products BusMall sells
var clickTotal = 0;

var ImageOption = function(name) {
  this.name = name;
  this.tally = 0;
  this.fileName = name;
  }

var images = []; //Array to hold all of the ImageOption instances
images.push(new ImageOption("bag.jpg"));
images.push(new ImageOption("banana.jpg"));
images.push(new ImageOption("boots.jpg"));
images.push(new ImageOption("chair.jpg"));
images.push(new ImageOption("cthulhu.jpg"));
images.push(new ImageOption("dragon.jpg"));
images.push(new ImageOption("pen.jpg"));
images.push(new ImageOption("scissors.jpg"));
images.push(new ImageOption("shark.jpg"));
images.push(new ImageOption("sweep.jpg"));
images.push(new ImageOption("unicorn.jpg"));
images.push(new ImageOption("usb.jpg"));
images.push(new ImageOption("water_can.jpg"));
images.push(new ImageOption("wine_glass.jpg"));

// console.log(images);

//Make a function to record number of clicks of each image
function recordClick(event) {
  images[event.target.dataset.index].tally++;

  clickTotal++; //this is the same as clickTotal = clickTotal +1
  //When reach maximum clicks remove the event listener
  if (clickTotal == 15) {
    // document.getElementById("image-container").innerHTML = "";
    var product = document.getElementById("result");
    product.removeEventListener("click", recordClick);
  }
  else {
    showImages();
  }

  //After the 15th click load click tracker on list
  var list = document.getElementById("favorite-list");
  for (var faves = 0; faves < images.length; faves++) {
    var li = document.createElement("li");
    li.innerText = images[faves].name + " was clicked " + images[faves].tally + " times";
    //Append the list items into the html list
    list.appendChild(li);
  }
  console.log(images[event.target.dataset.index]);
}


//Creates image container for html
function addImage(imageFileName, index) {
  var container = document.getElementById("image-container");
  var image = document.createElement("img");
  image.src = imageFileName;
  image.dataset.index = index;

  //Add an eventListener for every img tag
  image.addEventListener("click", recordClick);
  container.appendChild(image);
}


//Make a function to randomly choose 3 images from images array
function showImages() {
  var index1 = Math.floor(Math.random() * images.length);
  var index2 = Math.floor(Math.random() * images.length);
  var index3 = Math.floor(Math.random() * images.length);

//Check that the 3 images are different on every load
  while (index1 == index2 || index2 == index3 || index1 == index3) {
    index1 = Math.floor(Math.random() * images.length);
    index2 = Math.floor(Math.random() * images.length);
    index3 = Math.floor(Math.random() * images.length);
  }

// console.log(images[index1]);

//Clears the HTML after each click so it can show 3 new random images
  document.getElementById("image-container").innerHTML = "";

  //Add 3 random image to the Html container
  addImage("pictures/"+images[index1].fileName, index1);
  addImage("pictures/"+images[index2].fileName, index2);
  addImage("pictures/"+images[index3].fileName, index3);
}

window.addEventListener("load", showImages);
