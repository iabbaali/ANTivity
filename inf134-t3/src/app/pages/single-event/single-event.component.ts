import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-single-event',
  templateUrl: './single-event.component.html',
  styleUrls: ['./single-event.component.css'],
})
export class SingleEventComponent implements OnInit {
  eventID;
  event;
  eventDate;
  eventTime;
  eventImage;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private router: Router,
    private _location: Location
  ) {}

  ngOnInit(): void {
    this.eventID = parseInt(this.route.snapshot.paramMap.get('id'));
    this.event = this.dataService.getEvent(this.eventID);
    console.log(this.event);

    var parts = this.event.date.split(' ');
    var date = parts[0].split('/');
    var hour = parseInt(parts[1].split(':')[0]);
    var minutes = parseInt(parts[1].split(':')[1]);

    if (parts[2] == 'PM') {
      hour += 12;
    }

    this.eventDate = new Date(date[2], date[0] - 1, date[1], hour, minutes);
    this.eventImage = '../../../assets/images/' + this.event.image;
  }

  backToPreviousPage() {
    this._location.back();
  }
}
