const MyPromise = doSomeWork();

MyPromise.then((information) => {
  //kiedy nasz promis zostanie spełniony to kod wewnątrz się uruchomi
  //information to dane wejściowe pobierane z funkcji sleep() doSomeWork() lub innej
  console.log("Gotowe", information);
  return sleep(1000); //yo nam wywoła kolejny then
})
  .then(() => {
    console.log("nawet wyspany");
    return sleep(500);
  })
  .then(() => {
    return console.log("fejk");
  })
  .catch((err) => {
    //funkcja catch zostanie uruchomiona jeśli jakikolwiek promise będzie odrzucony
    console.log("Błąd: ", err);
  });
//console.log(MyPromise);
