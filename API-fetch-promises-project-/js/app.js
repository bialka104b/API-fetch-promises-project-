class Dogs {
  constructor() {
    this.apiURL = "https://dog.ceo/api/";
    this.imgTag = document.querySelector(".featured-dog img"); //wybieram img o klasie featured-dog

    this.init();
  }
  listBreeds() {
    return fetch(`${this.apiURL}breeds/list/all`) //tu dostajemy liste obrazków
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

  getRandomImage() {
    return fetch(`${this.apiURL}breeds/image/random`) //tu losujemy losowy obrazek
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

  getRandomImageByBreed(breed) {
    return fetch(`${this.apiURL}breed/${breed}/images/random`) //tu losujemy losowy obrazek z kategorii husky
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

  // getRandomImageByBreed("husky").then((imgSrc) => {
  //   //wywołanie obrazka/ jako argument trzeba podać breed z dokumentacji w naszym przypadku "husky"
  //   imgTag.setAttribute("src", imgSrc);
  // });

  init() {
    this.getRandomImage().then((src) => {
      this.imgTag.setAttribute("src", src);
    });

    this.listBreeds().then((breeds) => {
      //pobranie listy
      console.log(breeds);
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new Dogs();
});
