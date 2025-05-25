import { Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { MundosComponent } from './mundos/mundos.component';
import { CapitulosComponent } from './capitulos/capitulos.component';

export const routes: Routes = [

  {
    path:'',
    component:ContentComponent
  },
  {
    path:'personajes',
    component:PersonajesComponent
  },
  {
    path:'mundos',
    component:MundosComponent
  },
  {
    path:'capitulos',
    component:CapitulosComponent
  }
];
