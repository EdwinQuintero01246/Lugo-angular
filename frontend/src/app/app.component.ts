import { Component, ViewChild } from '@angular/core';
import { MainComponent } from './component/main/main.component';
import { NavbarComponent } from './component/navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Frontendlugo';

  @ViewChild('mains') mainComponent!:MainComponent;
  @ViewChild('navbars') navbarComponent!:NavbarComponent ;

  obtenerUsuarioNavbar(arrayUser:any){
    console.log("Array usuario, app.component", arrayUser);
    this.mainComponent.usuarioHerencia(arrayUser);
  }
  guardarUsuario(arrayInfo:any){
    console.log("informacion (maincomponents):", arrayInfo);
    this.navbarComponent.guardarOrden(arrayInfo);
  }
}