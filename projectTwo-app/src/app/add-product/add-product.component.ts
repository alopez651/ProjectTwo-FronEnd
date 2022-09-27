import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../interfaces';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { mergeMap, Observable } from 'rxjs';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product!: Partial<Product>;

  
  constructor(private productService: ProductService, private router:Router,
              private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.product = {
      name :"defaul name ",
      price: 0,
      releaseYear: 0,
      ratings: 0,
      description: " "
    }

  }

  clearProduct(){
    this.product.name ="";
    // this.product.
  }
  validateProduct(){
    if(this.product.name?.trim() == "")  return false;

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
