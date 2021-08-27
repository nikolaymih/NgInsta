import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPictureComponent } from './add-picture/add-picture.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'details/:id',
        component: DetailsComponent
    },
    {
        path: 'add-picture',
        component: AddPictureComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class PicturesRoutingModule { }
