import { Injectable } from '@angular/core';
import { Product } from '../interfaces';
import { Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { url } from '../endpoint'; 

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  // adding to product
  addProduct(product:Partial<Product>): Observable<Partial<Product>>{
    return this.http.post<Product>(`${url}/products`, product);
  }

  // getting all movies
  getAll(): Observable<Product[]>{
    return this.http.get<Product[]>(`${url}/products`);
  }

  // getting movie by id
  getById(id: Number): Observable<Product>{
    let req_url = `${url}/products/${id}`;
    console.log(req_url);
    return this.http.get<Product>(req_url);
  } 

    // updating 
  updateProduct(product: Product): Observable<Product>{
    return this.http.put<Product>(`${url}/products`, product);
  }
  
    // deleting movie
  deleteProduct(id:Number){
    return this.http.delete(`${url}/products/${id}`);
  }

  // adding to cart
  // addToCart(product:Partial<Product>):Observable<Partial<Product>>{
  //   return this.http.patch<Product>(`${url}/${userId}/products/${productsId}`);
  // }

}
