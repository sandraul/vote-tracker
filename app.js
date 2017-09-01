//===============Creating a Vote Tracker for random images====================

//================Constructor function==================

var clickTotal = 0;

var ImageOption = function(name) {
  this.name = name;
  this.tally = 0;
  this.fileName = name;
  }

  var images = [];
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

//===========Function to record number of clicks of each image=============
function recordClick(event) {
  images[event.target.dataset.index].tally++;

      clickTotal++; //this is the same as clickTotal = clickTotal +1
      if (clickTotal == 15) {
        document.getElementById("image-container").innerHTML = "";
      }
      else {
      showImages();
      }
      document.getElementById("result").innerHTML = "You have clicked: " + clickTotal + " time(s).";
      console.log(images[event.target.dataset.index]);
}



//=================Event Listener=================
// function sayHello(event) {
//   alert("Hello World!");
//   var idOfItem = event.target.id;
//   var buttonText = event.target.value;
//   alert("You clicked the button that reads: "+buttonText);
// }
//
// function sayGoodbye() {
//   alert("Goodbye, cruel world!");
// }
//
// // window.addEventListener("load", sayHello);
//
// function addHello() {
//   document.getElementById("buttonToClick").addEventListener("click", sayHello);
// }
//
// window.addEventListener("load", addHello);
//=================End Event Listener=================



//================Creates image container for html==================
function addImage(imageFileName, index) {
  var container = document.getElementById("image-container");
  var image = document.createElement("img");
  image.src = imageFileName;
  image.dataset.index = index;
  image.addEventListener("click", recordClick);
  container.appendChild(image);
}

//===========Function to choose random images to display==================
function showImages() {
  var index1 = Math.floor(Math.random() * images.length);
  var index2 = Math.floor(Math.random() * images.length);
  var index3 = Math.floor(Math.random() * images.length);

  while (index1 == index2 || index2 == index3 || index1 == index3) {
    index1 = Math.floor(Math.random() * images.length);
    index2 = Math.floor(Math.random() * images.length);
    index3 = Math.floor(Math.random() * images.length);
  }
// console.log(images[index1]);

  document.getElementById("image-container").innerHTML = "";

  addImage("pictures/"+images[index1].fileName, index1);
  addImage("pictures/"+images[index2].fileName, index2);
  addImage("pictures/"+images[index3].fileName, index3);
}

window.addEventListener("load", showImages);
