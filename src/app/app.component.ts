import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipesApp';

  nombre: string = 'rosa burrueco';
  valor : number = 1000;
  obj = {
    nombre: 'Rosa'
  }

  mostrarNombre(){
    console.log( this.nombre );
    console.log( this.valor );
  }

}
