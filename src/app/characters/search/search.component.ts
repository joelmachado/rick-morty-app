import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchTerm: string = '';

  @Output() searchChange = new EventEmitter<string>();

  onSearch(): void {
    this.searchChange.emit(this.searchTerm);
  }
}