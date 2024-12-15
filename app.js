console.log("test");

//TODO: I want to store my images
const image = [
  /*Надо ли чтоб имя массива было таким же как мы его потом призовём в аргумент функции?*/
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
//I need to select both the thumbnail container and the large image container

const thumbnailContainer = document.getElementById("thumbnail-container");
const largeImageContainer = document.getElementById("large-image-container");

//Since creating the thumbnail images takes more than one step, what is the best way to write a block of code? A function!
//I want to reuse this function for all my images --> I need parameters

function createThumbnails(imagesArray) {
  /*1)создаю функцию,даю ей имя и ставлю imagesArray как аргумент*/
  for (let i = 0; i < imagesArray.length; i++) {
    /*с помощью цикла хочу спройись через все изображения в массиве. .length нужно для того, чтобы цикл for правильно перебрал все изображения, от первого до последнего.*/
    const image = imagesArray[i];
    const thumbnail = document.createElement("img");
    thumbnail.src = image.src;
    thumbnail.alt = image.alt;
    thumbnail.width = 70;
    thumbnail.height = 70;
    thumbnail.className = "thumbnail";
    thumbnail.addEventListener("click", function () {
      //не совсем понимаю как это работает//
      createLargeImagesHandler(image);
    });
    const thumbnailContainer = document.getElementById("thumbnail-container");
    thumbnailContainer.appendChild(thumbnail);
  }

  //I need to create more than one thumbnail --> I can use a loop
  //You can use different ways to loop thorugh your array: for loop / forEach()
  //Inside the loop, we have a few steps to do:
  //create an image element
  //we need assign values to the image element properties
  //src = value
  //we also need to assign a value to the className property
  //we need add an event to the image elements we are creating here
  //we need to append the images to the thumbnail container
}
createThumbnails(image);

//!commit your work!

//TODO: I want to create my larger images
//The larger images will be created when the user triggers the thumbnail images event
//This function will be event handler for our images

//I want to remove the image that's in the full screen, and create a new image with new properties
// largeImageContainer.innerHTML = null / ""
//create an image element
//assign values to the image element
//add a className to style the large image
//append the image to the largeImageContainer

//!we don't call the createLargeImagesHandler in here. It is an event handler!

//!commit your work!
// Находим контейнер для большого изображения
function createLargeImagesHandler(largeImage) {
  // Очищаем контейнер для большого изображения
  largeImageContainer.innerHTML = "";

  // Создаем элемент <img> для большого изображения
  const largeImageElement = document.createElement("img");
  largeImageElement.src = largeImage.src; // Используем переданный параметр для установки src
  largeImageElement.alt = largeImage.alt; // Используем переданный параметр для установки alt
  largeImageElement.className = "large-image"; // Добавляем класс для стилизации большого изображения

  // Добавляем большое изображение в контейнер
  largeImageContainer.appendChild(largeImageElement);
}
