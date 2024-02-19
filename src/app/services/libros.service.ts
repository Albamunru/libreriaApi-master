import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Libro, } from '../model/libros.model';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  private options={
    headers:{
      'Content-Type':'application/json'
    }
  }
  private URL="https://localhost:44358/api"

  constructor(private httpClient: HttpClient) {

   
   }

   public getLibros():Observable< Libro[]>{
    //return   this.httpClient.get(URL+"libro/libro-controller");
    return this.httpClient.get<Libro[]>("https://localhost:44358/api/libro/libro-controller");

   //return this.httpClient.get(this.URL+"/libro/libro-controller",this.options)
   }
   public putLibros(libro:Libro){
    return this.httpClient.put("https://localhost:44358/api/libro/libro-controller",libro);
   }
}
