import { Component, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { desuscribir } from '../../app.component';


@Component({
  selector: 'app-muchossuscribers',
  templateUrl: './muchossuscribers.component.html',
  styleUrls: ['./muchossuscribers.component.scss'],
  standalone:true
})
@desuscribir
export class MuchossuscribersComponent implements OnInit {

  private misuscribcion!:Subscription;
  private misuscribcion2!:Subscription;
  private misuscribcion3!:Subscription;
  private misuscribcion4!:Subscription;
  private misuscribcion5!:Subscription;
  private misuscribcion6!:Subscription;
  private misuscribcion7!:Subscription;
  constructor() { }

  ngOnInit() {

    this.misuscribcion =  interval(1000).subscribe(datos =>{
      console.log("dato1",datos);
    });
    this.misuscribcion2 =  interval(1000).subscribe(datos =>{
      console.log("dato2",datos);
    });
    this.misuscribcion3 =  interval(1000).subscribe(datos =>{
      console.log("dato3",datos);
    });
    this.misuscribcion4 =  interval(1000).subscribe(datos =>{
      console.log("dato4",datos);
    });
    this.misuscribcion5 =  interval(1000).subscribe(datos =>{
      console.log("dato5",datos);
    });
    this.misuscribcion6 =  interval(1000).subscribe(datos =>{
      console.log("dato6",datos);
    });
    this.misuscribcion7 =  interval(1000).subscribe(datos =>{
      console.log("dato7",datos);
    });

  }

  ngOnDestroy(){}

}
