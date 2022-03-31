import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import { PageAComponent } from './page-a/page-a.component';
import { PageBComponent } from './page-b/page-b.component';
const routes: Routes = [
    {path: '',
    component: IndexComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'page1',
        component: PageAComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'page2',
        component: PageBComponent,
        canActivate: [AuthGuard],
      }
    ]},{
      path:'login',
      component:LoginComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
