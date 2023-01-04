import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";

@Injectable()
export class EmpleadosService{

    constructor(private servicioVentanaEmergente: ServicioEmpleadosService){

    }

    empleados:Empleado[]=[
        new Empleado("Irving","Lopez","Programador",10000),
        new Empleado("Jordi","Chazaro","Comunity Manager",6000),
        new Empleado("Julian","Martinez","Contador",4000),
        new Empleado("Luis","Enriquez","Fisico",5000)
      ];
      agregarEmpleado(empleado: Empleado){
        this.servicioVentanaEmergente.muestraMensaje("Persona a agregar: \n" + empleado.nombre+ "\n" + empleado.salario)
        this.empleados.push(empleado);
      }
      eliminarEmpleado(){
        this.empleados.pop();
      }
}