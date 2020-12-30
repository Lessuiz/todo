import { projectList, updateLSProjects } from './index';
import { createForm, fillForm, validateForm } from './form';

class Task {
  constructor(title, desc, done = false) {
    this.title = title;
    this.desc = desc;
    this.done = done;
  }

  set taskTitle(title) {
    this.title = title;
  }

  set taskDesc(desc) {
    this.desc = desc;
  }

  get finished() {
    return this.done;
  }

  set finished(newStatus) {
    this.done = newStatus;
  }

  get taskTitle() {
    return this.title;
  }

  get taskDesc() {
    return this.desc;
  }
}

function addNewTaskButton(taskList, project) {
  const newTaskButton = document.createElement('div');
  newTaskButton.classList.add('new-task-button');
  newTaskButton.textContent = 'New Task';
  newTaskButton.addEventListener('click', () => { 
    createForm('Task');
    const createTaskButton = document.querySelector('#create');
    createTaskButton.addEventListener('click', () => {
      if (validateForm()) {
        project.addTask(createTask());
        updateLSProjects(projectList);
        renderTasks(taskList, project);
      } else {
        alert('Title must be filled');
      }
    });
  });
  
  const content = document.querySelector('.tasks');
  content.appendChild(newTaskButton);

  return newTaskButton;
}

function returnAllTasks(projects) {
  let taskList = [];
  projects.forEach((element) => {
    taskList = taskList.concat(element.projectTasks);
  });
  return taskList;
}

function createTask(parent) {
  const taskTitle = document.querySelector('#title').value;
  const taskDesc = document.querySelector('#desc').value;

  const task = new Task(taskTitle, taskDesc, parent);
  return task;
}

function renderTasks(taskList, parentProject = false) {
  const content = document.querySelector('.tasks');
  content.textContent = '';

  const projectTitleDiv = document.createElement('div');
  projectTitleDiv.classList.add('project-title-div');
  const projectTitle = document.createElement('p');
  projectTitle.classList.add('project-title');
  projectTitle.textContent = parentProject ? parentProject.projectTitle : 'All Tasks';
  projectTitleDiv.appendChild(projectTitle);
  content.appendChild(projectTitleDiv);

  if (parentProject) {
    const description = document.createElement('div');
    description.classList.add('description');
    description.textContent = parentProject.projectDesc;
    content.appendChild(description);

    addNewTaskButton(taskList, parentProject);
  }

  if (taskList.length === 0) {
    const noTasksDiv = document.createElement('div');
    noTasksDiv.classList.add('no-tasks-div');

    const noTasks = document.createElement('p');
    noTasks.textContent = 'There are no tasks left :)';
    noTasks.classList.add('no-tasks');

    noTasksDiv.appendChild(noTasks);
    content.appendChild(noTasksDiv);
  } else {
    taskList.forEach((task, index) => {
      const newTask = document.createElement('div');
      newTask.classList.add('task');
      newTask.setAttribute('data-task-index', index);
      if (task.taskDesc !== '' && task.taskDesc !== ' ') {
        newTask.classList.add('expandable');
      }

      // add status display functionality

      const statusDisplay = document.createElement('i');
      statusDisplay.classList.add('fa', task.finished ? 'fa-check-circle-o' : 'fa-circle-o', 'task-status');
      statusDisplay.addEventListener('click', () => {
        task.finished = !task.finished;

        if (task.finished) {
          statusDisplay.classList.replace('fa-circle-o', 'fa-check-circle-o');
          updateLSProjects(projectList);
        } else {
          statusDisplay.classList.replace('fa-check-circle-o', 'fa-circle-o');
          updateLSProjects(projectList);
        }
      });
      newTask.appendChild(statusDisplay);

      const taskTitle = document.createElement('p');
      taskTitle.classList.add('task-name');
      taskTitle.textContent = task.taskTitle;
      newTask.appendChild(taskTitle);

      const taskDescDiv = document.createElement('div');
      taskDescDiv.classList.add('task-description');
      taskDescDiv.textContent = task.taskDesc;
      newTask.appendChild(taskDescDiv);

      if (parentProject) {
        const editTask = document.createElement('i');
        editTask.classList.add('fa', 'fa-pencil', 'edit-task');
        editTask.addEventListener('click', () => {
          createForm('Task');
          fillForm(task);
          const createTaskButton = document.querySelector('#create');
          createTaskButton.addEventListener('click', () => {
            if (validateForm()) {
              task.taskTitle = document.querySelector('#title').value;
              task.taskDesc = document.querySelector('#desc').value;
              renderTasks(taskList, parentProject);
              updateLSProjects(projectList);
            } else {
              alert('Title must be filled.');
            }
          });
        });

        const deleteTask = document.createElement('i');
        deleteTask.classList.add('fa', 'fa-trash', 'delete-task');
        deleteTask.addEventListener('click', () => {
          if (confirm('Do you want to delete this task?')) {
            parentProject.deleteTask(index);
            renderTasks(taskList, parentProject);
            updateLSProjects(projectList);
          }
        });

        newTask.appendChild(editTask);
        newTask.appendChild(deleteTask);
      }
      content.appendChild(newTask);
    });
  }
}

export {
  returnAllTasks,
  addNewTaskButton,
  createTask,
  renderTasks,
  Task,
};
