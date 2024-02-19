import { Component, OnInit } from '@angular/core';
import { Edicion } from '../../model/edicion.model';
import { EdicionService } from '../../services/edicion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ediciones',
  templateUrl: './ediciones.component.html',
  styleUrl: './ediciones.component.css'
})
export class EdicionesComponent implements OnInit {
  listaEdiciones:Edicion[]=[]
  constructor(private edicionService:EdicionService) { }
 async ngOnInit(): Promise <void> {

  this.getEdiciones();
  }
 async getEdiciones() {
  (await this.edicionService.getEdicion()).subscribe((ediciones)=>{
    this.listaEdiciones=ediciones
  })
  }



  deleteEdiciones(edicion:Edicion){

    Swal.fire({
      title:'Estas seguro de borrar',
      text:`${edicion.nombre}`,
      showCancelButton:true,
    }).then((result)=>{
      if(result.isConfirmed){
        this.edicionService.deleteEdiciones(edicion.id).subscribe((res)=>{
          console.log(res)
          this.getEdiciones();
        });
      }
    });
    
    
     }



}
