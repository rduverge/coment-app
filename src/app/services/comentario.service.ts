import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Coment } from '../interfaces/comentario';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {
private myAppUrl = 'https://localhost:44352/';
private myApiUrl = 'api/comentario/';

  constructor(private http: HttpClient) { }

  getListComentarios(): Observable<any> {
  return this.http.get(this.myAppUrl + this.myApiUrl);
  }
  deleteComent(id: number): Observable<any> {
    return this.http.delete(this.myAppUrl + this.myApiUrl + id);
  }

  saveComentario(comentario: Coment): Observable<any> {
    return this.http.post(this.myAppUrl + this.myApiUrl, comentario);
  }

  getComentario(id: number): Observable<any> {
    return this.http.get(this.myAppUrl + this.myApiUrl + id);
  }

  updateComentario(id: number, comentario: Coment): Observable<any> {
    return this.http.put(this.myAppUrl + this.myApiUrl + id, comentario);
  }
}