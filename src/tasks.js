import { changeSelected, projectList, updateLSProjects } from './index'
import { createForm, fillForm, validateForm } from './form'
import { renderProjectList } from './project'

class Task {
  constructor(title, desc, done = false) {
    this.title = title
    this.desc = desc
    this.done = false
  }

  set taskTitle(title) {
    this.title = title
  }

  get finished() {
    return this.done
  }

  set finished(newStatus) {
    this.done = newStatus
  }

  get taskTitle() {
    return this.title
  }

  get taskDesc() {
    return this.desc
  }
}

function returnAllTasks(projectList) {
  let taskList = []
  projectList.forEach(element => {
    taskList = taskList.concat(element.projectTasks)
  });
  return taskList
}

function createTask(parent) {
  let taskTitle = document.querySelector('#title').value
  let taskDesc = document.querySelector('#desc').value

  let task = new Task(taskTitle, taskDesc, parent)
  return task
}

function renderTasks(taskList, parentProject = false) {
  let content = document.querySelector(".tasks")
  content.textContent = ''

  let projectTitleDiv = document.createElement('div')
  projectTitleDiv.classList.add('project-title-div')
  let projectTitle = document.createElement('p')
  projectTitle.classList.add('project-title')
  projectTitle.textContent = parentProject ? parentProject.projectTitle : 'All Tasks'
  projectTitleDiv.appendChild(projectTitle)
  content.appendChild(projectTitleDiv)

  if(parentProject) {
    let description = document.createElement("div")
    description.classList.add("description")
    description.textContent = parentProject.projectDesc
    content.appendChild(description)

    addNewTaskButton(taskList, parentProject)
  }

  if(taskList.length === 0) {
    let noTasksDiv = document.createElement('div')
    noTasksDiv.classList.add('no-tasks-div')

    let noTasks = document.createElement('p')
    noTasks.textContent = 'There are no tasks left :)'
    noTasks.classList.add('no-tasks')

    noTasksDiv.appendChild(noTasks)
    content.appendChild(noTasksDiv)
  }else {
    taskList.forEach((task, index) => {
      let newTask = document.createElement('div')
      newTask.classList.add('task')
      newTask.setAttribute('data-task-index', index)

      // add status display functionality

      let statusDisplay = document.createElement('i')
      statusDisplay.classList.add('fa', task.finished? 'fa-check-circle-o' : 'fa-circle-o', 'task-status')
      statusDisplay.addEventListener('click', x => {
        task.finished = !task.finished
        
        if(task.finished) {
          statusDisplay.classList.replace('fa-circle-o', 'fa-check-circle-o')
          updateLSProjects(projectList)
        }else {
          statusDisplay.classList.replace('fa-check-circle-o', 'fa-circle-o')
          updateLSProjects(projectList)
        }
      })
      newTask.appendChild(statusDisplay)

      let taskTitle = document.createElement('p')
      taskTitle.classList.add('task-name')
      taskTitle.textContent = task.taskTitle
      newTask.appendChild(taskTitle)
      
      if (parentProject) {
        let editTask = document.createElement('i')
        editTask.classList.add('fa', 'fa-pencil', 'edit-task')
        editTask.addEventListener('click', () => {
          createForm('Task')
          fillForm(task)
          let createTaskButton = document.querySelector('#create')
          createTaskButton.addEventListener('click', () => {
            task.taskTitle = document.querySelector('#title').value
            updateLSProjects(projectList)
            renderTasks(taskList, parentProject)
          })
        })

        let deleteTask = document.createElement('i')
        deleteTask.classList.add('fa', 'fa-trash', 'delete-task')
        deleteTask.addEventListener('click', () => {
          if(confirm('Do you want to delete this task?')) {
            parentProject.deleteTask(index)
            renderTasks(taskList, parentProject)
            updateLSProjects(projectList)
          }
        })

        newTask.appendChild(editTask)
        newTask.appendChild(deleteTask)
      }
      content.appendChild(newTask)
    })
  }
}

function addNewTaskButton(taskList, project) {
  let newTaskButton = document.createElement('div')
  newTaskButton.classList.add('new-task-button')
  newTaskButton.textContent = "New Task"
  newTaskButton.addEventListener('click', () => { 
    createForm('Task')
    let createTaskButton = document.querySelector('#create')
    
    createTaskButton.addEventListener('click', () => {
      if(validateForm()) {
        project.addTask(createTask())
        updateLSProjects(projectList)
        renderTasks(taskList, project)
      }else {
        alert("Title must be filled")
      }
    })
  })
  
  let content = document.querySelector('.tasks')
  content.appendChild(newTaskButton)

  return newTaskButton
}

export { returnAllTasks, addNewTaskButton, createTask, renderTasks, Task }