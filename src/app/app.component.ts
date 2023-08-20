import { Component, Inject, OnInit } from '@angular/core';
import { NotesService } from './notes.service';
import { Note } from './note';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showNoteForm: boolean = false;
  noteForm = new FormGroup({
    title: new FormControl('', Validators.required),
    body: new FormControl(''),
    color: new FormControl(''),
    favourite: new FormControl(false),
  })
  notes: Note[] = [];
  selected: Partial<Note>;

  constructor(private service: NotesService) {

  }

  ngOnInit() {
    this.loadNotes();
  }

  getNotes() {
    return this.notes;
  }

  private loadNotes(): void {
    this.notes = this.service.getNotes();
  }

  selectNote(note) {
    const { title, body, color, favourite } = note;
    this.showNoteForm = true;
    this.selected = note;
    this.noteForm.setValue({ title, body, color, favourite  });
  }

  newNote() {
    this.showNoteForm = true;
    this.selected = {};
    this.noteForm.reset();
  }

  saveNote(note) {
    this.showNoteForm = false;
    const noteToSave: Partial<Note> =  this.selected?.id  ? { id: this.selected?.id, ...note }: note;
    this.service.saveNote(noteToSave as Note);
  }
}
