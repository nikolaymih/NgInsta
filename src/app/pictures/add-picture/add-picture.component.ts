import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PicturesService } from '../pictures.service';

@Component({
  selector: 'app-add-picture',
  templateUrl: './add-picture.component.html',
  styleUrls: ['./add-picture.component.scss']
})
export class AddPictureComponent {

  constructor(
    private activatedRoute: ActivatedRoute,
    private picturesService: PicturesService,
    private router: Router
    ) { }

  uploadImage(form: NgForm) {
    if (form.invalid) { return }
    const { image, description } = form.value;
    let id = JSON.parse(localStorage.getItem('_id')!);

    this.picturesService.uploadImage({image, description, id}).subscribe({
      next: () => {
        const redirectedUrl = this.activatedRoute.snapshot.queryParams.redirectedUrl || '/';
        this.router.navigate([redirectedUrl]);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
