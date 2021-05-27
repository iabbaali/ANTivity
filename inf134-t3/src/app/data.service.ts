import { Injectable } from '@angular/core';
import * as eventData from '../assets/data/sample-events.json';
import * as organizationData from '../assets/data/sample-organizations.json';
import * as userData from '../assets/data/sample-user-data.json';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  events = (eventData as any).default;
  organizations = (organizationData as any).default;
  users = (userData as any).default;

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

}
