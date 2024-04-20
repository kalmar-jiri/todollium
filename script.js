'use strict';

const inputElement = document.querySelector('input');
const btnAdd = document.querySelector('.btn-add');
const taskList = document.querySelector('ul');

const createTask = () => {
  const taskText = inputElement.value.trim();
  if (taskText !== '') {
    const li = document.createElement('li');
    li.textContent = taskText;
    taskList.appendChild(li);
    const span = document.createElement('span');
    span.textContent = '\u00d7';
    li.appendChild(span);

    inputElement.value = '';
    saveData();
  }
};

// Adding new task
btnAdd.addEventListener('click', createTask);
document.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    createTask();
  }
});

// Clicking on the task element - either COMPLETE or REMOVE (depeding on the position of click)
taskList.addEventListener('click', e => {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('checked');
    saveData();
  } else if (e.target.tagName === 'SPAN') {
    e.target.parentElement.remove();
    saveData();
  }
});

// Save data to browser - called upon creating new task, completing task or deleting task
const saveData = () => {
  localStorage.setItem('data', taskList.innerHTML);
};

// Immediately show saved data
const showTask = () => {
  taskList.innerHTML = localStorage.getItem('data');
};
showTask();
