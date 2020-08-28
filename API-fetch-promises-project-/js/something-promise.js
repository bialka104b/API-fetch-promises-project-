function doSomeWork() {//promis spełniony
    return new Promise(resolve => resolve('Work done!'));
}

function doSomeHardWork() {//promis odrzucony
    return new Promise(((resolve, reject) => reject('I don\'t want to work today!')));
}

function sleep(ms) {//promise pending
    return new Promise(resolve => setTimeout(resolve, ms));
}

function fakeApi(name) {
    return new Promise(resolve => setTimeout(() => resolve({code: 200, text: 'Hi, ' + name}), 1000))
}