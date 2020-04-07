import { Component, OnInit } from '@angular/core';
import { ListProductService } from './list-product.service';
import { CreatedProduct } from '../product/models/createdProduct.interface';

@Component({
  selector: 'list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  data: CreatedProduct[];

  constructor(private listProductService: ListProductService) {}

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.listProductService.getProducts().subscribe(
      resp => {
        this.data = resp;
      },
      err => {
        alert(`Error ${err}`);
      }
    );
  }
}
