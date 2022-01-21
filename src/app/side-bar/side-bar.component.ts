import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  filters: any = {};

  @Output() filtersEvent = new EventEmitter<any>();

  sendFilters() {
    console.log("hola")
    this.filtersEvent.emit(this.filters)
  }

  constructor() { }

  ngOnInit(): void {
  }

  receiveFilters($event: any) {
    this.filters = $event;
    this.sendFilters();
  }
}
