import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { layoutsRoutingModule } from './layouts-routing.module';
import { FooterComponent } from './pages/footer/footer.component';
import { HeaderComponent } from './pages/header/header.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { ContainerComponent } from './pages/container/container.component';
import { RouterModule } from '@angular/router';
import {
  ClrIconModule
} from '@clr/angular';

@NgModule({
  imports: [
    CommonModule,
    layoutsRoutingModule,
    RouterModule,
    ClrIconModule
  ],
  declarations:[
    
  
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    ContainerComponent
    
  ]
})
export class LayoutsModule {}
