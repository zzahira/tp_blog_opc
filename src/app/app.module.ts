import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListPosteComponent } from './list-poste/list-poste.component';
import { ItemPosteComponent } from './item-poste/item-poste.component';

@NgModule({
  declarations: [
    AppComponent,
    ListPosteComponent,
    ItemPosteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
