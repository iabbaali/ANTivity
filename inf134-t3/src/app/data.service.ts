import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  events = [
    {
      id: 1,
      name: 'Resume Review',
      organization: 'WICS',
      description: 'Insert description for resume review',
      date: '5/17/2021 4:00 PM',
      location: 'Student Center',
    },
    {
      id: 2,
      name: 'Ice Cream Social',
      organization: 'VGDC',
      description: 'Insert description for ice cream social',
      date: '5/18/2021 2:00 PM',
      location: 'Aldrich Park',
    },
    {
      id: 3,
      name: 'Networking Event',
      organization: 'Hack',
      description: 'Insert description for networking event',
      date: '5/19/2021 7:00 PM',
      location: 'DBH 6011',
    },
  ];

  constructor() {}

  public getEvents(): Array<{
    id;
    name;
    description;
    organization;
    date;
    location;
  }> {
    return this.events;
  }
  public createEvent(event: {
    id;
    name;
    description;
    organization;
    date;
    location;
  }) {
    this.events.push(event);
  }
}
