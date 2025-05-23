import { personaje } from './../interfaces/personaje.mode';
import { Component, inject, Input, signal } from '@angular/core';
import { location } from '../interfaces/location.model';
import { CommonModule } from '@angular/common'
import { PersonajeService } from '../services/personaje.service';
import { NgxPaginationModule} from 'ngx-pagination'
@Component({
  selector: 'app-mundo',
  imports: [NgxPaginationModule,CommonModule],
  templateUrl: './mundo.component.html',
  styleUrl: './mundo.component.css'
})
export class MundoComponent {
  @Input({ required: true }) mundo!: location;
  @Input({ required: true }) conta!: number;

  peronajes_mundo = signal<personaje | null>(null);
  private perService = inject(PersonajeService);
  cadenahash: string = "#collapseOned";
  cadena: string = "collapseOned";
  caras:string[]=[];
  paginacaras:number=1;
  paginador:boolean=false;
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.cadenahash = this.cadenahash + this.conta;
    this.cadena = this.cadena + this.conta;

  }
  getOneCadena(cad: []) {
    if(this.caras.length>0){
      this.caras=[];
    }
    for (let index = 0; index < cad.length; index++) {
      const element = cad[index];
     this.perService.getOneCadenaPersonaje(element).subscribe({
       next:(res)=>{
        this.caras.push(res.image)
        this.paginador=this.caras.length>1?true:false;
      }
     });
    }


  }
}
