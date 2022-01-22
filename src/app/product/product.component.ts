import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: any = {
    "image": "", 
    "title": "",
    "category": "",
    "description": "",
    "price": "",
    "rating": {
      "rate":"",
      "count": ""
    }
  };

  constructor() { }

  ngOnInit(): void { }

}
