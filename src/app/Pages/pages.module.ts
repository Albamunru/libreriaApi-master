import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { LibrosComponent } from './libros/libros.component';
import { AutoresComponent } from './autores/autores.component';
import { TemasComponent } from './temas/temas.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    MainPageComponent,
    LibrosComponent,
    AutoresComponent,
    TemasComponent
  ],
 
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
    

  ],
  exports: [
  ]
})
export class PagesModule { }
