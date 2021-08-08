import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicialComponent } from './components/inicial/inicial.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { OpcoesComponent } from './components/opcoes/opcoes.component';
import { ContaComponent } from './components/conta/conta.component';
import { InicialModule } from './components/inicial/inicial.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    InicialComponent,
    CadastroComponent,
    OpcoesComponent,
    ContaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InicialModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
