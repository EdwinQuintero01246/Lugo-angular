import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor( private httpCliente : HttpClient) { }
  obtenerCategorias():Observable<any>{
    return this.httpCliente.get('http://localhost:8888/categorias',{});
  }
  guardarCategoria(informacion:any):Observable<any>{
    return this.httpCliente.post('http://localhost:8888/categorias',{
      nombreCategoria:informacion.nombreCategoria,
      descripcion:informacion.descripcion,
      color:informacion.color,
      icono:informacion.icono
    });
  }
}
