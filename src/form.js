function createForm(type) {
  let content = document.querySelector('.tasks')
  content.innerHTML = ''

  let newItemDiv = document.createElement('div')
  newItemDiv.classList.add('project-title-div')
  let newItemHeader = document.createElement('p')
  newItemHeader.classList.add('new-item-header')
  newItemHeader.textContent = `New ${type}`
  newItemHeader.classList.add('project-title')
  newItemDiv.appendChild(newItemHeader)
  content.appendChild(newItemDiv)

  let form = document.createElement('form')
  form.autocomplete = "off"
  form.name = "creation-form"
  form.setAttribute('data-form-type', type)
  form.classList.add('form')
  form.onsubmit = () => { return false }

  // Item title field

  let itemTitleLabel = document.createElement('label')
  itemTitleLabel.setAttribute('for', 'title')
  itemTitleLabel.textContent = `${type} name`

  let itemTitleField = document.createElement('input')
  itemTitleField.type = 'text'
  itemTitleField.id = 'title'
  itemTitleField.name = 'title'
  
  itemTitleLabel.appendChild(itemTitleField)
  form.appendChild(itemTitleLabel)

  // Item description field

  let itemDescLabel = document.createElement('label')
  itemDescLabel.setAttribute('for', 'desc')
  itemDescLabel.textContent = "Description (optional)"

  let itemDescField = document.createElement('textarea')
  itemDescField.setAttribute('rows', '10')
  itemDescField.setAttribute('name', 'desc')
  itemDescField.id = 'desc'
  itemTitleField.name = 'desc'

  itemDescLabel.appendChild(itemDescField)
  form.appendChild(itemDescLabel)

  // If it is a project, add a due-date field

  if (type === "Project") {
    let dueDateLabel = document.createElement('label')
    dueDateLabel.setAttribute('for', 'due')
    dueDateLabel.textContent = "Due-date (optional)"

    let dueDateInput = document.createElement('input')
    dueDateInput.type = 'date'
    dueDateInput.name = 'due'
    dueDateInput.id = 'due'

    dueDateLabel.appendChild(dueDateInput)
    form.appendChild(dueDateLabel)
  }

  // Finish creation button

  let createItemButton = document.createElement('input')
  createItemButton.type = 'button'
  createItemButton.value = `Create ${type}`
  createItemButton.id = 'create'

  form.appendChild(createItemButton)

  content.appendChild(form)

}

function validateForm() {
  let title = document.forms['creation-form']['title'].value
  return title == ''? false : true
}

function fillForm(task) {
  let header = document.querySelector('.new-item-header')
  header.textContent = "Edit Task"

  let title = document.querySelector('#title')
  console.log(task)
  title.value = task.taskTitle

  let desc = document.querySelector('#desc')
  desc.value = task.taskDesc
}

export { createForm, fillForm, validateForm }