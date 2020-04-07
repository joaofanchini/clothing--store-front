import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreatedProduct } from '../product/models/createdProduct.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListProductService {
  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<CreatedProduct[]> {
    return this.httpClient.get<CreatedProduct[]>(
      'http://localhost:3328/products'
    );
  }
}
