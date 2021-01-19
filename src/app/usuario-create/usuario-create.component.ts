import { UsuarioService } from './../service/usuario-service';
import { Usuario } from './../model/usuario';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-create',
  templateUrl: './usuario-create.component.html',
  styleUrls: ['./usuario-create.component.css']
})
export class UsuarioCreateComponent implements OnInit {

  usuario: Usuario;

  constructor(private service: UsuarioService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.usuario = new Usuario();
  }

  salvar() {
    this.service.create(this.usuario).subscribe(() => {
      this.router.navigate(['/list']);
    })
  }

  onCancel() {
    this.router.navigate(['/list']);
  }

}
