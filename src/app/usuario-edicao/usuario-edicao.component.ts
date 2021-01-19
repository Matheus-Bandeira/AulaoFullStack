import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../model/usuario';
import { UsuarioService } from '../service/usuario-service';

@Component({
  selector: 'app-usuario-edicao',
  templateUrl: './usuario-edicao.component.html',
  styleUrls: ['./usuario-edicao.component.css']
})
export class UsuarioEdicaoComponent implements OnInit {

  usuario: Usuario;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private usuarioService: UsuarioService) { }

  ngOnInit() {
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.usuarioService.findById(id).subscribe((data) => {
      this.usuario = data;
      // console.log(this.usuario);
    })
  }

  onCancel() {
    this.router.navigate(['/list']);
  }

  salvar() {
    this.usuarioService.update(this.usuario.id, this.usuario)
    .subscribe(() => {
      this.router.navigate([`/list`]);
    });
  }

}
