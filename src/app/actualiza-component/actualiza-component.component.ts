import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-actualiza-component',
  templateUrl: './actualiza-component.component.html',
  styleUrls: ['./actualiza-component.component.css']
})
export class ActualizaComponentComponent implements OnInit {
titulo = "Actualizar Informacion"
accion:number;
constructor(private route:ActivatedRoute,private router: Router,private miServicio: ServicioEmpleadosService,private empleadosService:EmpleadosService){}
  empleados:Empleado[]=[];  
  ngOnInit(): void { 
    this.accion = this.route.snapshot.queryParams['accion']  
    this.empleados=this.empleadosService.empleados;
    this.indice = this.route.snapshot.params['id'];
    let empleado:Empleado = this.empleadosService.encontrarEmpleado(this.indice);
    this.cuadroNombre = empleado.nombre;
    this.cuadroApellido = empleado.apellido;
    this.cuadroCargo = empleado.cargo;
    this.cuadroSalario = empleado.salario;    
  }
  volverHome(){
    this.router.navigate([""]);
    
  }
  // modificarEmpleado(){
      
  //   let miEmpleado = new Empleado(this.cuadroNombre,this.cuadroApellido,this.cuadroCargo,this.cuadroSalario);
  //   this.empleadosService.actualizarEmpleado(this.indice,miEmpleado);
  //   this.router.navigate([""]);
  // }

  // eliminarEmpleado(){
  //   this.empleadosService.eliminarEmpleado(this.indice);
  //   this.router.navigate([""]);
  // }
  
   modificarEmpleado(){
    if(this.accion == 1){  
    let miEmpleado = new Empleado(this.cuadroNombre,this.cuadroApellido,this.cuadroCargo,this.cuadroSalario);
    this.empleadosService.actualizarEmpleado(this.indice,miEmpleado);
    this.router.navigate([""]).then(() => {
      alert("Se ha modificado el empleado.")
    });    
    }else{
    this.empleadosService.eliminarEmpleado(this.indice);
    this.router.navigate([""]).then(() => {
      alert("Se ha eliminado el empleado.")
    });    
    
    }
  }
  cuadroNombre:string = "";
  cuadroApellido:string ="";
  cuadroCargo:string ="";
  cuadroSalario:number =0;
  indice:number;
}
