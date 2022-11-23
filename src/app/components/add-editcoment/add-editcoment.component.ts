import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Coment } from 'src/app/interfaces/comentario';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ComentarioService } from 'src/app/services/comentario.service';

@Component({
  selector: 'app-add-editcoment',
  templateUrl: './add-editcoment.component.html',
  styleUrls: ['./add-editcoment.component.css']
})
export class AddEditcomentComponent implements OnInit{
  agregarComentario: FormGroup;
  accion = 'Agregar';
  id = 0;
  comentario: Coment | undefined;

  constructor(private fb: FormBuilder,
    private _comentarioService: ComentarioService,
    private router: Router,
    private aRoute: ActivatedRoute,
    private toastr: ToastrService) {
this.agregarComentario = this.fb.group({
titulo: ['', Validators.required],
creador: ['', Validators.required],
texto: ['', Validators.required],
})
this.id = +this.aRoute.snapshot.paramMap.get('id')!;
}

ngOnInit(): void {
this.esEditar();
}

esEditar(){

if(this.id !== 0) {
this.accion = 'Editar';
this._comentarioService.getComentario(this.id).subscribe(data => {
this.comentario = data;
this.agregarComentario.patchValue({
titulo: data.titulo,
texto: data.texto,
creador: data.creador,
})
}, error => {
console.log(error);
})
}
}

agregar() {

if(this.comentario == undefined) {

// Agregamos un nuevo comentario
const comentario: Coment = {      
titulo: this.agregarComentario.get('titulo')?.value,
creador: this.agregarComentario.get('creador')?.value,
texto: this.agregarComentario.get('texto')?.value,
fechaCreacion: new Date
}
this._comentarioService.saveComentario(comentario).subscribe(data => {
this.toastr.success('El comentario fue registrado con exito', 'Comentario registrado');
this.router.navigate(['/']);
}, error => {
this.toastr.error('Opss Ocurrio un error!','Error');
console.log(error);
})
} else {

// Editamos comentario
const comentario: Coment = {
id: this.comentario.id,
titulo: this.agregarComentario.get('titulo')?.value,
creador: this.agregarComentario.get('creador')?.value,
texto: this.agregarComentario.get('texto')?.value,
fechaCreacion: this.comentario.fechaCreacion
}

this._comentarioService.updateComentario(this.id, comentario).subscribe(data => {
this.toastr.info('El comentario fue actualizado con exito', 'Comentario actualizado');
this.router.navigate(['/']);
}, error => {
this.toastr.error('Opss Ocurrio un error!','Error');
console.log(error);
})
}


}
}