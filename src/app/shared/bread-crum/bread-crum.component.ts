import { Component, OnDestroy, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-bread-crum',
  templateUrl: './bread-crum.component.html',
  styleUrl: './bread-crum.component.css'
})
export class BreadCrumComponent implements OnInit,OnDestroy {
  items: MenuItem[] =[]  
  home: MenuItem={icon:'pi pi-home',routerLink:'/'}
  constructor(){}
  ngOnDestroy(): void {
   
  }

  
  
ngOnInit(): void {
 this.items=[
   {label:'Autores'},
   {label:'Libros'},
   {label:'Temas'},
 ]
  
}
}
