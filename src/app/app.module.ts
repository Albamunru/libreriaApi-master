import { PagesModule } from './Pages/pages.module';
import { MainPageComponent } from './Pages/main-page.component';
import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { ComponentsComponent } from './components/components.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { BreadCruComponent } from './shared/bread-cru/bread-cru.component';
//import { BarraCierreComponent } from './Components/barra-cierre/barra-cierre.component';
import { HttpClient,HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    //MainPageComponent,
    ComponentsComponent,
    PageNotFoundComponent,
    //BreadCruComponent,
    //BarraCierreComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
