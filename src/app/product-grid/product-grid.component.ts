import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css']
})

export class ProductGridComponent implements OnInit {
  
  @Input() products: any = {}; 

  constructor() { }

  ngOnInit(): void {
  }

}
