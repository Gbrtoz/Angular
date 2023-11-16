import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalcularMediaComponent } from './calcular-media/calcular-media.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { ApoliceComponent } from './apolice/apolice.component';



@NgModule({
  declarations: [
    AppComponent,
    CalcularMediaComponent,
    CalculadoraComponent,
    ApoliceComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
