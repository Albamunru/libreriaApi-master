import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadCrumComponent } from './bread-crum/bread-crum.component';
import { BarraNavegacionComponent } from './barra-navegacion/barra-navegacion.component';
import{ButtonModule } from 'primeng/button';
import{BreadcrumbModule} from 'primeng/breadcrumb';



@NgModule({
  declarations: [
    BreadCrumComponent,
    BarraNavegacionComponent,
  
  ],
  //SharedModule
  exports:[BarraNavegacionComponent,BreadCrumComponent],
  imports: [
    CommonModule,BreadcrumbModule,
    ButtonModule
  ]
})
export class SharedModule { }
