import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MicomponenteComponent } from './pages/micomponente/micomponente.component';
import { MuchossuscribersComponent } from './pages/muchossuscribers/muchossuscribers.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,MicomponenteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'desuscribirangular';

  public aparecer:boolean = false;



  public mifuncion(){

  }

}





