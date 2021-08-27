import { Component, OnInit } from '@angular/core';
import { IPicture } from 'src/app/shared/interfaces/IPicture';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  images: IPicture[] | undefined;

  constructor(private userService: UserService) {
    this.fetchProfile()
  }

  fetchProfile(): void {
    this.userService.profile().subscribe(images => {
      this.images = images 
    })
  }

}
