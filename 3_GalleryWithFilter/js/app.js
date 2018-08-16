document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM');

    var imgs = document.querySelectorAll('#gallery img');
    var show = document.querySelector('#showButton');
    var hide = document.querySelector('#hideButton');
    var input = document.querySelector('#tagInput');
    var arr = [];

    for (var i = 0; i < imgs.length; i++) {
        arr.push(imgs[i]);
    }

    show.addEventListener('click', function () {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].dataset.tag.indexOf(input.value) === -1) {
                arr[i].classList.add('invisible');
            } else {
                arr[i].classList.remove('invisible');
            }

        }
    })



    hide.addEventListener('click', function () {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].dataset.tag.indexOf(input.value) === -1) {
                arr[i].classList.remove('invisible');
            } else {
                arr[i].classList.add('invisible');
            }

        }
    })



})