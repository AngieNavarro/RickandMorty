import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { location } from '../interfaces/location.model';
import { HttpClient } from '@angular/common/http';
import { location_info } from '../interfaces/location_info.model';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  constructor() { }
  private http = inject(HttpClient);

  getalllocations(): Observable<location[]> {
    return this.http.get<location_info>(`https://rickandmortyapi.com/api/location`).
      pipe(map((response: location_info) => response.results))
  }

}
