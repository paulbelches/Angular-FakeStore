import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private productsSource = new BehaviorSubject<any>({})
  currentProduct = this.productsSource.asObservable()

  
  private filterProductsSource = new BehaviorSubject<any>({})
  currentFilterProduct = this.filterProductsSource.asObservable()

  constructor() { }

  changeProduct(newValue: any){
    this.productsSource.next(newValue)
  }

  changeFilterProduct(newValue: any){
    this.filterProductsSource.next(newValue)
  }
}
