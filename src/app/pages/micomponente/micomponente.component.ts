import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';



@Component({
  selector: 'app-micomponente',
  templateUrl: './micomponente.component.html',
  styleUrls: ['./micomponente.component.scss'],
  standalone:true
})


export class MicomponenteComponent implements OnInit{

  private misuscribcion!:Subscription;



  constructor() { }
  ngOnDestroy(): void {
     this.misuscribcion.unsubscribe();
  }

  ngOnInit(): void {

   this.misuscribcion =  interval(1000).subscribe(datos =>{
      console.log(datos);
    });


  }
}
