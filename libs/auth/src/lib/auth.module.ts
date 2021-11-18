import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { PagesModule } from './pages/pages.module';


@NgModule({
  imports: [CommonModule,AuthRoutingModule,PagesModule],
  declarations: [
 
  ],
})
export class AuthModule {}
