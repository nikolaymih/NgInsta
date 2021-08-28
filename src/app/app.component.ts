import { Component } from '@angular/core';
import { UserService } from './user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  get isLogged () : Boolean {
    return this.userService.isLogged;
  }

  constructor(
    private userService: UserService,
    ) { }
}
