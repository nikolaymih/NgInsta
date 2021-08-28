import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AddPictureComponent } from './add-picture/add-picture.component';
import { PicturesRoutingModule } from './pictures-routing.module';
import { PicturesService } from './pictures.service';
import { DetailsComponent } from './details/details.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    AddPictureComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    PicturesRoutingModule,
    FormsModule
  ],
  providers: [
    PicturesService
  ]
})
export class PicturesModule { }
