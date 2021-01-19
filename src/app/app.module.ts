import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { UsuarioService } from './service/usuario-service';
import { UsuarioEdicaoComponent } from './usuario-edicao/usuario-edicao.component';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { HeaderComponent } from './header/header.component';
import { UsuarioCreateComponent } from './usuario-create/usuario-create.component';
import { UsuarioDeleteComponent } from './usuario-delete/usuario-delete.component';

const ROTAS: Routes = [
  { path: '', component: UsuarioListComponent },
  { path: 'create', component: UsuarioCreateComponent },
  { path: 'list', component: UsuarioListComponent },
  { path: 'usuario/edit/:id', component: UsuarioEdicaoComponent },
  { path: 'usuario/delete/:id', component: UsuarioDeleteComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    UsuarioEdicaoComponent,
    UsuarioListComponent,
    HeaderComponent,
    UsuarioCreateComponent,
    UsuarioDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(ROTAS),
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
