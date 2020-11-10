import { format } from 'date-fns'

// Project creation form and project object creation logic
import createForm from './form'
import { createProject, renderProjectList } from './project'
const newProjectButton = document.querySelector(".new-project")

let projectList = []

newProjectButton.addEventListener('click', () => {
  createForm("Project")

  // Assign all user inputs to variables and create the project object

  let createProjectButton = document.querySelector("#create")

  createProjectButton.addEventListener('click', () => {
    projectList.push(createProject())
    renderProjectList(projectList)
  })
})

// Show the note creation form

const noteForm = document.querySelector("#new-note-form")
const noteFormButton = document.querySelector(".new-note")

noteFormButton.addEventListener('click', () => {
  noteForm.hidden = !noteForm.hidden
})

// Note creation and DOM manipulation logic

import Note from './note'

const noteTextInput = document.querySelector('#note-text-input')
const createNoteButton = document.querySelector('#create-note')
const noteList = document.querySelector('#note-list')
const notes = []

function updateDOMNotes(array) {
  noteList.innerHTML = ''
  array.forEach((note, index) => {
    let newNote = document.createElement('div')
    newNote.classList.add('note')
    newNote.setAttribute('data-index', index)

    let newNoteText = document.createElement('p')
    newNoteText.textContent = note.noteText
    newNote.appendChild(newNoteText)

    let newNoteControl = document.createElement('div')
    newNoteControl.classList.add('note-control')

    let newNoteDelete = document.createElement('i')
    newNoteDelete.classList.add('fa', 'fa-trash-o', 'delete-note')
    newNoteDelete.setAttribute('data-delete-index', index)
    newNoteDelete.addEventListener('click', x => {
      if (confirm("Do you want to delete the note?")) {
        notes.splice(x.target.getAttribute('data-delete-index'), 1)
        updateDOMNotes(notes)
      }
    })
    newNoteControl.appendChild(newNoteDelete)
    
    let newNoteDate = document.createElement('p')
    newNoteDate.classList.add('note-created-at')
    newNoteDate.textContent = note.noteDate
    newNoteControl.appendChild(newNoteDate)
    newNote.appendChild(newNoteControl)

    noteList.appendChild(newNote)
  })
}

createNoteButton.addEventListener('click', () => {
  let noteText = noteTextInput.value
  if (noteText != "") {
    noteTextInput.value = ''
    noteForm.hidden = true

    let note = new Note(noteText, format(new Date(), "dd/MM/yy"))
    notes.unshift(note)
    updateDOMNotes(notes)
  }else {
    alert("The note can't be empty")
  }
})
