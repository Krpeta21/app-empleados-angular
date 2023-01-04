import { Component } from '@angular/core';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de empleados';
  agregarEmpleado(){
    let miEmpleado = new Empleado(this.cuadroNombre,this.cuadroApellido,this.cuadroCargo,this.cuadroSalario);
    this.empleados.push(miEmpleado);
  }
eliminarEmpleado(){
  this.empleados.pop();
}
  empleados:Empleado[]=[
    new Empleado("Irving","Lopez","Programador",10000),
    new Empleado("Jordi","Chazaro","Comunity Manager",6000),
    new Empleado("Julian","Martinez","Contador",4000),
    new Empleado("Luis","Enriquez","Fisico",5000)
  ];
  cuadroNombre:string ="";
  cuadroApellido:string ="";
  cuadroCargo:string ="";
  cuadroSalario:number =0;
  
  

}
