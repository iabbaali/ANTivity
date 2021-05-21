import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-single-event',
  templateUrl: './single-event.component.html',
  styleUrls: ['./single-event.component.css'],
})
export class SingleEventComponent implements OnInit {
  eventID;
  event;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.eventID = parseInt(this.route.snapshot.paramMap.get('id'));
    this.event = this.dataService.getEvent(this.eventID);
    console.log(this.event);
  }
}
