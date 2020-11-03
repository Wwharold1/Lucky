import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppLoginComponent } from './auth/components/app-login/app-login.component';

const routes: Routes = [
  {
    path: '', component: AppLoginComponent
  },
  {
    path: 'main', loadChildren: () => import('./modules/main.module').then(m => m.MainModule)
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
