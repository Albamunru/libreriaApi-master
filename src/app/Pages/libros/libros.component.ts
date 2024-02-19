import { Component, OnInit } from '@angular/core';
import { LibrosService } from './../../services/libros.service';
import { Libro} from '../../model/libros.model';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrl: './libros.component.css'
})
export class LibrosComponent implements  OnInit {

  listaLibro:Array<Libro>=[];
  constructor(private librosService:LibrosService){}
  ngOnInit(): void {

    this.librosService.getLibros().subscribe((libros:Libro[])=>{
      console.log(libros)
      this.listaLibro=libros;
      this.listaLibro.forEach(cadaLibro => {
        console.log("libroNuevo");
        console.log(cadaLibro.Nombre);
        if(cadaLibro.ImgNombre==""){
          cadaLibro.ImgNombre="https://img.freepik.com/vector-gratis/libro-abierto-blanco_1308-22968.jpg?w=1060&t=st=1708029021~exp=1708029621~hmac=8d5b0da09ec19916aa0457d2bfd5c23c820aaf27b4e8e7fd148c9897e6f3ad3e"
        }
      });
    });
}

public eliminarLibro(libro:Libro){
  console.log("libro eliminado:"+libro);
this.listaLibro.forEach(cadaLibro => {
  if(cadaLibro.ISBN==libro.ISBN){
    this.listaLibro.splice(this.listaLibro.indexOf(cadaLibro),1);
  }
  
});
}

}
