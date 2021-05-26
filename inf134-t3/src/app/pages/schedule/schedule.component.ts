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
  selectedArea = null;
  startTime = '08:00:00';
  endTime = '17:00:00';

  constructor() {}

  ngOnInit(): void {}

  selectArea(event) {
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.title;
    var value = idAttr.nodeValue;
    this.selectedArea = value;
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

  selectDay(event) {
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    var value = idAttr.nodeValue;
    let selector = '#' + value;
    let element = document.querySelector(selector);
    if (element.classList.contains('day-clicked')) {
      element.classList.remove('day-clicked');
      element.classList.add('day-unclicked');
    } else {
      element.classList.add('day-clicked');
      element.classList.remove('day-unclicked');
    }
  }

  clearDays() {
    let days = document.querySelectorAll('.day');
    days.forEach((day) => {
      if (day.classList.contains('day-clicked')) {
        day.classList.remove('day-clicked');
      }
    });
  }

  saveSchedule() {
    let selectedDays = [];
    let days = document.querySelectorAll('.day');
    days.forEach((day) => {
      if (day.classList.contains('day-clicked')) {
        selectedDays.push(day.id);
      }
    });
    console.log(this.startTime);
    console.log(this.endTime);
    console.log(selectedDays);
    this.clearDays();
  }
}
