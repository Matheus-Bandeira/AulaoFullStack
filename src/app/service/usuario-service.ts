import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../model/usuario';

const URL = 'http://localhost:3000/usuario';

@Injectable()
export class UsuarioService{

    constructor(private http: HttpClient) {

    }

    public findAll() {
        return this.http.get<Usuario[]>(`${URL}`);
    }

    public create(usuario: Usuario) {
        return this.http.post<Usuario>(`${URL}`, usuario);
    }

    public findById(id: number) {
      return this.http.get<Usuario>(`${URL}/${id}`);
    }

    public update(id: number, usuario: Usuario) {
      return this.http.put<Usuario>(`${URL}/${id}`, usuario);
    }

    public delete(id: number) {
      return this.http.delete<Usuario>(`${URL}/${id}`);
    }

}
