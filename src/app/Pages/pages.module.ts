import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { LibrosComponent } from './libros/libros.component';
import { AutoresComponent } from './autores/autores.component';
import { TemasComponent } from './temas/temas.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from './../components/components.module';
import { ButtonModule } from 'primeng/button';
import {CardModule} from 'primeng/card';
import { NuevoLibroComponent } from './nuevo-libro/nuevo-libro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{DropdownModule} from 'primeng/dropdown';
import { FormatosComponent } from './formatos/formatos.component';
import { EdicionesComponent } from './ediciones/ediciones.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    MainPageComponent,
    LibrosComponent,
    AutoresComponent,
    TemasComponent,
    NuevoLibroComponent,
    FormatosComponent,
    EdicionesComponent,
    HomeComponent
  ],
 
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ComponentsModule,
    CardModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    BrowserAnimationsModule
  
    
  
  
    

  ],
  exports: [
  ]
})
export class PagesModule { }
