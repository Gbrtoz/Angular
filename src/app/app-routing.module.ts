import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalcularMediaComponent } from './calcular-media/calcular-media.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { ApoliceComponent } from './apolice/apolice.component';

const routes: Routes = [
  {path: 'calculadora-media', component:CalcularMediaComponent},
  { path: 'calculadora',component: CalculadoraComponent},
  {path: 'apolice', component:ApoliceComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
