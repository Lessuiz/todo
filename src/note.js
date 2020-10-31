export default class Note {
  constructor(text, date) {
    this.text = text
    this.date = date
  }
  get noteText() {
    return this.text
  }
  get noteDate() {
    return this.date
  }
}
