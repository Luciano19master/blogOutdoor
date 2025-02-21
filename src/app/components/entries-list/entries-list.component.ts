import { Component, Input } from '@angular/core';
import { IEntries } from '../../interfaces/ientries.interfaces';

@Component({
  selector: 'app-entries-list',
  imports: [],
  templateUrl: './entries-list.component.html',
  styleUrl: './entries-list.component.css'
})
export class EntriesListComponent {
  @Input() entries: IEntries[] = [];

  texto:string = "";

  ngOnInit() {
    this.texto = "";
    this.entries.forEach(entry => {
      this.texto += `<li class="entry">${entry.title}</li>`;
    })
  }
}
