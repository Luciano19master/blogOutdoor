import { Component } from '@angular/core';
import { EntriesFormComponent } from "./components/entries-form/entries-form.component";
import { EntriesPreviewComponent } from "./components/entries-preview/entries-preview.component";
import { EntriesListComponent } from "./components/entries-list/entries-list.component";
import { IEntries } from './interfaces/ientries.interfaces';

@Component({
  selector: 'app-root',
  imports: [EntriesFormComponent, EntriesPreviewComponent, EntriesListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  entriesList: IEntries[] = [
    {
      title: 'Psicobloc',
      image: 'https://static.nationalgeographic.es/files/styles/image_3200/public/01AlexHonnold.webp?w=1450&h=816',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, doloremque.',
      date: new Date('01/08/2023'),
    },    
    {
      title: 'Free solo',
      image:'https://static.nationalgeographic.es/files/styles/image_3200/public/07AlexHonnold.webp?w=1450&h=967&q=100',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, doloremque.',
      date: new Date('10/08/2024'),
    }
  ];

  getDataEntry(event: IEntries) {
    this.entriesList.push(event);
    console.log(this.entriesList);
  }
}
