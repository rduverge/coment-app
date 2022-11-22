import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Coment } from 'src/app/interfaces/comentario';

@Component({
  selector: 'app-add-editcoment',
  templateUrl: './add-editcoment.component.html',
  styleUrls: ['./add-editcoment.component.css']
})
export class AddEditcomentComponent {
  agregarComentario: FormGroup;

  constructor(private fb: FormBuilder){
    this.agregarComentario = this.fb.group( 
      {
        titulo: ['', Validators.required],
        creador: ['', Validators.required],
        texto: ['', Validators.required]
      }
    );
  }

  agregar(){
    console.log(this.agregarComentario);
    const comentario: Coment = {
      titulo: this.agregarComentario.get('titulo')?.value,
      creador: this.agregarComentario.get('creador')?.value,
      texto: this.agregarComentario.get('texto')?.value,
      fechaCreacion: new Date
    }
    console.log(comentario)
  }
}
