import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';
import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';


@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {
 
  readonly URL = 'https://fakestoreapi.com'
  
  id: any = ""
  product: any = {}
  loading: boolean =  true

  products: Array<any> = []; 

  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  value = 50;

  constructor(
    private route: ActivatedRoute,
    private data: DataService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.route.paramMap.subscribe(params => {
      this.id = params.get("id")
      this.data.currentProduct.subscribe(message => this.products = message)
    });
    if (this.product === undefined) {
      this.product = this.products.filter( product => product.id === Number(this.id))[0]
      this.loading = false;
    } else {
      this.http.get(this.URL + '/products/'+this.id).subscribe((response) => { 
        this.product = response
        this.loading = false;
      })
    }
  }
}
