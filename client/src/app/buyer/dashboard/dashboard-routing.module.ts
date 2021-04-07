import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';

const routes: Routes = [
  {
      path: '',
      component: CategoryComponent
  },

  // {
  //     path: 'signup/otp',
  //     component: OTPComponent
  // },
  // {
  //     path: 'reset-password',
  //     component: PasswordresetComponent
  // },
  // {
  //     path: 'reset-password/otp',
  //     component: OTPResComponent
  // },
  // {
  //     path: 'lock-screen',
  //     component: LockscreenComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
