// grabbing image id element of the image
const poster = document.querySelector("#currentPoster")

// setting the array of posters
const images = [
  "./images/poster1.jpg",
  "./images/poster2.jpg",
  "./images/poster3.jpg",
  "./images/poster4.jpg",
  "./images/poster5.jpg"
];

let index = 0;

// function to get the posters to change
function changePoster() {
  // comparing the index and the length of the images array
  if (index == images.length) {
    index = 0
  }
  
  // grabbing the source of attribute of poster and setting it equal to images array
  poster.src = images[index];
  index++;

  // setting the timer and executing the function, timmer of 1000 miliseconds or 1 second
  setTimeout(changePoster, 1000);
  }

setTimeout(changePoster, 1000);