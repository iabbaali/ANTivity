import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css'],
})
export class ScheduleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  selectArea(event) {
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.title;
    var value = idAttr.nodeValue;
    console.log(value);
  }
}
