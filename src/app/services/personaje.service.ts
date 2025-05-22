import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { personaje_info } from '../interfaces/personaje_info.mode';
import { personaje } from '../interfaces/personaje.mode';

@Injectable({
  providedIn: 'root'
})
export class PersonajeService {

  constructor() { }
  private http = inject(HttpClient);

  getPersonajes(): Observable<personaje[]> {
    return this.http.get<personaje_info>(`https://rickandmortyapi.com/api/character`).pipe(
      map((response: personaje_info) => response.results)
    )
  }
  getOnePersonajes(id: number) {
    return this.http.get<personaje>(`https://rickandmortyapi.com/api/character/${id}`)
  }


}
