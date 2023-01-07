import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";
import { LoginService } from "./login/login.service";

@Injectable()
export class DataServices{

    constructor(private httpClient:HttpClient,private loginService:LoginService){}
    token=this.loginService.getIdToken();
    cargarEmpleados(){ 
        const token=this.loginService.getIdToken();       
        return this.httpClient.get('https://clientes-9fc2c-default-rtdb.firebaseio.com/datos.json?auth='+token)
    }
    guardarEmpleados(empleados:Empleado[]){
        const token=this.loginService.getIdToken();   
        this.httpClient.put('https://clientes-9fc2c-default-rtdb.firebaseio.com/datos.json?auth='+token,empleados).subscribe(
        response=>console.log("Se han guardado los empleados: " + response),
        error=> console.log("Error: " + error),
        );
    }
    actualizarEmpleado(indice:number, empleado:Empleado){
        const token=this.loginService.getIdToken();   
        let url = 'https://clientes-9fc2c-default-rtdb.firebaseio.com/datos/'+indice+ '.json?auth='+token
        this.httpClient.put(url,empleado).subscribe(
        response=>console.log("Se ha modificado el empleado: " + response),
        error=> console.log("Error: " + error),
        );
        
    }
    eliminarEmpleado(indice:number){
        const token=this.loginService.getIdToken();   
        let url = 'https://clientes-9fc2c-default-rtdb.firebaseio.com/datos/'+indice+ '.json?auth='+token
        this.httpClient.delete(url).subscribe(
            response=>console.log("Se ha Eliminado el empleado: " + response),
            error=> console.log("Error: " + error),
            );
    }
    recargarPagina(){
        window.location.reload();
    }
}