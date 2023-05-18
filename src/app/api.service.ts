import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url:any='http://localhost:3000/posts/';
  constructor(private http:HttpClient ) { }

  getData(){
    return this.http.get(this.url)
  }
  postData(data:any){
    return this.http.post(this.url,data)
  }
  updateData(data:any,id:any){
    return this.http.put(this.url+id,data); 
  }
  DeleteData(data:any){
    console.log(data,"service data")
    return this.http.delete(this.url+data)
  }
}