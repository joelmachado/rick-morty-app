import { Component, HostListener, OnInit } from '@angular/core';
import { CharacterService } from '../../services/character.service';
import { catchError, finalize, of, tap } from 'rxjs';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  characters: any[] = [];
  info: any;
  page: number = 1;
  loading: boolean = false;
  searchTerm: string = '';

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.loadCharacters();
  }

  loadCharacters(): void {
    if (this.loading) return;
    this.loading = true;
    this.characterService.getCharacters(this.page, this.searchTerm).pipe(
      tap(data => {
        if (this.page === 1) {
          this.characters = data.results;
        } else {
          this.characters = [...this.characters, ...data.results];
        }
      }),
      catchError(error => {
        return of([]);
      }),
      finalize(() => {
        this.loading = false;
      })
    ).subscribe();
  }

  extractPageNumber(url: string): number {
    const params = new URLSearchParams(url.split('?')[1]);
    return Number(params.get('page'));
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 500 && !this.loading) {
      this.page++;
      this.loadCharacters();
    }
  }

  onSearch(term: string): void {
   
    if(term.length>=3){
      this.searchTerm = term;
      this.page = 1;
      this.characters = []; 
      this.loadCharacters();
    }

    if(term.length==0){
      this.searchTerm = "";
      this.page = 1;
      this.characters = []; 
      this.loadCharacters();
    }



  }
}