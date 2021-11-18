import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from '@card-managemnt/layouts';



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashbord' },
  {path:'auth',loadChildren:()=> import('@card-managemnt/auth').then((m)=>m.AuthModule),},
  
  {
    path:'',
    component:ContainerComponent,
    children:[
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      {
        
        path: 'dashboard',
        loadChildren: () =>
          import('@card-managemnt/dashboard').then((a) => a.DashboardModule),
      },

    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule {
}
