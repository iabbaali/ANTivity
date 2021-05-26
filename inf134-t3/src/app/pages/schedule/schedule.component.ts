import { ApplicationRef, Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css'],
})
export class ScheduleComponent implements OnInit {
  @ViewChild('closebutton') closebutton;

  northMap = true;
  eastMap = false;
  southMap = false;
  westMap = false;
  buttonText = 'Campus';
  selectedArea = null;
  startTime = '08:00';
  endTime = '17:00';
  convertedSchedule = [];

  constructor(public dataService: DataService) {}

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
    this.clearDays();
    this.closebutton.nativeElement.click();
    this.dataService.addToSchedule(
      this.selectedArea,
      selectedDays,
      this.startTime,
      this.endTime
    );
    this.convertedSchedule = Object.entries(this.dataService.getSchedule());
  }

  toDate(dStr) {
    var format = 'h:m';
    var now = new Date();
    if (format == 'h:m') {
      now.setHours(dStr.substr(0, dStr.indexOf(':')));
      now.setMinutes(dStr.substr(dStr.indexOf(':') + 1));
      now.setSeconds(0);
      return now;
    } else return 'Invalid Format';
  }

  formatTime(time) {
    let hour = time.substr(0, time.indexOf(':'));
    let min = time.substr(time.indexOf(':') + 1);
    let ampm = '';
    let h = parseInt(hour);
    let m = parseInt(min);
    if (h >= 12) {
      ampm = 'PM';
    } else {
      ampm = 'AM';
    }
    h = h % 12;
    if (h === 0) {
      h = 12;
    }
    let minString = m < 10 ? '0' + m : '' + m;
    return h + ':' + minString + ' ' + ampm;
  }

  formatDays(days) {
    if (days.length === 7) {
      return 'Everyday';
    }
    if (
      days.length === 2 &&
      days.includes('Saturday') &&
      days.includes('Sunday')
    ) {
      return 'Weekends';
    }
    return days.join(', ');
  }

  removeScheduleInput(key, index) {
    this.dataService.removeFromSchedule(key, index);
    this.convertedSchedule = Object.entries(this.dataService.getSchedule());
  }
}
