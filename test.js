
const images = [
    { src: "./images/1.jpg", alt: "a description of the image" },
    { src: "./images/2.jpg", alt: "a description of the image" },
    { src: "./images/3.jpg", alt: "a description of the image" },
    { src: "./images/4.jpg", alt: "a description of the image" },
    { src: "./images/5.jpg", alt: "a description of the image" },
    { src: "./images/6.jpg", alt: "a description of the image" },
  ];
  //!commit your work!
  
  //TODO: I want to create my thumbnail images
  //STEP 1: Select the DOM element we are manipulating
  //I need to select both the thumbnail container and the large image container
  
  const thumbnailContainer = document.getElementById('thumbnail-container');  
  const largeImageContainer = document.getElementById('display'); 
  
  //Since creating the thumbnail images takes more than one step, what is the best way to write a block of code? A function!
  //I want to reuse this function for all my images --> I need parameters
  
  function createThumbnails(images) {
      for(let image=0; image<6; image++ )
      }
    console.log(createThumbnails);