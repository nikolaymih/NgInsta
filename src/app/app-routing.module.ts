import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { AuthActivate } from './core/guards/auth.activate';

const routes: Routes = [
  // {
  //   path: '404',
  //   component: CardComponent,
  //   canActivate: [AuthActivate],
  //   data: {
  //     authenticationRequired: false,
  //     authenticationFailureRedirectUrl: '/'
  //   }
  // },
  {
    path: 'home',
    component: CardComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
