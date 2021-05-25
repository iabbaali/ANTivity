import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css'],
})
export class ScheduleComponent implements OnInit {
  northMap = true;
  eastMap = false;
  southMap = false;
  westMap = false;
  buttonText = 'Campus';

  constructor() {}

  ngOnInit(): void {}

  selectArea(event) {
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.title;
    var value = idAttr.nodeValue;
    console.log(value);
  }

  hideAllMaps() {
    this.northMap = false;
    this.eastMap = false;
    this.southMap = false;
    this.westMap = false;
  }

  showMap(direction) {
    this.hideAllMaps();
    if (direction === 'south') {
      this.southMap = true;
      this.buttonText = 'South';
    } else if (direction === 'north') {
      this.northMap = true;
      this.buttonText = 'North';
    } else if (direction === 'east') {
      this.eastMap = true;
      this.buttonText = 'East';
    } else if (direction === 'west') {
      this.westMap = true;
      this.buttonText = 'West';
    }
  }
}
