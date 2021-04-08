import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [

  { path: 'account', loadChildren: () => import('./account/account.module').then(m => m.AccountModule) },

  { path: '', loadChildren: () => import('./buyer/buyer.module').then(m => m.BuyerModule) },
  // { path: 'chat', loadChildren: () => import('./chat/chat.module').then(m => m.ChatModule), canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = []
