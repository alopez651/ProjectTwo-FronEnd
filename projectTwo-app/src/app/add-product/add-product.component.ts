import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../interfaces';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product!: Partial<Product>;

  
  constructor(private productService: ProductService, private router:Router) { }

  ngOnInit(): void {
    this.product = {
      name :"defaul name ",
      // price: 0,
      // ratings: 0,
      // releaseYear: 0
      
    }

  }

  clearProduct(){
    this.product.name ="";
    // this.product.
  }
  validateProduct(){
    if(this.product.name?.trim() == "")  return false;
    // if(this.product.id ==)  return false;
    //if(this.cart.releaseYea == "")  return false;
    //if(this.product.ratings == 0)  return false;
    return true;
  }

  add(): void{
    if(this.validateProduct()){
    this.productService.addProduct(this.product).subscribe(
      product => {
        this.product.id = product.id;
        alert(`Movie added to Movie List!: ${product.id}`);
      }
    )
  }
  else{
    alert("somehting went wrong with the fields.");
  }
 }

}
