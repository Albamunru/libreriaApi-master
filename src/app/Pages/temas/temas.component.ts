import { Component, OnInit } from '@angular/core';
import { Temas } from '../../model/temas.model';
import { TemasService } from '../../services/temas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-temas',
  templateUrl: './temas.component.html',
  styleUrl: './temas.component.css'
})
export class TemasComponent implements OnInit {
  listaTemas:Temas[]=[]

  constructor(private temasService:TemasService) { }
  async ngOnInit(): Promise<void> {
    
   this.getTemas();
  }




  async getTemas(){
    (await this.temasService.getTemas()).subscribe((temas)=>{
      this.listaTemas=temas
    })
  }

  deleteTemas(tema:Temas){

    Swal.fire({
      title:'Estas seguro de borrar',
      text:`${tema.nombre}`,
      showCancelButton:true,
    }).then((result)=>{
      if(result.isConfirmed){
        this.temasService.deleteTemas(tema.id).subscribe((res)=>{
          console.log(res)
          this.getTemas();
        });
      }
    });
    
    
     }

}
