import { Component } from '@angular/core';
import { EntriesFormComponent } from "./components/entries-form/entries-form.component";
import { EntriesPreviewComponent } from "./components/entries-preview/entries-preview.component";
import { EntriesListComponent } from "./components/entries-list/entries-list.component";

@Component({
  selector: 'app-root',
  imports: [EntriesFormComponent, EntriesPreviewComponent, EntriesListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'blogOutdoor';
}
