import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from '../interfaces';
import { ProductService } from '../services/product.service';
import { UsersService } from '../services/users.service';
import { CookieService } from 'ngx-cookie';
@Component({
  selector: 'app-userss',
  templateUrl: './userss.component.html',
  styleUrls: ['./userss.component.css']
})
export class UserssComponent implements OnInit {
  userss!: Users[];
  userId!: Number;
  users!: Users;
  usersList = [];
  constructor(private productService: ProductService, private usersService:UsersService,
              private router:Router, private route:ActivatedRoute,
              private cookieService:CookieService)  { }

  ngOnInit(): void {
    this.usersService.getAll().subscribe(
      returnUsers=>{this.userss=returnUsers}
    )
  }

}
