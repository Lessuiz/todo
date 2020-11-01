import { format } from 'date-fns'


// Show the note creation form

const noteForm = document.querySelector("#new-note-form")
const noteFormButton = document.querySelector(".new-note")

noteFormButton.addEventListener('click', () => {
  noteForm.hidden = !noteForm.hidden
})

// Note creation logic

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
    newNoteDelete.addEventListener('click', () => {
      notes.forEach((i, index) => {
        if (index == newNoteDelete.getAttribute('data-delete-index')) {
          notes.splice(index, 1)
        }
      })
      updateDOMNotes(notes)
    })
    newNoteControl.appendChild(newNoteDelete)
    // TODO: delete button logic
    
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
  noteTextInput.value = ''
  noteForm.hidden = true

  let note = new Note(noteText, format(new Date(), "dd/MM/yy"))
  notes.unshift(note)
  console.log(notes)
  updateDOMNotes(notes)
})
