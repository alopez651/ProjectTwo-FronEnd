import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { mergeMap, Observable } from 'rxjs';
import { url } from '../endpoint';
import { Product } from '../interfaces';
import { Users } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  // login ]
  public login(users:Users):Observable<Users>{
    return this.http.post<Users>(`${url}/users?auth=login`, users);
  }

  // register 
  public register(users:Users):Observable<Users> {
    return this.http.post<Users>(`${url}/users?auth=register`, users);
  }

  // addToCart
  public addToCart(userId: Number, productId:Number):Observable<Users> {
    return this.http.patch<Users>(`${url}/users/${userId}/products/${productId}`, {});
  }
  
  // getMovies 
  public getMovies(userId:Number):Observable<Product[]> {
    return this.http.get<Product[]>(`${url}/users/${userId}/products`);
  }
  // getting all users  //public 
  public getAll():Observable<Users[]> {
    return this.http.get<Users[]>(`${url}/users`);
  }
  public getById(id: Number): Observable<Users> {
    let req_url = `${url}/users/${id}`;
    console.log(req_url);
    return this.http.get<Users>(req_url);
  }
  // update user
  updateUser(users:Users): Observable<Users> {
    return this.http.put<Users>(`${url}/users`, users);
  }

  // deleting movie
  deleteUser(id:Number) {
    return this.http.delete(`${url}/users/${id}`);
  }
}
