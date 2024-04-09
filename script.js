'use strict';

const inputElement = document.querySelector('input');
const btnLog = document.querySelector('.btn-log');
const btnComplete = document.querySelectorAll('.btn-complete');
const btnsDelete = document.querySelectorAll('.btn-delete');
const taskList = document.querySelector('ul');

const createTask = () => {
  const taskText = inputElement.value.trim();
  if (taskText !== '') {
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task');

    const taskLi = document.createElement('li');
    taskLi.textContent = taskText;

    const btnDiv = document.createElement('div');
    btnDiv.classList.add('task-btn');

    const completeBtn = document.createElement('button');
    completeBtn.classList.add('btn-complete');
    completeBtn.textContent = '✅';

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('btn-delete');
    deleteBtn.textContent = '❌';

    btnDiv.appendChild(completeBtn);
    btnDiv.appendChild(deleteBtn);
    taskDiv.appendChild(taskLi);
    taskDiv.appendChild(btnDiv);

    taskList.appendChild(taskDiv);

    taskDiv.querySelector('.btn-delete').addEventListener('click', removeTask);

    inputElement.value = '';
  }
};

const removeTask = event => {
  const taskDiv = event.target.closest('.task');
  if (taskDiv) {
    taskDiv.remove();
  }
};

btnLog.addEventListener('click', createTask);

document.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    createTask();
  }
});

btnsDelete.forEach(button => {
  button.addEventListener('click', removeTask);
});
