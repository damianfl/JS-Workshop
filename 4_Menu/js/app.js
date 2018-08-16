document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM');

    var elements = document.querySelectorAll('div>ul>li');

    var arr = [];

    for (var i = 0; i < elements.length; i++) {
        arr.push(elements[i]);
    }

    for (var i = 0; i < arr.length; i++) {

        arr[i].addEventListener('mouseover', function () {
            var innerUl = this.querySelector('ul');
            if (innerUl !== null) {
                innerUl.style.display = 'block';
            }
        })
        arr[i].addEventListener('mouseout', function () {
            var innerUl = this.querySelector('ul');
            if (innerUl !== null) {
                innerUl.style.display = 'none';
            }
        })
    }

})