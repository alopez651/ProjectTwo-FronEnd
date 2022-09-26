import { Injectable } from '@angular/core';
import { SessionStorageModel } from '../classes';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  // instance of seesionstoragemodel class
  private sessionStorageModel:SessionStorageModel = new SessionStorageModel();

  constructor() { }

   // given a key and a value, place that value at that key
   public set(key: String, value: any) {
    // keyof -> makes it so we can use the String "key" as the key
      this.sessionStorageModel[key as keyof SessionStorageModel] = value;
  }

  // given a key, return the value
  public get(key:String) {
    return this.sessionStorageModel[key as keyof SessionStorageModel];
  }

  // given a key, remove that value
  public remove(key:String) {
    this.sessionStorageModel[key as keyof SessionStorageModel] = undefined;
  }

  // clear/reset the entire session:
  public clear(){
    // creating a new, empty object
    this.sessionStorageModel = new SessionStorageModel();
  }


}
