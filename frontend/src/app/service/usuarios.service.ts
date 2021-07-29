import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private httpCliente : HttpClient) { }
  obtenerUsuarios():Observable<any>{
    return this.httpCliente.get('http://localhost:8888/usuarios',{});
  }
  guardarOrden(idUsuario:any,informacion:any):Observable<any>{
    return this.httpCliente.post(`http://localhost:8888/usuarios/${idUsuario}/ordenes`,{
      nombreProducto : informacion.nombreProducto,
      descripcion: informacion.descripcion,
      precio: informacion.precio,
      cantidad: informacion.cantidad
    });
  }
  obtenerOrdenes(idUsuario:any):Observable<any>{
    return this.httpCliente.get(`http://localhost:8888/usuarios/${idUsuario}/ordenes`,{});
  }
}
