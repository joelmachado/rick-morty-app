import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private apiUrl = 'https://rickandmortyapi.com/api/character';

  constructor(private httpClient : HttpClient) {}

  getCharacters(page: number, searchTerm: string = '') {
    const url = `${this.apiUrl}?page=${page}&name=${searchTerm}`;
    return this.httpClient.get<any>(url);
  }

  getCharacterById(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}/${id}`);
  }
}
