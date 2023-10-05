import { Injectable } from '@angular/core';
import { HttpServiceService } from './http-service.service';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private httpserive:HttpServiceService) { }
  addPoint(body) {
    return new Promise((resolve, reject) => {
      const response = { data: null, status: false, message: null };
      try {
        
        this.httpserive.addPoint(body).subscribe(
          (data) => {
            response.data = data;
            response.message = 'success';
            response.status = true;
            
             
            
            resolve(response);
          },
          (err) => {
            response.message = err;
            resolve(response);
          }
        );
      } catch (error) {
        response.message = error;
        resolve(response);
      }
    });
  }

  getPoints() {
    return new Promise((resolve, reject) => {
      const response = { data: null, status: false, message: null };
      try {
        
        this.httpserive.getPoints().subscribe(
          (data) => {
            response.data = data;
            response.message = 'success';
            response.status = true;
            
             
            
            resolve(response);
          },
          (err) => {
            response.message = err;
            resolve(response);
          }
        );
      } catch (error) {
        response.message = error;
        resolve(response);
      }
    });
  }


  deletePoints() {
    return new Promise((resolve, reject) => {
      const response = { data: null, status: false, message: null };
      try {
        
        this.httpserive.deletePoints().subscribe(
          (data) => {
            response.data = data;
            response.message = 'success';
            response.status = true;
            
             
            
            resolve(response);
          },
          (err) => {
            response.message = err;
            resolve(response);
          }
        );
      } catch (error) {
        response.message = error;
        resolve(response);
      }
    });
  }

  
}
