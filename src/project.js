class Project {
  constructor(title, desc, due) {
    this.title = title
    this.desc = desc
    this.due = due
    this.done = false
    this.tasks = []
  }

  get finished() {
    return this.done
  }

  set finished(newStatus) {
    this.done = newStatus
  }

  get projectTitle() {
    return this.title
  }

  get projectDesc() {
    return this.desc
  }

  get dueDate() {
    return this.due
  }

  get projectTasks() {
    return this.tasks
  }

  addTask(newTask) {
    this.tasks.push(newTask)
    return this.tasks
  }
}

function createProject() {
  let projectTitle = document.querySelector('#title').value
  let projectDesc = document.querySelector('#desc').value
  let dueDate = document.querySelector('#due').value
  dueDate = dueDate.replace(/-/g, '/')

  let project = new Project(projectTitle, projectDesc, dueDate)
  return project
}

function renderProjectList(list) {
  let projectList = document.querySelector('.project-list')
  projectList.innerHTML = ''

  list.forEach((project, index) => {
    let newProject = document.createElement('div')
    newProject.classList.add('project')
    newProject.setAttribute('data-project-index', index)

    let statusDisplay = document.createElement('i')
    statusDisplay.classList.add('fa', project.finished? 'fa-check-circle-o' : 'fa-circle-o', 'project-status')
    statusDisplay.addEventListener('click', () => {
      project.finished = !project.finished
      renderProjectList(list)
    })
    newProject.appendChild(statusDisplay)

    let projectTitle = document.createElement('p')
    projectTitle.classList.add('project-name')
    projectTitle.textContent = project.projectTitle
    newProject.appendChild(projectTitle)

    let projectDueDate = document.createElement('p')
    projectDueDate.classList.add('due-date')
    projectDueDate.textContent = project.dueDate
    newProject.appendChild(projectDueDate)

    let projectDeleteButton = document.createElement('i')
    projectDeleteButton.classList.add('fa', 'fa-trash-o', 'delete-project')
    projectDeleteButton.addEventListener('click', () => {
      if(confirm(`Do you want to delete "${project.projectTitle}"?`)) {
        list.splice(index, 1)
        renderProjectList(list)
      }
    })
    newProject.appendChild(projectDeleteButton)

    projectList.appendChild(newProject)
  });
}

export { createProject, renderProjectList }