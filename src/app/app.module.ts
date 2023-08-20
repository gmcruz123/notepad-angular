import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NotesService } from './notes.service';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { mockNotes } from './mock.notes';
import { HighlightedDirective } from './custom/directives/highlighted.directive';

export function notesFactory() {
  const service = new NotesService();
  service['notes'] = mockNotes;
  return service;
}

@NgModule({
  declarations: [
    AppComponent,
    HighlightedDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: NotesService,
      useFactory: notesFactory
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
