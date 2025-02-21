import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IEntries } from '../../interfaces/ientries.interfaces';

@Component({
  selector: 'app-entries-form',
  imports: [FormsModule],
  templateUrl: './entries-form.component.html',
  styleUrl: './entries-form.component.css'
})
export class EntriesFormComponent {
  newEntry: IEntries = {
    title: '', 
    image: '', 
    text: '', 
    date: new Date()
  };
  @Output() newEntryEvent: EventEmitter<IEntries> = new EventEmitter(); 
  getEntry() {
    this.newEntryEvent.emit(this.newEntry);
    this.newEntry = {
      title: '', 
      image: '', 
      text: '', 
      date: new Date()
    }
  }

}
