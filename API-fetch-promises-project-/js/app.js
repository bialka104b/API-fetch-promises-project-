class Dogs {
  constructor() {
    this.apiURL = "https://dog.ceo/api";
    this.imgTag = document.querySelector(".featured-dog img"); //wybieram img o klasie featured-dog
    this.bacgroundTag = document.querySelector(".featured-dog__background");
    this.tilesElement = document.querySelector(".tiles");
    this.tilesElement.textContent = "";
    this.init();
  }
  listBreeds() {
    return fetch(`${this.apiURL}/breeds/list/all`) //tu dostajemy liste obrazków
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
    return fetch(`${this.apiURL}/breeds/image/random`) //tu losujemy losowy obrazek
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
    return fetch(`${this.apiURL}/breed/${breed}/images/random`) //tu losujemy losowy obrazek z kategorii husky
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

    this.showAllBreeds();
  }

  addBreed(breed, subBreed) {
    let name;
    let type;
    if (typeof subBreed === "undefined") {
      name = breed;
      type = breed;
    } else {
      name = `${breed} ${subBreed}`;
      type = `${breed}/${subBreed}`;//tu musi być ukośnik i ez spacji bo to idzie do urla
    }
    const tile = document.createElement("div");
    tile.classList.add("tiles__tile");

    const tileContent = document.createElement("div");
    tileContent.classList.add("tiles__tile-content");

    tileContent.innerText = name;
    tileContent.addEventListener("click", () => {
      this.getRandomImageByBreed(type).then((src) => {
        this.imgTag.setAttribute("src", src);
        this.bacgroundTag.style.background = `url("${src}")`;
      });
    });
    tile.appendChild(tileContent);
    this.tilesElement.appendChild(tile);
  }

  showAllBreeds() {
    this.listBreeds().then((breeds) => {
      //pobranie listy
      for (const breed in breeds) {
        if (breeds[breed].length === 0) {
          //jeżeli tablica breedów ma 0 długość
          this.addBreed(breed); //to wypisujemy tylko nazwe tablicy
        } else {
          for (const subBreed of breeds[breed]) {
            this.addBreed(breed, subBreed);
            // console.log(`${breed}: ${subBreed}`); //jeśli nie to wypisujemy również obiekty w tablicy
          }
        }
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", (event) => {
  console.log(new Dogs(event));
});
