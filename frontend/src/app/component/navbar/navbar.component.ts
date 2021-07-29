import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {  } from '@fortawesome/free-solid-svg-icons'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoriasService } from 'src/app/service/categorias.service';
import { UsuariosService } from 'src/app/service/usuarios.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() onUsuarios = new EventEmitter();


  usuarios:any=[];
  ordenes:any=[];
  usuariosFT:boolean=false;
  usuarioSeleccionado:any;

  formularioAgregarCategoria = new FormGroup({
    nombreCategoria : new FormControl(''),
    descripcion : new FormControl(''),
    color : new FormControl(''),
    icono : new FormControl('')
  });


  constructor(private usuariosService:UsuariosService, private modalService:NgbModal, private categoriasService : CategoriasService) { }

  ngOnInit(): void {
    this.usuariosService.obtenerUsuarios().subscribe(
      res=>{
        this.usuarios = res;
        console.log("Usuarios:", res);
      },
      error =>{
        console.log(error);
      }
    )
    console.log("las ordenes:", this.ordenes);
  }
  seleccionarUsuario(){
    console.log("usuario seleccionado: ", this.usuarioSeleccionado);
    this.onUsuarios.emit(this.usuarioSeleccionado);
    this.usuariosFT=true;
  }
  guardarOrden(array:any){
    console.log("informacion (maincomponents): ", array);
    this.usuariosService.guardarOrden(this.usuarioSeleccionado._id,array).subscribe(
      res => {
        console.log(res);
      },
      error => {
        console.log(error);
      }
    )
  }
  modalVerOrdenes(modal:any){
    this.modalService.open(
      modal,
      {
        size:'xl',
        centered:false
      }
    );
    // console.log("Obtener ordenes: ",this.usuarioSeleccionado._id);
    
    this.usuariosService.obtenerOrdenes(this.usuarioSeleccionado._id).subscribe(
      res=>{
        this.ordenes = res.ordenes;
        console.log("Usuarios:", res.ordenes);
      },
      error =>{
        console.log(error);
      }
    );
  }
  modalNuevaCate(modal:any){
    this.modalService.open(
      modal,
      {
        size:'xl',
        centered:false
      }
    );
  }
  guardarCategoria(){
    console.log("se guardo categoria: ",this.formularioAgregarCategoria.value);
    this.categoriasService.guardarCategoria(this.formularioAgregarCategoria.value).subscribe(
      res => {
        console.log(res);
      },
      error => {
        console.log(error);
      }
    )
  }
}
