import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IPicture } from 'src/app/shared/interfaces/IPicture';
import { PicturesService } from '../pictures.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent  {

  private routeSub!: Subscription;
  imageId: string | undefined;
  image: IPicture | undefined

  constructor(
    private route: ActivatedRoute,
    private picturesService: PicturesService
  ) {
    this.loadSpecifiedPicture();
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  loadSpecifiedPicture(): void {
    this.routeSub = this.route.params.subscribe(params => {
      console.log(params);
      
      this.imageId = params['id'];
      console.log(this.imageId);
      
    });

    this.picturesService.loadSpecifiedPicture(this.imageId!).subscribe(image => {
      this.image = image;
    })
  }
}
