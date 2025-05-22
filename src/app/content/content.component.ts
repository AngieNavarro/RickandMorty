import { personaje } from './../interfaces/personaje.mode';
import { Component, inject, signal } from '@angular/core';
import { HeadComponent } from "../head/head.component";
import { FootComponent } from "../foot/foot.component";
import { PersonajeService } from '../services/personaje.service';

@Component({
  selector: 'app-content',
  imports: [HeadComponent, FootComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

  rick=signal<personaje|null>(null);
  beth=signal<personaje|null>(null);
  morty=signal<personaje|null>(null);
  summer=signal<personaje|null>(null);
  jerry=signal<personaje|null>(null);
  private lista_personajes=inject(PersonajeService);

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getPersonajes(1,this.rick);
    this.getPersonajes(2,this.morty);
    this.getPersonajes(3,this.summer);
    this.getPersonajes(4,this.beth);
    this.getPersonajes(5,this.jerry);
  }

  getPersonajes(id:number, persona:any){
    this.lista_personajes.getOnePersonajes(id).subscribe({
      next:(pers)=>{
       persona.set(pers);
      }
    })
  }
}
