import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../interfaces';
import { ProductService } from '../services/product.service';
import { UsersService } from '../services/users.service';
import { CookieService } from 'ngx-cookie';
//import { Rou}
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products!: Product[];
  userId!:Number;
  product!: Product;
  productList=[];
  constructor(private productService: ProductService, private usersService:UsersService,
              private router:Router, private route:ActivatedRoute,
              private cookieService:CookieService) { }

  ngOnInit(): void {
    // dummy list
    this.productService.getAll().subscribe(
      returnProducts =>{
        this.products = returnProducts;
        }
      )

  }

}
