import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component'; 
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

const routes: Routes = []; 


@NgModule({
  declarations: [
    AppComponent // Decláralo aquí
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes), 
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent] // Indica que es el punto de inicio
})
export class AppModule { }