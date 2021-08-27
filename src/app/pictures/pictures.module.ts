import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AddPictureComponent } from './add-picture/add-picture.component';
import { PicturesRoutingModule } from './pictures-routing.module';
import { PicturesService } from './pictures.service';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [
    HomeComponent,
    AddPictureComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    PicturesRoutingModule
  ],
  providers: [
    PicturesService
  ]
})
export class PicturesModule { }
