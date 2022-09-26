import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../interfaces';
import { UsersService } from '../services/users.service';
import { SessionService } from '../services/session.service';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-added',
  templateUrl: './added.component.html',
  styleUrls: ['./added.component.css']
})
export class AddedComponent implements OnInit {
  added!:Product[];

  constructor(private usersService:UsersService, private router:Router,
              private sessionService:SessionService, private cookieService:CookieService) { }

  ngOnInit(): void {
     let userId = Number(this.cookieService.get("userId"));
    //let userId = Number(this.sessionService.get("userId"));
    console.log(userId);

    if(isNaN(userId)){
      alert("You must be logged in to proceed! ");
      this.router.navigate(["/products"]);
    } 
    else {
      //this.usersService.getMovies(userId).subscribe(
      this.usersService.getMovies(userId).subscribe(
        returnVal => {
          this.added = returnVal;
        }
      )
    }
  }
}