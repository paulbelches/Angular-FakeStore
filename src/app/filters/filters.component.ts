import { Component, OnInit} from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  //Temporal
  products: Array<any> = []
  filterProducts: Array<any> = []

  catergory: Array<string> = []

  order: string = "";
  priceRange: string = "0";

  sendFilters() {
    switch (this.priceRange) { 
      case '1': 
        this.filterProducts = this.products.filter(product => product.price < 25 )
      break; 
      case '2': 
        this.filterProducts = this.products.filter(product => product.price > 25 &&  product.price < 50)
      break; 
      case '3': 
        this.filterProducts = this.products.filter(product => product.price > 50 &&  product.price < 100)
      break;   
      case '4': 
        this.filterProducts = this.products.filter(product => product.price > 100 &&  product.price < 200)  
      break; 
      case '5': 
        this.filterProducts =  this.products.filter(product => product.price > 200)
      break;
      default:
        this.filterProducts =  this.products
      break; 
    }
    
    //Order products, by their price
    
    this.filterProducts = (this.order) ?    
      (this.order === "ASCD" ) ? 
      this.filterProducts.sort((a,b) => (a.price > b.price ? 1 : ((b.price > a.price) ? -1 : 0))) : 
      this.filterProducts.sort((a,b) => (a.price < b.price) ? 1 : ((b.price < a.price) ? -1 : 0)) 
    : 
      this.filterProducts

    //update filterProducts
    this.data.changeFilterProduct(this.filterProducts) //Checks
  }

  constructor(
    private data: DataService
  ) { }

  ngOnInit(): void {
    this.data.currentProduct.subscribe(message => this.products = message)
    /*
    this.catergory = (this.products) ? 
    this.products.map(product => product.category).filter((element, index) => {
      return this.products.map(product => product.category).indexOf(element) === index;
    })
    :
    []*/ 

  }

}
