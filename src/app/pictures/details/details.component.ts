import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { PicturesService } from '../pictures.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  private routeSub!: Subscription;
  imageId: string | undefined;

  constructor(
    private route: ActivatedRoute,
    private picturesService: PicturesService
  ) {
    this.loadSpecifiedPicture();
  }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.imageId = params['id'];
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  loadSpecifiedPicture(): void {
    this.picturesService.loadSpecifiedPicture(this.imageId!).subscribe(image => {
      console.log(image);
    })
  }
}
