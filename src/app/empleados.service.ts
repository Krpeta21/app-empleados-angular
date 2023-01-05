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
      encontrarEmpleado(indice: number){
        return this.empleados[indice];         
      }

      actualizarEmpleado(indice:number, empleado:Empleado){
        let empleadoModificado = this.empleados[indice];
        empleadoModificado.nombre = empleado.nombre;
        empleadoModificado.apellido = empleado.apellido;
        empleadoModificado.cargo = empleado.cargo;
        empleadoModificado.salario = empleado.salario;
      }
      eliminarEmpleado(indice:number){
        this.empleados.splice(indice,1);
      }
}