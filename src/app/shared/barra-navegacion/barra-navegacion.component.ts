import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrl: './barra-navegacion.component.css'
})

export class BarraNavegacionComponent {
  navBar: MenuItem[]=[];
constructor(private router:Router){
  
}
  ngOnInit(): void {
    this.navBar= 
   [ {
    Label:"Libros",
    icon:"../../assets/iconos/libro.png",
    command:()=>{
      this.router.navigateByUrl("main/libros");
    }
  },
    {
    Label:"Autores",
    icon:"../../assets/iconos/autor.png",
    command:()=>{
      this.router.navigateByUrl("main/autores");
    }
    },
    {
    Label:"Temas",
    icon:"../../assets/iconos/tema.png",
    command:()=>{
      this.router.navigateByUrl("main/temas");
    }
    }]
     }
    
    
  

}



