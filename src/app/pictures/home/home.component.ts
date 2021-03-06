import { Component, OnInit } from '@angular/core';
import { PicturesService } from '../pictures.service';
import { IPicture } from '../../shared/interfaces/IPicture';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  images: IPicture[] | undefined;

  constructor(private picturesService: PicturesService) {
    this.fetchImages();
  }

  fetchImages() : void {
    this.images = undefined;
    this.picturesService.loadPosts().subscribe(images => {
      console.log(images);
      this.images = images 
    })
  }

  loadMoreImages() {
    window.scroll(0,0)
    this.picturesService.loadMorePosts(this.images!).subscribe(images => {
      console.log(images);
      this.images = images 
    })
  }
}
