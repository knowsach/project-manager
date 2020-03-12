import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Header } from './core/layouts/header/header.component';


const routes: Routes = [
  {path:'' , component:Header}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
