import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Usuario } from './model/usuario';
import { UsuarioService } from './service/usuario-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  // usuario: Usuario;
  // usuarios: Usuario[]=[];
  // msg : string = '';

  // constructor(
  //             private http: UsuarioService,
  //             private router: Router,
  //             private route: ActivatedRoute){
  //   this.usuario = new Usuario();
  // }

  ngOnInit(): void {

  }

  // listar() {
  //   this.http.findAll().subscribe(res => {
  //     this.usuarios = res;
  //   })
  // }

  // gravar(){
  //   this.http.create(this.usuario).subscribe(res => {
  //     console.log('usuario gravado com sucesso', this.usuario);
  //     this.listar();
  //     this.usuario = new Usuario();
  //     if(this.usuarios){
  //       this.msg='usuario gravado com sucesso';
  //     }else{
  //       this.msg='usuario nao gravado';
  //     }
  //   })
  // }

  // editar(usuario: Usuario) {
  //   this.router.navigate([`/usuario/${usuario.id}`]);
  // }

  // deletar(usuario: Usuario) {
  //   console.log("Estou deletando..." + usuario.toString());
  // }

}
