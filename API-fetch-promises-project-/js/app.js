fetch("https://www.googleapis.com/books/v1/volumes?q=quilting")
  .then((response) => {
    //return response.text(); //metoda do odkodowania naszego responsa, zwraca ona kolejnego
    return response.json(); //metoda podobna do text z tym że rozkodowuje nam jeszcze jsona do obiektu JS
  })
  .then((booksInfo) => {
    console.log(booksInfo);
    //wszystko tutaj zostanie zwrócone jako json dzięki metodzie response.text()
  })
  .catch((error) => {
    console.log("Niestety masz błąd: ", error);
  });
