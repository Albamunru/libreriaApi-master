import { RouterModule, Routes } from '@angular/router';
import { NgModule,Component } from '@angular/core';
import { LibrosComponent } from './libros/libros.component';
import { MainPageComponent } from './main-page.component';
import { TemasComponent } from './temas/temas.component';
import { AutoresComponent } from './autores/autores.component';
//import { CommonModule } from '@angular/common';
import { NuevoLibroComponent } from './nuevo-libro/nuevo-libro.component';
import { ButtonModule } from 'primeng/button';
import { EdicionesComponent } from './ediciones/ediciones.component';
import { FormatosComponent } from './formatos/formatos.component';
import { HomeComponent } from './home/home.component';



const routes : Routes = [
  {
    path: "main",component:MainPageComponent, children:[
      { path: "libros",component: LibrosComponent, data:{title:"Libros"}},
      { path: "temas", component: TemasComponent, data:{title:"Temas"}},
      { path: "autores", component: AutoresComponent, data:{title:"Autores"}},
      {path: "nuevo-libro", component: NuevoLibroComponent, data:{title:"Nuevo Libro"}},
      {path: "formatos", component: FormatosComponent, data:{title:"Formatos"}},
      {path: "ediciones", component: EdicionesComponent, data:{title:"Ediciones"}},
      {path: "home", component: HomeComponent, data:{title:"Home"}},

    ]
  }
];

@NgModule({
  //declarations: [],
  imports: [
    RouterModule.forChild(routes) 
    
  ],
  exports:[
    RouterModule
  ]
})
export class PagesRoutingModule { }
