import { Component, OnInit } from '@angular/core';
import { Formato } from '../../model/formato.model';
import { FormatoService } from '../../services/formato.service';
import { Temas } from '../../model/temas.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formatos',
  templateUrl: './formatos.component.html',
  styleUrl: './formatos.component.css'
})
export class FormatosComponent implements OnInit {
  listaFormatos:Formato[]=[]
  constructor(private formatoService:FormatoService) { }
 async ngOnInit(): Promise<void>  {

  this.getFormatos();
  }
 async getFormatos() {
  (await this.formatoService.getFormato()).subscribe((formatos)=>{
    this.listaFormatos=formatos
  })
  }



  deleteFormatos(formato:Formato){

    Swal.fire({
      title:'Estas seguro de borrar',
      text:`${formato.nombre}`,
      showCancelButton:true,
    }).then((result)=>{
      if(result.isConfirmed){
        this.formatoService.deleteFormatos(formato.id).subscribe((res)=>{
          console.log(res)
          this.getFormatos();
        });
      }
    });
    
    
     }

}
