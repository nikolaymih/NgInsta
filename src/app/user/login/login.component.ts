import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router
    ) { }

  login(form: NgForm) : void {
    if (form.invalid) { return }
    const { email, password } = form.value;
    this.userService.login({email, password}).subscribe({
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
