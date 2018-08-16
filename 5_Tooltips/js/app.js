/*
 <span class="tooltipText">Text tooltipa</span>
 */


document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM');

    var elements = document.querySelectorAll('.tooltip');
    var arr = [];

    for (var i = 0; i < elements.length; i++) {
        arr.push(elements[i]);
    }

    for (let index = 0; index < arr.length; index++) {
        arr[index].addEventListener('mouseover', function () {
            //    console.log(this.dataset.text);
            var newSpan = document.createElement('span');
            newSpan.classList.add('tooltipText');
            newSpan.innerHTML = this.dataset.text;
            this.appendChild(newSpan);
        })
        arr[index].addEventListener('mouseout', function () {
            this.removeChild(this.lastChild);
        })

    }

})