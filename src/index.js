import { format } from 'date-fns';

import { createForm, validateForm } from './form';
import { createProject, renderProjectList, Project } from './project';

import { returnAllTasks, renderTasks, Task } from './tasks';

import Note from './note';

// Project creation form and project object creation logic

const newProjectButton = document.querySelector('.new-project');

export function changeSelected(node = false) {
  const selected = document.querySelector('.selected');
  if (selected) {
    selected.classList.remove('selected');
  }
  if (node) {
    node.classList.add('selected');
  }
}

export function updateLSProjects(list) {
  localStorage.projectList = JSON.stringify(list);
}

if (!localStorage.getItem('projectList')) {
  localStorage.setItem('projectList', '[]');
}

const projectListLS = JSON.parse(localStorage.getItem('projectList'));
export const projectList = [];
projectListLS.forEach((project) => {
  const tasks = [];
  project.tasks.forEach((task) => {
    tasks.push(new Task(task.title, task.desc, task.done));
  });
  projectList.push(new Project(project.title, project.desc, project.due, project.done, tasks));
});

renderProjectList(projectList);
renderTasks(returnAllTasks(projectList));

newProjectButton.addEventListener('click', () => {
  changeSelected();

  createForm('Project');

  // Assign all user inputs to variables and create the project object

  const createProjectButton = document.querySelector('#create');

  createProjectButton.addEventListener('click', () => {
    if (validateForm()) {
      const newProject = createProject();
      projectList.push(newProject);
      localStorage.projectList = JSON.stringify(projectList);
      renderProjectList(projectList);
      changeSelected(document.querySelector('.project-list').lastChild);
      renderTasks(newProject.projectTasks, newProject);
    } else {
      alert('Title must be filled');
    }
  });
});

// Get all tasks and show them

const allTasksButton = document.querySelector('.all-tasks');
allTasksButton.addEventListener('click', (x) => {
  /* let selected = document.querySelector('.selected')
  if(selected) {
    selected.classList.remove('selected')
  }

  allTasksButton.classList.add('selected') */

  changeSelected(allTasksButton);
  renderTasks(returnAllTasks(projectList, x));
});

// Show the note creation form

const noteForm = document.querySelector('#new-note-form');
const noteFormButton = document.querySelector('.new-note');

noteFormButton.addEventListener('click', () => {
  noteForm.hidden = !noteForm.hidden;
});

// Note creation and DOM manipulation logic

const noteTextInput = document.querySelector('#note-text-input');
const createNoteButton = document.querySelector('#create-note');
const noteList = document.querySelector('#note-list');

if (!localStorage.getItem('noteList')) {
  localStorage.setItem('noteList', '[]');
}

const notesLS = JSON.parse(localStorage.noteList);
const notes = [];
notesLS.forEach((note) => {
  notes.push(new Note(note.text, note.date));
});

function updateLSNotes(list) {
  localStorage.noteList = JSON.stringify(list);
}

function updateDOMNotes(array) {
  noteList.innerHTML = '';
  array.forEach((note, index) => {
    const newNote = document.createElement('div');
    newNote.classList.add('note');
    newNote.setAttribute('data-index', index);

    const newNoteText = document.createElement('p');
    newNoteText.textContent = note.noteText;
    newNote.appendChild(newNoteText);

    const newNoteControl = document.createElement('div');
    newNoteControl.classList.add('note-control');

    const newNoteDelete = document.createElement('i');
    newNoteDelete.classList.add('fa', 'fa-trash-o', 'delete-note');
    newNoteDelete.setAttribute('data-delete-index', index);
    newNoteDelete.addEventListener('click', (x) => {
      if (confirm('Do you want to delete the note?')) {
        notes.splice(x.target.getAttribute('data-delete-index'), 1);
        updateLSNotes(notes);
        updateDOMNotes(notes);
      }
    });
    newNoteControl.appendChild(newNoteDelete);

    const newNoteDate = document.createElement('p');
    newNoteDate.classList.add('note-created-at');
    newNoteDate.textContent = note.noteDate;
    newNoteControl.appendChild(newNoteDate);
    newNote.appendChild(newNoteControl);

    noteList.appendChild(newNote);
  });
}

updateDOMNotes(notes);

createNoteButton.addEventListener('click', () => {
  const noteText = noteTextInput.value;
  if (noteText !== '') {
    noteTextInput.value = '';
    noteForm.hidden = true;

    const note = new Note(noteText, format(new Date(), 'dd/MM/yy HH:mm'));
    notes.unshift(note);
    updateLSNotes(notes);
    updateDOMNotes(notes);
  } else {
    alert("The note can't be empty");
  }
});
