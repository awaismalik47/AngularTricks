import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
url="http://localhost:3400";
  constructor(private http:HttpClient) { }

  addPoint(body){
  return this.http.post(`${this.url}/addPoint`,body);
  }
  getPoints(){
    return this.http.get(`${this.url}/getPoints`);
    }
    deletePoints(){
      return this.http.delete(`${this.url}/deletePoints`);
      }

}
