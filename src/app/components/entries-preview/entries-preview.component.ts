import { Component, Input } from '@angular/core';
import { IEntries } from '../../interfaces/ientries.interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-entries-preview',
  imports: [CommonModule],
  templateUrl: './entries-preview.component.html',
  styleUrl: './entries-preview.component.css'
})
export class EntriesPreviewComponent {
  @Input() entrypreview: IEntries | null = null;
}
