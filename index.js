function addTask() {
    var input = document.getElementById('taskInput').value;
    if (input === '') {
        alert('Please enter a task!');
        return;
    }
    var ul = document.getElementById('taskList');
    var li = document.createElement('li');
    li.textContent = input;
    ul.appendChild(li);
    document.getElementById('taskInput').value = '';
    li.onclick = function() {
        li.classList.toggle('task-complete');
    }
}
