import { episode } from './../interfaces/episode.model';
import { Component, inject, signal } from '@angular/core';
import { EpisodeService } from '../services/episode.service';
import { CommonModule } from '@angular/common'
import { HeadComponent } from "../head/head.component";
import { FootComponent } from "../foot/foot.component";
import { LocationsService } from '../services/locations.service';
import { PersonajeService } from '../services/personaje.service';
import { forkJoin, map } from 'rxjs';
@Component({
  selector: 'app-capitulos',
  imports: [CommonModule, HeadComponent, FootComponent],
  templateUrl: './capitulos.component.html',
  styleUrl: './capitulos.component.css'
})
export class CapitulosComponent {
  temporada: string = "Temporadas";
  temporadatitulo: string = "Temporadas";
  tempo: string[] = [];
  unicos: string[] = [];
  episodes: string[] = [];
  listado_episodes = signal<episode[]>([]);
  episodes_filtrados = signal<episode[]>([]);
  caras_episodes = signal<string[]>([]);

  imagenesxitem: { [id: number]: string[] } = {};
  cargando: { [id: number]: boolean } = {};
  visible: { [id: number]: boolean } = {};
  progreso: { [key: number]: number } = {};
  private serviceEpisode = inject(EpisodeService);
  private servicioImagen = inject(PersonajeService);

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getAllEpisodes();
  }

  getAllEpisodes() {
    this.serviceEpisode.getAllEpisodes().subscribe({
      next: (epi) => {
        this.listado_episodes.set(epi)
         console.log(this.listado_episodes())
        for (let index = 0; index < this.listado_episodes().length; index++) {
          const element = this.listado_episodes()[index];
          let cadena = element.episode.split('E');
          // console.log(cadena)
          this.tempo.push(cadena[0].substring(1,3));
          this.episodes.push(element.episode);
        }
        this.unicos = [... new Set(this.tempo)];
      }
    })
  }
  getExT(temporada: string) {
    console.log(temporada)
    this.temporadatitulo="Temporada"+" "+temporada.substring(0,3);
    temporada="S"+temporada;

    const episodesFiltrados: episode[] = [];
    for (let index = 0; index < this.listado_episodes().length; index++) {
      const element = this.listado_episodes()[index];
      if (element.episode.includes(temporada)) {
        // console.log(element)
        episodesFiltrados.push(element);
      }
    }
    this.episodes_filtrados.set(episodesFiltrados);
  }
  personajesxcap(persona: string[], id: number) {
    // Ya cargadas: solo mostrar u ocultar
        // console.log(this.imagenesxitem[id])


    if (this.imagenesxitem[id]) {
      this.visible[id] = !this.visible[id];
      return;
    }

    this.cargando[id] = true;
    this.progreso[id] = 0;

    const imagenes: string[] = [];
    let cargadas = 0;
    const total = persona.length;
    this.visible[id] = false;
    // console.log('visible' + this.visible[id])
    // console.log('cargando' + this.cargando[id])
    persona.forEach((url, i) => {
      this.servicioImagen.getOneCadenaPersonaje(url).subscribe({
        next: (data) => {
          setTimeout(() => {
            imagenes.push(data.image);
            cargadas++;
            this.progreso[id] = Math.round((cargadas / total) * 100); // calculo para tomar la longitud del array y cambiarlo al 100%
            // console.log('cargadas:' + this.progreso[id]);
            if (cargadas === persona.length) {
              setTimeout(() => {
                this.imagenesxitem[id] = imagenes;
                this.visible[id] = true;
                this.cargando[id] = false;

                // console.log('visible' + this.visible[id])
                // console.log('cargando' + this.cargando[id])
              }, 300)
            }
          }, i * 300);

        }
      });
    });
  }
}
