import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Autor} from '../model/autor.model'


@Injectable({
  providedIn: 'root'
})
export class  AutoresService {
 

  private options={
    headers:{
      'Content-Type':'application/json'
    },
    body:{}
  }
  private URL="https://localhost:44358/api"

  constructor(private httpClient: HttpClient) {

   
   }

   public async getAutores():Promise<Observable<Autor[]>>{
    //return   this.httpClient.get(URL+"libro/libro-controller");
    return this.httpClient.get<Autor[]>("https://localhost:44358/api/autor/autor-controller");

   //return this.httpClient.get(this.URL+"/libro/libro-controller",this.options)
   }


   public  deleteAutores(id:number){
    this.options.body={Id:id}
     return this.httpClient.delete<Response>(`https://localhost:44358/api/autor/autor-controller/`,this.options);
   }
}

