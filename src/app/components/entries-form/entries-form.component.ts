import { Component } from '@angular/core';
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

}
