class Dogs {
  constructor() {
    this.apiURL = "https://dog.ceo/api/";
    this.imgTag = document.querySelector(".featured-dog img"); //wybieram img o klasie featured-dog
    this.bacgroundTag = document.querySelector(".featured-dog__background");

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

  init() {
    this.getRandomImage().then((src) => {
      this.imgTag.setAttribute("src", src);
      this.bacgroundTag.style.background = `url("${src}")`;
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
