import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../interfaces';
import { UsersService } from '../services/users.service';
import { SessionService } from '../services/session.service';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-added-product',
  templateUrl: './added-product.component.html',
  styleUrls: ['./added-product.component.css']
})
export class AddedProductComponent implements OnInit {
  addedProduct!: Product[];

  constructor(private usersService:UsersService, private router:Router,
              private sessionService:SessionService, private cookieService:CookieService) { }

  ngOnInit(): void {
    let userId = Number(this.cookieService.get("userId"));
    //console.log(userId);

    if(isNaN(userId)){
      alert("You must be logged in to proceed! ");
      this.router.navigate(["/products"]);
    } 
    else {
      this.usersService.getMovies(userId).subscribe(
        returnVal => {
          this.addedProduct = returnVal;
        }
      )
    }
  }

}
