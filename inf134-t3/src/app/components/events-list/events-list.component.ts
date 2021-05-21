import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css'],
})
export class EventsListComponent implements OnInit {
  public events;
  public selectedEvent;

  constructor(public dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.events = this.dataService.getEvents();
  }

  public selectEvent(event) {
    this.selectedEvent = event;
  }
}
