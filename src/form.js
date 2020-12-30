function createForm(type) {
  const content = document.querySelector('.tasks');
  content.innerHTML = '';

  const newItemDiv = document.createElement('div');
  newItemDiv.classList.add('project-title-div');
  const newItemHeader = document.createElement('p');
  newItemHeader.classList.add('new-item-header');
  newItemHeader.textContent = `New ${type}`;
  newItemHeader.classList.add('project-title');
  newItemDiv.appendChild(newItemHeader);
  content.appendChild(newItemDiv);

  const form = document.createElement('form');
  form.autocomplete = 'off';
  form.name = 'creation-form';
  form.setAttribute('data-form-type', type);
  form.classList.add('form');
  form.onsubmit = () => false;

  // Item title field

  const itemTitleLabel = document.createElement('label');
  itemTitleLabel.setAttribute('for', 'title');
  itemTitleLabel.textContent = `${type} name`;

  const itemTitleField = document.createElement('input');
  itemTitleField.type = 'text';
  itemTitleField.id = 'title';
  itemTitleField.name = 'title';

  itemTitleLabel.appendChild(itemTitleField);
  form.appendChild(itemTitleLabel);

  // Item description field

  const itemDescLabel = document.createElement('label');
  itemDescLabel.setAttribute('for', 'desc');
  itemDescLabel.textContent = 'Description (optional)';

  const itemDescField = document.createElement('textarea');
  itemDescField.setAttribute('rows', '10');
  itemDescField.setAttribute('name', 'desc');
  itemDescField.id = 'desc';
  itemTitleField.name = 'desc';

  itemDescLabel.appendChild(itemDescField);
  form.appendChild(itemDescLabel);

  // If it is a project, add a due-date field

  if (type === 'Project') {
    const dueDateLabel = document.createElement('label');
    dueDateLabel.setAttribute('for', 'due');
    dueDateLabel.textContent = 'Due-date (optional)';

    const dueDateInput = document.createElement('input');
    dueDateInput.type = 'date';
    dueDateInput.name = 'due';
    dueDateInput.id = 'due';

    dueDateLabel.appendChild(dueDateInput);
    form.appendChild(dueDateLabel);
  }

  // Finish creation button

  const createItemButton = document.createElement('input');
  createItemButton.type = 'button';
  createItemButton.value = `Create ${type}`;
  createItemButton.id = 'create';

  form.appendChild(createItemButton);

  content.appendChild(form);
}

function validateForm() {
  const title = document.forms['creation-form'].title.value;
  return title !== '';
}

function fillForm(task) {
  const header = document.querySelector('.new-item-header');
  header.textContent = 'Edit Task';

  const title = document.querySelector('#title');
  title.value = task.taskTitle;

  const desc = document.querySelector('#desc');
  desc.value = task.taskDesc;
}

export { createForm, fillForm, validateForm };
