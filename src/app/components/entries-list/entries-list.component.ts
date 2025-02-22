import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Input() preview: any = null;
  @Output() entrieSelected = new EventEmitter<IEntries>();
  selectEntry(entry: IEntries) {
    this.entrieSelected.emit(entry);
  }
}
