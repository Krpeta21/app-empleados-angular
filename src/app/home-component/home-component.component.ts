import { Component } from '@angular/core';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';


@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent {
    titulo = 'Listado de empleados';
    constructor(private miServicio: ServicioEmpleadosService,private empleadosService:EmpleadosService){
      // this.empleados=this.empleadosService.empleados;
    }
    ngOnInit(): void {
      this.empleados=this.empleadosService.empleados;
    }
    empleados:Empleado[]=[];
    agregarEmpleado(){
      
      let miEmpleado = new Empleado(this.cuadroNombre,this.cuadroApellido,this.cuadroCargo,this.cuadroSalario);
      
      this.empleadosService.agregarEmpleado(miEmpleado);
    }
  eliminarEmpleado(){
    this.empleadosService.eliminarEmpleado();
  }
    
    cuadroNombre:string ="";
    cuadroApellido:string ="";
    cuadroCargo:string ="";
    cuadroSalario:number =0;
}
