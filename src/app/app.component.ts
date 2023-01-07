import { Component, OnInit } from '@angular/core';
import { Empleado } from './empleado.model';
import { EmpleadosService } from './empleados.service';
import firebase from 'firebase/compat/app'
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private loginService: LoginService){}
  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyDBUgbENUF0uq1-4dlBdAdch5AbZpcksyk",
      authDomain: "clientes-9fc2c.firebaseapp.com",
    });
  }

  estaLogueado(){
    return this.loginService.estaLogueado();
  }
  logout(){
    this.loginService.logout();
  }

}
