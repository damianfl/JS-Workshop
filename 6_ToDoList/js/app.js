document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM');


    var inputTxt = document.querySelector('#taskInput');
    var addTaskButton = document.querySelector('#addTaskButton');
    var taskList = document.querySelector('#taskList');
    var removeFinishedTasksButton = document.querySelector('#removeFinishedTasksButton');

    var span = document.querySelector('#counter');
    var counter = 0;
    span.innerText = 0;





    addTaskButton.addEventListener('click', function () {
        if (inputTxt.value === '') {
            alert('Enter task name !!!');
        } else {
            counter++;
            span.innerText = counter;
            console.log(counter);
            // Creating and appending elements
            var newTask = document.createElement('li');

            var header1 = document.createElement('h1');
            header1.innerText = inputTxt.value;

            var buttonComplete = document.createElement('button');
            buttonComplete.innerText = 'Complete';

            var buttonDelete = document.createElement('button');
            buttonDelete.innerText = 'Delete';

            taskList.appendChild(newTask);
            newTask.appendChild(header1);
            newTask.appendChild(buttonComplete);
            newTask.appendChild(buttonDelete);
            inputTxt.value = '';
            // end Creating and appending elements
            buttonComplete.addEventListener('click', function () {
                header1.style.color = 'red';
                counter--;
                span.innerText = counter;
            })
            buttonDelete.addEventListener('click', function () {
                taskList.removeChild(newTask);
            })
        }

    })
    var newTasks = document.querySelectorAll('#taskList>li');
    removeFinishedTasksButton.addEventListener('click', function () {
        var newTasks = document.querySelectorAll('#taskList>li');
        for (var i = 0; i < newTasks.length; i++) {
            if (newTasks[i].querySelector('h1').style.color === 'red') {
                taskList.removeChild(newTasks[i]);
            }
        }
    })
})


