
//================Constructor function==================
//Create a Constructor function for all the products BusMall sells
var clickTotal = 0;

var ImageOption = function(fileName, name) {
  this.name = name;
  this.tally = 0;
  this.fileName = fileName;
  this.label = name; //Add this line when building chart
  this.y = 0; //Add this line when building chart
  }

var images = []; //Array to hold all of the ImageOption instances
images.push(new ImageOption("bag.jpg", "Bag"));
images.push(new ImageOption("banana.jpg", "Banana"));
images.push(new ImageOption("boots.jpg", "Boots"));
images.push(new ImageOption("chair.jpg", "Chair"));
images.push(new ImageOption("cthulhu.jpg", "Cthulhu"));
images.push(new ImageOption("dragon.jpg", "Dragon"));
images.push(new ImageOption("pen.jpg", "Pen"));
images.push(new ImageOption("scissors.jpg", "Scissors"));
images.push(new ImageOption("shark.jpg", "Shark"));
images.push(new ImageOption("sweep.jpg", "Sweep"));
images.push(new ImageOption("unicorn.jpg", "Unicorn"));
images.push(new ImageOption("usb.jpg", "USB"));
images.push(new ImageOption("water_can.jpg", "Water Can"));
images.push(new ImageOption("wine_glass.jpg", "Wine Glass"));

// console.log(images);

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

//Make a function to record number of clicks of each image
//getAttribute() returns the value of a specified attribute
//on the element. If the given attribute does not exist,
//the value returned will either be null or "" (the empty string

function recordClick(event) {
  images[event.target.dataset.index].tally++;
  images[event.target.dataset.index].y++;


  clickTotal++; //this is the same as clickTotal = clickTotal +1

var pBar = clickTotal.value
  if (pBar = 15) {
    document.getElementById("progressBar").innerHTML = "";
  }
  else {
    
  }

  if (clickTotal == 15) {
    document.getElementById("image-container").innerHTML = "";
  var chart = new CanvasJS.Chart("chartContainer",
  {
    title:{
      text: "Busmall Product Chart"
    },
    animationEnabled: true,
    axisY: {
      title: "Clicks"
    },
    legend: {
      verticalAlign: "bottom",
      horizontalAlign: "center"
    },
    theme: "theme2",
    data: [

    {
      type: "column",
      showInLegend: true,
      legendMarkerColor: "grey",
      legendText: "Bus Mall Products",
      dataPoints: images

    }
    ]
  });

  chart.render();
  }

  else {
    showImages();
  }

  console.log(images[event.target.dataset.index]);
}

window.addEventListener("load", showImages);
