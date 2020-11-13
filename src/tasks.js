function returnAllTasks(projectList) {
  let taskList = []
  projectList.forEach(element => {
    taskList.concat(element.projectTasks)
  });
  return taskList
}

function renderTasks(taskList, parentProject = false) {
  let content = document.querySelector(".tasks")
  content.textContent = ''

  let selected = document.querySelector('.selected')
  if(selected) {
    selected.classList.remove('selected')
  }

  let allTasksButton = document.querySelector('.all-tasks')
  allTasksButton.classList.add('selected')

  if(taskList.length === 0) {
    let noTasksDiv = document.createElement('div')
    noTasksDiv.classList.add('no-tasks-div')

    let noTasks = document.createElement('p')
    noTasks.textContent = 'There are no tasks left :)'
    noTasks.classList.add('no-tasks')

    noTasksDiv.appendChild(noTasks)
    content.appendChild(noTasksDiv)
  }
}
export { returnAllTasks, renderTasks }