
/*import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PagesRoutingModule } from './Pages/pages-routing.module';
import { MainPageComponent } from './Pages/main-page.component';  
import { AutoresComponent } from './Pages/autores/autores.component';
import { LibrosComponent } from './Pages/libros/libros.component';  
import { TemasComponent } from './Pages/temas/temas.component';*/

import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core"; 
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { PagesRoutingModule } from "./Pages/pages-routing.module";
import { LibrosComponent } from "./Pages/libros/libros.component";
import { MainPageComponent } from "./Pages/main-page.component";  



const routes: Routes = [
  { path: '',redirectTo: '/main', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }, 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
     PagesRoutingModule],
  exports: [RouterModule]
})

export class AppRoutingModule { }
