import { Component, OnInit } from '@angular/core';
// DataService imported from respective file
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  dataArr = [];
  added = false;

  constructor(public dataService: DataService) { }
  // dependency injected in the class constructor
  getValues(event: Event, name: HTMLInputElement, email: HTMLInputElement) {
    event.preventDefault();
    // adds user defined values to array
    if (name.value !== '' && email.value !== '') {
      this.dataService.addData({ name: name.value, email: email.value });
    }
    // sets ngIf value based on array length is greater than 1
    if (this.dataArr.length > 1) {
      this.added = true;
    }
  }

  ngOnInit() {
    // adds the data array value from the service
    this.dataArr = this.dataService.getData();
  }
}
