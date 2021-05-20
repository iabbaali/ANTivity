import { Injectable } from '@angular/core';
import * as eventData from '../assets/data/sample-events.json';
import * as organizationData from '../assets/data/sample-organizations.json';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  events = (eventData as any).default;
  organizations = (organizationData as any).default;

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
}
