import { Component, OnInit } from '@angular/core';
import { Autor } from '../../model/autor.model';
import { AutoresService } from '../../services/autores.service'; 
import Swal from 'sweetalert2';


@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrl: './autores.component.css'
})
export class AutoresComponent implements OnInit {
  listaAutores:Autor[]=[]
  constructor(private autoresService:AutoresService) { }
  async ngOnInit(): Promise<void> {

    this.getAutores();
    
   
  }


  async getAutores(){
    (await this.autoresService.getAutores()).subscribe((autores)=>{
      this.listaAutores=autores
    })
  }


 deleteAutores(autor:Autor){

Swal.fire({
  title:'Estas seguro de borrar',
  text:`${autor.nombre}`,
  showCancelButton:true,
}).then((result)=>{
  if(result.isConfirmed){
    this.autoresService.deleteAutores(autor.id).subscribe((res)=>{
      console.log(res)
      this.getAutores();
    });
  }
});


 }
   


}
