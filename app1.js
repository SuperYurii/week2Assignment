console.log("test");

//TODO: I want to store my images
const gallery = [
  { src: "./images/1.jpg", alt: "picture of beathlon" },
  { src: "./images/2.jpg", alt: "picture of bobsleigh" },
  { src: "images/3.webp", alt: "picture of olimpic games " },
  { src: "./images/4.jpg", alt: "a picture of  skiing" },
  { src: "./images/фигурное.jpg", alt: "a picture of Figure Skating" },
  { src: "./images/хоккей.jpg", alt: "a picture of  ice hockey" },
];
//!commit your work!

//TODO: I want to create my thumbnail images
//STEP 1: Select the DOM element we are manipulating
let smallimages = document.getElementById("small-images");

function createSmallImages(gallery) {
  for (let i = 0; i < gallery.length; i++) {
    const images = gallery[i];
    const smallImage = document.createElement("img");
    smallImage.src = images.src;
    smallImage.alt = images.alt;
    smallImage.width = 40;
    smallImage.height = 40;
    smallImage.className = "smallImage";
    // Add click event to load large image
    smallImage.addEventListener("click", function () {
      createLargeImagesHandler(images);
    });
    smallimages.appendChild(smallImage);
  }
}

//!commit your work!

let bigimages = document.getElementById("big-images");

function createLargeImagesHandler(images) {
  bigimages.innerHTML = ""; // Clear previous image
  let bigImage = document.createElement("img");
  bigImage.src = images.src;
  bigImage.alt = images.alt;
  bigImage.className = "bigImage";
  bigimages.appendChild(bigImage);
}
createSmallImages(gallery);

// Adding the buttons to navigate throgh the pictures
let currentPicture = 0;

let nextButton = document.getElementById("next");
nextButton.addEventListener("click", function () {
  currentPicture++;
  if (currentPicture >= gallery.length) {
    currentPicture = 0;
  }
  createLargeImagesHandler(gallery[currentPicture]);
});

let perviousButton = document.getElementById("previous");
perviousButton.addEventListener("click", function () {
  currentPicture--;
  if (currentPicture < 0) {
    currentPicture = gallery.length - 1;
  }
  createLargeImagesHandler(gallery[currentPicture]);
});
