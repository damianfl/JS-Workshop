document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM');


    var prev = document.querySelector('#prevPicture');
    var next = document.querySelector('#nextPicture');
    var list = document.querySelectorAll('div ul li');
    var counter = 0;
    var arr = [];

    for (var i = 0; i < list.length; i++) {
        arr.push(list[i]);
    }

    arr[0] = arr[counter];
    arr[0].classList.add('visible');
   
    next.addEventListener('click', function () {
        counter++;
        if (arr.length === counter) {
            counter = 0;
            arr[counter].classList.add('visible');
            arr[arr.length - 1].classList.remove('visible');
        } else {
            arr[counter].classList.add('visible');
            arr[counter - 1].classList.remove('visible');
        }
    })
    prev.addEventListener('click', function () {
        counter--;
        if (counter < 0) {
            counter = arr.length - 1;
            arr[0].classList.remove('visible');
            arr[arr.length - 1].classList.add('visible');

        }
        if (counter < arr.length - 1) {
            arr[counter].classList.add('visible');
            arr[counter + 1].classList.remove('visible');
        }


    })






})