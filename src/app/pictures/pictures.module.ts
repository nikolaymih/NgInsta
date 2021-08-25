import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AddPictureComponent } from './add-picture/add-picture.component';
import { PicturesRoutingModule } from './pictures-routing.module';


@NgModule({
  declarations: [
    HomeComponent,
    AddPictureComponent
  ],
  imports: [
    CommonModule,
    PicturesRoutingModule
  ]
})
export class PicturesModule { }
