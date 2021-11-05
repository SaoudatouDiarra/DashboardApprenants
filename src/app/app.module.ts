import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListesComponent } from './listes/listes.component';
import { HttpClientModule } from '@angular/common/http';
import { AjouterComponent } from './ajouter/ajouter.component';


@NgModule({
  declarations: [
    AppComponent,
    ListesComponent,
    AjouterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
