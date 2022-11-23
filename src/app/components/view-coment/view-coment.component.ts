import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Coment } from 'src/app/interfaces/comentario';
import { ComentarioService } from 'src/app/services/comentario.service';

@Component({
  selector: 'app-view-coment',
  templateUrl: './view-coment.component.html',
  styleUrls: ['./view-coment.component.css']
})
export class ViewComentComponent implements OnInit {

  id: number;
  comentario: Coment | undefined;

  constructor(private aRoute: ActivatedRoute,
              private _comentarioService: ComentarioService) {
    this.id = +this.aRoute.snapshot.paramMap.get('id')!;
   }

  ngOnInit(): void {
    this.getComentario();
  }
  

  getComentario() {
    this._comentarioService.getComentario(this.id).subscribe(data => {
      this.comentario = data;
    }, error => {
      console.log(error);
    })
  }



}
