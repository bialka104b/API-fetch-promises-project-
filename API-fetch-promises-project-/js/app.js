function listBreeds() {
  return fetch("https://dog.ceo/api/breeds/list/all") //tu dostajemy liste obrazków
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data.message;
    })
    .catch((err) => {
      console.log("coś poszło nie tak", err);
    });
}

// listBreeds().then((breeds) => {
//   console.log(breeds);
// });

function getRandomImage() {
  return fetch("https://dog.ceo/api/breeds/image/random") //tu losujemy losowy obrazek
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data.message;
    })
    .catch((err) => {
      console.log("coś poszło nie tak", err);
    });
}

// const imgTag = document.querySelector("img");
// getRandomImage().then((imgSrc) => {
//   imgTag.setAttribute("src", imgSrc);
// });

function getRandomImageByBreed(breed) {
  return fetch(`https://dog.ceo/api/breed/${breed}/images/random`) //tu losujemy losowy obrazek z kategorii husky
    .then((response) => {
      return response.json();
      console.log(`https://dog.ceo/api/breed/${breed}/images/random`);
    })
    .then((data) => {
      return data.message;
    })
    .catch((err) => {
      console.log("coś poszło nie tak", err);
    });
}

const imgTag = document.querySelector("img");

getRandomImageByBreed("husky").then((imgSrc) => {
  //wywołanie obrazka/ jako argument trzeba podać breed z dokumentacji w naszym przypadku "husky"
  imgTag.setAttribute("src", imgSrc);
});
