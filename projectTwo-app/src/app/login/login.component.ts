import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../interfaces';
import { UsersService } from '../services/users.service';
import { SessionService } from '../services/session.service';
import { CookieService } from 'ngx-cookie';
// do cookie later

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users!: Users;

  constructor(private usersService:UsersService, private router:Router,
              private sessionService:SessionService, private cookieService:CookieService) { }

  ngOnInit(): void {
    this.users = {
      name: "", 
      username: "",
      password: "",
      products: []
    }
  }

  login() {
    this.usersService.login(this.users).subscribe(
      returnedUsers => {
        if(returnedUsers == null){
          alert("Username or password is incorrect! please try again");
        }
        else {
          alert("Login Successful");
          this.cookieService.put("userId", String(returnedUsers.id));
          this.router.navigate(["/products"]);
        }
      }
    )
  }

}
