import { Injectable } from "@angular/core";
import { DataServices } from "./data.services";
import { Empleado } from "./empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";

@Injectable()
export class EmpleadosService{

    constructor(private servicioVentanaEmergente: ServicioEmpleadosService, private dataService: DataServices){

    }
    setEmpleados(misEmpleados:Empleado[]){
        this.empleados = misEmpleados;
    }
    obtenerEmpleados(){
      return this.dataService.cargarEmpleados();
    }
    empleados:Empleado[]=[];
    // empleados:Empleado[]=[
    //     new Empleado("Irving","Lopez","Programador",10000),
    //     new Empleado("Jordi","Chazaro","Comunity Manager",6000),
    //     new Empleado("Julian","Martinez","Contador",4000),
    //     new Empleado("Luis","Enriquez","Fisico",5000)
    //   ];
      agregarEmpleado(empleado: Empleado){
        this.servicioVentanaEmergente.muestraMensaje("Persona a agregar: \n" + empleado.nombre+ "\n" + empleado.salario)
        this.empleados.push(empleado);
        this.dataService.guardarEmpleados(this.empleados);
        
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
        this.dataService.actualizarEmpleado(indice,empleado);
        
      }
      eliminarEmpleado(indice:number){
        this.empleados.splice(indice,1);
        this.dataService.eliminarEmpleado(indice);
        if(this.empleados != null)this.dataService.guardarEmpleados(this.empleados);        
      }
}