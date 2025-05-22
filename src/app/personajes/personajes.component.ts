import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common'
import { personaje } from '../interfaces/personaje.mode';
import { PersonajeService } from '../services/personaje.service';
import { PersonaComponent } from "../persona/persona.component";
import { HeadComponent } from "../head/head.component";
import { FootComponent } from "../foot/foot.component";
@Component({
  selector: 'app-personajes',
  imports: [CommonModule, PersonaComponent, HeadComponent, FootComponent],
  templateUrl: './personajes.component.html',
  styleUrl: './personajes.component.css'
})
export class PersonajesComponent {
  listaPersonajes = signal<personaje[]>([]);
  private personaje_serv = inject(PersonajeService);

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getPersonajes();
  }

  getPersonajes() {
    this, this.personaje_serv.getPersonajes().subscribe(
      {
        next: (per) => {
          this.listaPersonajes.set(per);
        }
      }
    )
  }
}
