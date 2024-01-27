import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MicomponenteComponent } from './pages/micomponente/micomponente.component';
import { MuchossuscribersComponent } from './pages/muchossuscribers/muchossuscribers.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,MicomponenteComponent,MuchossuscribersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'desuscribirangular';

  public aparecer:boolean = false;
  public aparecer2:boolean = false;



  public mifuncion(){

  }

}


export function desuscribir(target:any){
   console.log("Mi decorador",target);


   const myoriginal = target.prototype.ngOnInit;

   target.prototype.ngOnInit = function(){
      alert("GHola desde mi decorador");


      myoriginal.apply(this,arguments);
   }


   const myoriginal2 = target.prototype.ngOnDestroy;

   target.prototype.ngOnDestroy = function(){
      alert("Se destruira");


      const todospropiedades = this;


      for(let millavepropiedad in todospropiedades){
        const propiedad = this[millavepropiedad];
        if(propiedad && typeof propiedad.unsubscribe ==='function'){
          propiedad.unsubscribe();
        }
      }


      myoriginal2.apply(this,arguments);
   }


}





