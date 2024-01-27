import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { desuscribir } from '../../app.component';



@Component({
  selector: 'app-micomponente',
  templateUrl: './micomponente.component.html',
  styleUrls: ['./micomponente.component.scss'],
  standalone:true
})

@desuscribir
export class MicomponenteComponent implements OnInit{

  private misuscribcion!:Subscription;
  private misuscribcion2!:Subscription;



  constructor() { }
  ngOnDestroy(): void {
     this.misuscribcion.unsubscribe();
  }

  ngOnInit(): void {

   this.misuscribcion =  interval(1000).subscribe(datos =>{
      console.log(datos);
    });


    this.misuscribcion2 =  interval(1000).subscribe(datos =>{
      console.log("mis datos",datos);
    });



  }
}
