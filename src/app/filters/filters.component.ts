import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {


  order: string = "";
  priceRange: string = "0";

  @Output() filtersEvent = new EventEmitter<any>();

  sendFilters() {
    this.filtersEvent.emit({order: this.order, priceRange: this.priceRange})
  }

  constructor() { }

  ngOnInit(): void {
  }

}
