import { Component, Input } from '@angular/core';
import { personaje } from '../interfaces/personaje.mode';

@Component({
  selector: 'app-persona',
  imports: [],
  templateUrl: './persona.component.html',
  styleUrl: './persona.component.css'
})
export class PersonaComponent {

  @Input({required:true}) persona!:personaje;
  @Input({required:true}) indice:number=0;


}
