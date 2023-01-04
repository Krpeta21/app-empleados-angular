import { Component } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de empleados';

  constructor(private miServicio: ServicioEmpleadosService){
      
  }

  agregarEmpleado(){
    
    let miEmpleado = new Empleado(this.cuadroNombre,this.cuadroApellido,this.cuadroCargo,this.cuadroSalario);
    this.miServicio.muestraMensaje("Nombre: "+miEmpleado.nombre + " " + miEmpleado.apellido);
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
