import { LocationsService } from './../services/locations.service';
import { Component, signal, inject } from '@angular/core';
import { location } from '../interfaces/location.model';
import { CommonModule } from '@angular/common'
import { MundoComponent } from "../mundo/mundo.component";
import { HeadComponent } from "../head/head.component";
import { FootComponent } from "../foot/foot.component";
import { NgxPaginationModule, PaginationControlsComponent } from "ngx-pagination"
@Component({
  selector: 'app-mundos',
  imports: [NgxPaginationModule, CommonModule, MundoComponent, HeadComponent, FootComponent],
  templateUrl: './mundos.component.html',
  styleUrl: './mundos.component.css'
})
export class MundosComponent {

  locaciones = signal<location[]>([]);
  private locaciones_serv = inject(LocationsService);
  paginamundos: number = 1;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getAllLocations();
  }

  getAllLocations() {
    this.locaciones_serv.getalllocations().subscribe(
      {
        next: (local) => {
          for (let index = 0; index < local.length; index++) {
            const element = local[index];
            if (element.residents.length > 0) {
              this.locaciones.set(local)
            }
          }
        }
      }
    )
  }
}
