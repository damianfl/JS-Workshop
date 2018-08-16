/*
 <div class="fullScreen">
   <img src="./images/wrong.png">
   <button class="close">Close</button>
 </div>
 */

document.addEventListener('DOMContentLoaded', function () {
  console.log('DOM');

  var body = document.querySelector('body');
  var elements = document.querySelectorAll('.gallery li img');
  var arr = [];

  for (var i = 0; i < elements.length; i++) {
    arr.push(elements[i]);
  }
  for (var i = 0; i < arr.length; i++) {

    arr[i].addEventListener('click', function () {
      console.log(this.src)

      var newDiv = document.createElement('div');
      newDiv.classList.add('fullScreen');
      body.appendChild(newDiv);

      var newImg = document.createElement('img');
      newImg.src = this.src;
      newDiv.appendChild(newImg);

      var newButton = document.createElement('button');
      newButton.classList.add('close');
      newButton.textContent = 'Close';
      newDiv.appendChild(newButton);

      newButton.addEventListener('click', function(){
        body.removeChild(newDiv);
      })


    })
  }


})
