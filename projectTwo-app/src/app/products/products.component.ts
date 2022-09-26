import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products!: Product[];

  productList=[];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    // dummy list
    this.productService.getAll().subscribe(
      returnProducts =>{
        this.products = returnProducts;
        }
      )
  }
}
