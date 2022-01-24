import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  readonly URL = 'https://fakestoreapi.com'
  
  title = 'FakeStore';

  apiProducts: any

  constructor(private data: DataService, private http: HttpClient){
    this.http.get(this.URL + '/products').subscribe((response) => { 
      this.apiProducts = response
      this.data.changeProduct(this.apiProducts)
      this.data.changeFilterProduct(this.apiProducts)
    })
  }
}
