import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces';
import { ProductService } from '../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../services/users.service';
import { SessionService } from '../services/session.service';
import { CookieService } from 'ngx-cookie';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product!: Product;

  show_extra_content:boolean = false;
  
  

  userId!:number;
  productId!:number;
  constructor(private productService: ProductService, private route: ActivatedRoute, 
              private router: Router, private usersService: UsersService, 
              private sessionService:SessionService, private cookieService:CookieService) { }

  ngOnInit(): void {
    this.userId = Number(this.cookieService.get("userId"));
    this.productId = Number(this.route.snapshot.paramMap.get("id"));

    this.productService.getById(this.productId).subscribe(
      returnProduct => {
        this.product = returnProduct;
        console.log(returnProduct);
      }
    )
}

  update(){
    this.productService.updateProduct(this.product).subscribe(
      returnProduct => {
        console.log(returnProduct);
      }
    )
  }

  deleteProduct(){
    this.productService.deleteProduct(this.product.id).subscribe();
    alert("item has been deleted");
    this.router.navigate(['/products'])
  }
  
  addToCart(){
    let userId = Number(this.cookieService.get("userId"));
    console.log(userId);
    if(isNaN(userId)){
      alert("must be login first");
      this.router.navigate(["/login"]);
    }
    else{
      this.usersService.addToCart(this.userId, this.product.id).subscribe(
        returnVal => {
          this.router.navigate(["/added"])
        }
      )
    }
  }
}
