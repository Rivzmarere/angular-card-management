import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  imports: [CommonModule,DashboardRoutingModule],
  declarations: [
    DashboardComponent
  ],
})
export class DashboardModule {}
