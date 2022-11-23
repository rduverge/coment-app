import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Coment } from 'src/app/interfaces/comentario'
import { ComentarioService } from 'src/app/services/comentario.service'

@Component({
  selector: 'app-list-coment',
  templateUrl: './list-coment.component.html',
  styleUrls: ['./list-coment.component.css']
})
export class ListComentComponent {

  listcoment: Coment[] = []

  constructor(private _comentarioService: ComentarioService, private toastr: ToastrService) { }
  ngOnInit(): void{
    this.getComentarios();
  }
  
  getComentarios() {
    this._comentarioService.getListComentarios().subscribe(data => {
      console.log(data);
      this.listcoment = data;
    }, error => {
      this.toastr.error('Ocurrio un error!','Error');
        console.log(error);
      })
  }

  eliminarComentario(id: any) {
    console.log(id);
    this._comentarioService.deleteComent(id).subscribe(data => {
      this.getComentarios();
      this.toastr.error('El comentario fue eliminado con exito!','Registro eliminado');
    }, error => {
      this.toastr.error('Opss Ocurrio un error!','Error');
      console.log(error);
    })
  }
}
