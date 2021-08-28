import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AsideComponent } from './aside/aside.component';
import { AppRoutingModule } from '../app-routing.module';
import { AuthActivate } from './guards/auth.activate';

@NgModule({
  declarations: [
    HeaderComponent,
    AsideComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    HeaderComponent,
    AsideComponent,
    FooterComponent
  ], 
  providers: [
    AuthActivate
  ]
})
export class CoreModule { }
