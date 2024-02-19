import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Edicion } from '../model/edicion.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EdicionService {
 

  private options={
    headers:{
      'Content-Type':'application/json'
    },
    body:{}
  }
  private URL="https://localhost:44358/api"

  constructor(private httpClient: HttpClient) { 
}

public async getEdicion():Promise<Observable<Edicion[]>>{
  return this.httpClient.get<Edicion[]>("https://localhost:44358/api/edicion/edicion-controller");

}



public  deleteEdiciones(id:number){
  this.options.body={Id:id}
   return this.httpClient.delete<Response>(`https://localhost:44358/api/edicion/edicion-controller/`,this.options);
 }

}
