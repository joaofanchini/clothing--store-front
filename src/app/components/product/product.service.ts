import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreatedProduct } from './models/createdProduct.interface';
import { Observable } from 'rxjs';
import {} from './../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) {}

  registerProduct(product: any): Observable<CreatedProduct> {
    return this.http.post<CreatedProduct>(
      'http://localhost:3328/products',
      product
    );
  }
}
