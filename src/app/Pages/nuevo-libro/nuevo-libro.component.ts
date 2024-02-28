import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { AutoresService } from '../../services/autores.service';
import { Autor } from '../../model/autor.model';
import { Temas } from '../../model/temas.model';
import { TemasService } from '../../services/temas.service';
import { Formato } from '../../model/formato.model';
import { FormatoService } from '../../services/formato.service';
import { Edicion } from '../../model/edicion.model';
import { EdicionService } from '../../services/edicion.service';
import { Libro } from '../../model/libros.model';
import { LibrosService } from '../../services/libros.service';
import { FileUploadService } from '../../services/file.upload.service';
import { CLIENT_RENEG_LIMIT } from 'node:tls';
import { log } from 'node:console';


 
@Component({
  selector: 'app-nuevo-libro',
  templateUrl: './nuevo-libro.component.html',
  styleUrls: ['./nuevo-libro.component.css']
})
export class NuevoLibroComponent implements OnInit {
  [x: string]: any;
  libroFormulario:FormGroup
  private pulsadoBtnGuardar:boolean=false
  
  @ViewChild("inputImg") imgInput : ElementRef | undefined;
  listaAutores:Autor[]=[];
  listaTemas:Temas[]=[];
  listaFormatos:Formato[]=[];
  listaEdicion:Edicion[]=[];

  libro:Libro=new Libro()

  
  
public imgUpload:File|any
public imgTemp:string|any="../../../assets/iconos/librodefecto.jpg"
  
  constructor(private fb:FormBuilder,private autoresService:AutoresService,private temasService:TemasService,private formatoService:FormatoService, private edicionService:EdicionService,private librosService:LibrosService) {
this.libroFormulario=this.fb.group({
  
})
 
   }

  async ngOnInit(): Promise<void> {

    


   this.libroFormulario=this.fb.group({
     nombre:["Nombre",[Validators.required]],
     isbn:["ISBN",[Validators.required]],
     precio:[0,[Validators.required]],
     cantidad:[0,Validators.required],
     autor:["Autor",Validators.required],
     edicion:["Edicion",Validators.required],
     formato:["Formato",Validators.required],
     tema:["Tema",Validators.required],
     ImgNombre:[""],
   })

   

  await this.obtenerAutores();
  }




public async obtenerAutores(){
   (await this.autoresService.getAutores()).subscribe((autores:Autor[])=>{
    this.listaAutores=autores
    console.log(this.listaAutores)
  })
}

public async obtenerFormato(){
 (await this.formatoService.getFormato()).subscribe((formatos:Formato[])=>{
    this.listaFormatos=formatos
    console.log(this.listaFormatos)
  })
}
public async obtenerEdicion(){
 (await this.edicionService.getEdicion()).subscribe((edicion:Edicion[])=>{
    this.listaEdicion=edicion
    console.log(this.listaEdicion)
  })
}



public async obtenerTemas(){
  (await this.temasService.getTemas()).subscribe((temas:Temas[])=>{
    this.listaTemas=temas
    console.log(this.listaTemas)
  })
}




 

  isValidField(key:string){
    return this.libroFormulario.get(key)?.invalid && this.pulsadoBtnGuardar
  }


  //ACABAR ESTE METODO SI O SI
  saveBook(){

  this.pulsadoBtnGuardar=true

  //this.pulsadoBtnGuardar=true
  console.log(this.libroFormulario.value)
  
  //post de libro
  this.librosService.putLibros(this.libroFormulario.value).subscribe((respuesta)=>{
   console.log(this.libroFormulario.value)
    console.log(respuesta)
    
  }

  )
    window.location.href="http://localhost:4200/main/libros";  
  }


  changeImg(){
    this.imgTemp=this.imgInput?.nativeElement.value
    console.log(this.imgTemp);
    
  }

}