import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Temas } from '../model/temas.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TemasService {
  

  private options={
    headers:{
      'Content-Type':'application/json'
    },
    body:{}
  }
  private URL="https://localhost:44358/api"
  constructor(private httpClient: HttpClient) {

   }
   public async getTemas():Promise<Observable<Temas[]>>{
     return this.httpClient.get<Temas[]>("https://localhost:44358/api/tema/tema-controller");
   }


   public deleteTemas(id:number){
    this.options.body={Id:id}
     return this.httpClient.delete<Response>(`https://localhost:44358/api/tema/tema-controller/`,this.options);
   }




}
