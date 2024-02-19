import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Formato } from '../model/formato.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormatoService {
  private options={
    headers:{
      'Content-Type':'application/json'
    },
    body:{}
  }
  private URL="https://localhost:44358/api"
  constructor(private httpClient: HttpClient) { 

   }
   public async getFormato():Promise<Observable<Formato[]>>{
     return this.httpClient.get<Formato[]>("https://localhost:44358/api/formato/formato-controller");
   }


   public  deleteFormatos(id:number){
    this.options.body={Id:id}
     return this.httpClient.delete<Response>(`https://localhost:44358/api/formato/formato-controller/`,this.options);
   }


  }

