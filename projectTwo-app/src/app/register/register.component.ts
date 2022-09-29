import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../interfaces';
import { UsersService } from '../services/users.service';
import { SessionService } from '../services/session.service';
import { CookieService } from 'ngx-cookie'; // !!!!!!!
// add cookies later

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  users!:Users;

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

  // register new user 
  register() {
    this.usersService.register(this.users).subscribe({
      next: (returnVal) => {
        alert(`Thank You! ${returnVal.name} You are now register. Your ID is ${returnVal.id}`)
        
        this.cookieService.put("userId", String(returnVal.id));
        this.router.navigate(["/products"]);
      },
      error:() => {alert("Resgistration unsuccessful!")}
    });
  }

}
