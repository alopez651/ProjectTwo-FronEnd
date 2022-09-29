import { Component, OnInit } from '@angular/core';
import { Users } from '../interfaces';
import { Product } from '../interfaces';
import { ProductService } from '../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../services/users.service';
import { SessionService } from '../services/session.service';
import { CookieService } from 'ngx-cookie';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users!: Users;

  show_extra_content: boolean = false;
  //userId!: Number;
  userId!: Number;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private usersService: UsersService,
    private sessionService: SessionService,
    private cookieService: CookieService
  ) {}

  // ngOnInit(): void {
  //   let userId = Number(this.cookieService.get("userId"));
  //   //this.userId = Number(this.cookieService.get("userId"));
  //   if(isNaN(userId)){
  //     alert("Must be logged in firs");
  //     this.router.navigate(["/login"]);
  //   } else{
  //   let usersId: Number = Number(this.route.snapshot.paramMap.get("id"));
  //   this.usersService.getById(usersId).subscribe(
  //     returnProduct => {
  //       this.users = returnProduct;
  //       console.log(returnProduct);
  //     }
  //   )
  //   }
  // }
  ngOnInit(): void {
    this.userId = Number(this.cookieService.get("userId"));

    let usersId: Number = Number(this.route.snapshot.paramMap.get("id"));
    this.usersService.getById(usersId).subscribe(
      returnUsers => {
        this.users = returnUsers;
        console.log(returnUsers);
      }
    )
  }

  update(){
    this.usersService.updateUser(this.users).subscribe(
      returnProduct => {
        console.log(returnProduct);
      }
    )
  }

 // delete(){
   // this.usersService.deleteUser(this.users.id).subscribe();
   // alert("user has been deleted");
   // this.router.navigate(['/userss'])
 // }
  
}