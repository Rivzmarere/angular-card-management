import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,AppRoutingModule,RouterModule,BrowserAnimationsModule, ClarityModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
