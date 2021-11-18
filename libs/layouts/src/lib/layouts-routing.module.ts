import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './pages/container/container.component';

const routes: Routes = [
  {path:'rr', component:ContainerComponent}
 
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class layoutsRoutingModule {
}


