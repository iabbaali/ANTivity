import { Injectable } from '@angular/core';
import * as eventData from '../assets/data/sample-events.json';
import * as organizationData from '../assets/data/sample-organizations.json';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  events = (eventData as any).default;
  organizations = (organizationData as any).default;
  schedule = {};

  constructor() {}

  public getEvents(): Array<{
    id;
    name;
    description;
    organization;
    date;
    location;
    organization_id;
    image;
  }> {
    return this.events;
  }

  public getEvent(id) {
    for (let event of this.events) {
      if (event.id === id) {
        return event;
      }
    }
    return null;
  }

  public createEvent(event: {
    id;
    name;
    description;
    organization;
    date;
    location;
    organization_id;
    image;
  }) {
    this.events.push(event);
  }

  public getOrganizations(): Array<{
    id;
    name;
    description;
    website;
    social_media;
    image;
  }> {
    return this.organizations;
  }

  public createOrganization(org: {
    id;
    name;
    description;
    website;
    social_media;
    image;
  }) {
    this.organizations.push(org);
  }

  public addToSchedule(building, days, start, end) {
    if (!(building in this.schedule)) {
      this.schedule[building] = [];
    }
    this.schedule[building].push([days, start, end]);
  }

  public getSchedule() {
    return this.schedule;
  }

  public removeFromSchedule(key, index) {
    this.schedule[key].splice(index, 1);
    if (this.schedule[key].length === 0) {
      delete this.schedule[key];
    }
  }
}
