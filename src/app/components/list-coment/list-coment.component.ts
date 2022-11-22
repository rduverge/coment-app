import { Component } from '@angular/core';
import { Coment } from 'src/app/interfaces/comentario'

@Component({
  selector: 'app-list-coment',
  templateUrl: './list-coment.component.html',
  styleUrls: ['./list-coment.component.css']
})
export class ListComentComponent {

  listcoment: Coment[] = [
    {titulo: 'Angular', creador: "Fernando", fechaCreacion: new Date(), texto: 'nada'},
    {titulo: 'React', creador: "Miguel", fechaCreacion: new Date(), texto: 'nada2'}
  ]

}
