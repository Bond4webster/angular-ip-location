import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MapComponent } from './map.component/map.component';

import { VisitorsService } from './services/visitors.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpClientModule ],
  declarations: [ AppComponent, MapComponent ],
  providers:    [VisitorsService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
