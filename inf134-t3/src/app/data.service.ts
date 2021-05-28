import { Injectable } from '@angular/core';
import * as eventData from '../assets/data/sample-events.json';
import * as organizationData from '../assets/data/sample-organizations.json';
import * as scheduleData from '../assets/data/sample-schedule.json';
import * as userData from '../assets/data/sample-user-data.json';
import * as savedEventData from '../assets/data/sample-saved-events.json';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  events = (eventData as any).default;
  organizations = (organizationData as any).default;
  schedule = (scheduleData as any).default;
  users = (userData as any).default;
  savedEvents = (savedEventData as any).default;

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
    events;
  }> {
    return this.organizations;
  }

  public getOrganization(id) {
    for (let org of this.organizations) {
      if (org.id === id) {
        return org;
      }
    }
    return null;
  }


  public getEventsFromOrganization(id): Array<{
    id;
    name;
    description;
    organization;
    date;
    location;
    organization_id;
    image;
  }> {
    let org = this.getOrganization(id);
    let events_id = org.events;
    return this.getEvent(events_id);

  }

  public createOrganization(org: {
    id;
    name;
    description;
    website;
    social_media;
    image;
    events;
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
  public getUsers(): Array<{
    id;
    name;
    saved_event_categories;
  }> {
    return this.users
  }

  public getUser(id) {
    for (let user of this.users) {
      if (user.id === id) {
        return user;
      }
    }
    return null;
  }

  public createUser(user: {
    id;
    name;
    saved_event_categories;
  }) {
    this.users.push(user);
  }

  public getSavedEvents(): { [key: string]: Array<{
    id:number;
    name:string;
    description:string;
    organization:string;
    date:string;
    location:string;
    organization_id:number;
    image:string;
  }>} {
    return this.savedEvents;
  }

}
