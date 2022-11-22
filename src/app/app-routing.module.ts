import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditcomentComponent } from './components/add-editcoment/add-editcoment.component';
import { ListComentComponent } from './components/list-coment/list-coment.component';
import { ViewComentComponent } from './components/view-coment/view-coment.component';

const routes: Routes = [
  {path: '', component: ListComentComponent},
  {path: 'agregar', component: AddEditcomentComponent},
  {path: 'editar/:id', component: AddEditcomentComponent},
  {path: 'ver/:id', component: ViewComentComponent},
  {path: '**', redirectTo: '/', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
