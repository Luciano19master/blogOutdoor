import { Component, Input } from '@angular/core';
import { IEntries } from '../../interfaces/ientries.interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-entries-list',
  imports: [CommonModule],
  templateUrl: './entries-list.component.html',
  styleUrl: './entries-list.component.css'
})
export class EntriesListComponent {
  @Input() entries: IEntries[] = [];

  texto:string = "";

  ngOnInit() {

  }
}
