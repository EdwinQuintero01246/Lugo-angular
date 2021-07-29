import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faBriefcaseMedical } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoriasService } from 'src/app/service/categorias.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @Output() onCategoria = new EventEmitter();

  nombreUsuario:any;
  categorias:any=[];
  empresaCategorias:any=[];
  nombreCategoria:any;
  empresaNombreProducto:any;
  empresaDescripcion:any;
  empresaPrecio:any;
  empresaCantidad:any;
  enviarPedido:any=[];
  constructor(private categoriasService:CategoriasService, private modalService:NgbModal) { }

  ngOnInit(): void {
    this.categoriasService.obtenerCategorias().subscribe(
      res =>{
        this.categorias = res;
        console.log("categorias:", res);
      },
      error =>{
        console.log(error);
      }
    );
    console.log("usuario",this.nombreUsuario)
  }
  usuarioHerencia(array:any){
    console.log("Array usuario, mainComponent", array);
    this.nombreUsuario = array.nombre;
  }
  infoCategorias(idCategoria:any,modal:any){
    this.modalService.open(
      modal,
      {
        size:'xl',
        centered:false
      }
    );
    //console.log("id categoria ",idCategoria);
    for(var categoria of this.categorias){
      if(categoria._id==idCategoria){
        this.nombreCategoria=categoria.nombreCategoria;
        this.empresaCategorias=categoria.empresas;
        console.log("Categorias: ",categoria.empresas);
      }
    }
  }
  pedir(modal:any, nombreProducto:any,descripcion:any,precio:any){
    this.modalService.open(
      modal,
      {
        size:'md',
        centered:true
      }
    );
    console.log(nombreProducto,descripcion,precio);
      this.empresaNombreProducto=nombreProducto;
      this.empresaDescripcion=descripcion;
      this.empresaPrecio=precio;
  }
  ProcesarOrden(){
    this.enviarPedido ={
      nombreProducto: this.empresaNombreProducto,
      descripcion: this.empresaDescripcion,
      precio: this.empresaPrecio,
      cantidad: this.empresaCantidad
    }
    console.log("informacion (maincomponents):", this.enviarPedido);
    this.onCategoria.emit(this.enviarPedido);
  }
  faBriefcaseMedical=faBriefcaseMedical;
}
