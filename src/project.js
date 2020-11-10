class Project {
  constructor(title, desc, due) {
    this.title = title
    this.desc = desc
    this.due = due
    this.tasks = []
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

export { createProject }