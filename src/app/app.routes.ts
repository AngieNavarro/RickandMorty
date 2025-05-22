import { Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { PersonajesComponent } from './personajes/personajes.component';

export const routes: Routes = [

  {
    path:'',
    component:ContentComponent
  },
  {
    path:'personajes',
    component:PersonajesComponent
  }
];
