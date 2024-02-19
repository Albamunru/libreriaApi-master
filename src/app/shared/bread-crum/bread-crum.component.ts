import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';

import { MenuItem } from 'primeng/api';
import { title } from 'process';
import { Subscription, filter, map } from 'rxjs';

@Component({
  selector: 'app-bread-crum',
  templateUrl: './bread-crum.component.html',
  styleUrl: './bread-crum.component.css'
})
export class BreadCrumComponent implements OnInit,OnDestroy {
  items: MenuItem[] =[]  
  home: MenuItem={icon:'pi pi-home',routerLink:'/'}
  private titleSub$: Subscription 
  constructor(private router:Router){
    this.titleSub$= this.getDataRoute().subscribe(
      ({title})=>{
      this.items=[]
      this.items.push({label:title});

    });

  }
  ngOnDestroy(): void {
   if(this.titleSub$){
    this.titleSub$.unsubscribe();
   }
  }

  
  
ngOnInit(): void {
 
  
}

getDataRoute(){
  return this.router.events.pipe(
filter((event:any)=>{
  return event instanceof ActivationEnd}),
  filter((event:ActivationEnd)=>event.snapshot.firstChild===null),
  map((event:ActivationEnd)=>event.snapshot.data)




  );
}



}
