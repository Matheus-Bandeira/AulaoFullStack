import { Usuario } from './../model/usuario';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../service/usuario-service';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {

  usuario: Usuario;
  usuarios: Usuario[]=[];
  msg : string = '';

  constructor(private http: UsuarioService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.listar();
  }

  listar(){
    this.http.findAll().subscribe(res => {
      console.log(res);
      this.usuarios = res;
    })
  }

  gravar(){
    this.http.create(this.usuario).subscribe(res => {
      console.log('usuario gravado com sucesso', this.usuario);
      this.listar();
      this.usuario = new Usuario();
      if(this.usuarios){
        this.msg='usuario gravado com sucesso';
      }else{
        this.msg='usuario nao gravado';
      }
    })
  }

  editar(usuario: Usuario) {
    this.router.navigate([`/usuario/edit/${usuario.id}`]);
  }

  deletar(usuario: Usuario) {
    // console.log("Estou deletando..." + usuario.toString());
    this.router.navigate([`/usuario/delete/${usuario.id}`]);
  }

}
