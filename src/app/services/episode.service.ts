import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { episode } from '../interfaces/episode.model';
import { espisode_info } from '../interfaces/episode_info.model';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  constructor() { }
  private http = inject(HttpClient);

  getAllEpisodes(): Observable<episode[]> {
    return this.http.get<espisode_info>(`https://rickandmortyapi.com/api/episode`).
      pipe(map((response: espisode_info) => response.results))
  }

}
