import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css']
})

export class ProductGridComponent implements OnInit {
  
  products: any = {}; 

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.currentFilterProduct.subscribe(message => this.products = message)
  }

}
