import { UsuarioService } from './../service/usuario-service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Usuario } from '../model/usuario';

@Component({
  selector: 'app-usuario-delete',
  templateUrl: './usuario-delete.component.html',
  styleUrls: ['./usuario-delete.component.css']
})
export class UsuarioDeleteComponent implements OnInit {

  usuario: Usuario;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private service: UsuarioService) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.service.findById(id).subscribe((user) => {
      this.usuario = user;
    });
  }

  onCancel() {
    this.router.navigate(['/list']);
  }

  deletar() {
    this.service.delete(this.usuario.id).subscribe(() => {
      this.router.navigate(['/list']);
    });
  }

}
