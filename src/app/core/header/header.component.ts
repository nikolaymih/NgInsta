import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  get isLogged () : Boolean {
    return this.userService.isLogged;
  }

  get username() : String {
    return this.userService.user!;
  }

  constructor(
    private userService: UserService,
    private router: Router
    ) { }

  logout() {
    this.userService.logout();
    this.router.navigate(['/login'])
    localStorage.clear();
  }
}
