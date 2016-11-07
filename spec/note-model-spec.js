'use srict';

var note = new Note('howdy')

if(note.returnNote() !== 'howdy'){
  throw new Error('Return Note doesnt return the note')
} else {
  console.log('Passing')
}
