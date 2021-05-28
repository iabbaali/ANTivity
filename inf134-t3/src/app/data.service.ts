import { Injectable } from '@angular/core';
import * as eventData from '../assets/data/sample-events.json';
import * as organizationData from '../assets/data/sample-organizations.json';
import * as scheduleData from '../assets/data/sample-schedule.json';
import * as userData from '../assets/data/sample-user-data.json';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  events = (eventData as any).default;
  organizations = (organizationData as any).default;
  schedule = (scheduleData as any).default;
  users = (userData as any).default;

  savedEvents: { [categoryName: string]: Array<{
    id:number;
    name:string;
    description:string;
    organization:string;
    date:string;
    location:string;
    organization_id:number;
    image:string;
  }>} = {
    "All": [
      {
        "id": 1,
        "name": "Resume Review",
        "organization": "WICS",
        "description": "Insert description for resume review",
        "date": "5/17/2021 4:00 PM",
        "location": "Student Center",
        "organization_id": 1,
        "image": ""
      },
      {
        "id": 2,
        "name": "Ice Cream Social",
        "organization": "VGDC",
        "description": "Insert description for ice cream social",
        "date": "5/18/2021 2:00 PM",
        "location": "Aldrich Park",
        "organization_id": 3,
        "image": ""
      },
      {
        "id": 3,
        "name": "Networking Event",
        "organization": "Hack",
        "description": "Insert description for networking event",
        "date": "5/19/2021 7:00 PM",
        "location": "DBH 6011",
        "organization_id": 2,
        "image": ""
      },
      {
        "id": 4,
        "name": "Open Mic Night",
        "organization": "Patient Project",
        "description": "Recite your poetry and prose to other students! Get exposed t o some of the lovely writers in our community! Open to all UCI students!",
        "date": "5/22/2021 4:00 PM",
        "location": "RH 401",
        "organization_id": 4,
        "image": ""
      },
      {
        "id": 5,
        "name": "Influencer Insights",
        "organization": "ASUCI",
        "description": "ASUCI’s Office of Academic Affairs Speakers Commission is proud to present our final speaker of the year for our ZotTalks: Influencer Insights! We are proud to present Anna Akana as our guest speaker on May 26th from 6pm-7pm.",
        "date": "5/15/2021 10:00 AM",
        "location": "ICS 121",
        "organization_id": 9,
        "image": ""
      },
      {
        "id": 6,
        "name": "Tuition Awareness Town Hall",
        "organization": "ASUCI",
        "description": "The Office of the External Vice President and the ASUCI Senate would like to invite you to our collaboration event, Tuition Awareness Town Hall to get a better understanding of tuition and how student fees are assessed at UCI.",
        "date": "5/26/2021 7:00 PM",
        "location": "SLH 302",
        "organization_id": 9,
        "image": ""
      },
      {
        "id": 7,
        "name": "UCI Small Jazz Groups",
        "organization": "Clair Trevor School of the Arts",
        "description": "UCI Music undergraduate students in the jazz program will perform in smalls groups and as individuals. The concert will feature virtual real-time performances and videos.",
        "date": "5/26/2021 8:00 PM",
        "location": "Claire Trevor Theatre",
        "organization_id": 6,
        "image": ""
      },
      {
        "id": 8,
        "name": "Draw Like A Ross",
        "organization": "Campuswide Honors Student Council",
        "description": "Pick up those paint tools and brush up on your artistic skills! Please come and join our fun stress-relief creative event for coffee hour this Friday!",
        "date": "5/28/2021 9:00 AM",
        "location": "SST 202",
        "organization_id": 8,
        "image": ""
      },
      {
        "id": 9,
        "name": "International Coffee Hour",
        "organization": "Center for Excellence in Writing & Communication",
        "description": "Talk to a fellow anteater in a comfortable environment. Topics change each week.",
        "date": "5/28/2021 11:00 AM",
        "location": "Langson Library",
        "organization_id": 11,
        "image": ""
      },
      {
        "id": 10,
        "name": "Humanities Core Reading Group",
        "organization": "Center for Excellence in Writing & Communication",
        "description": "Are you a Humanities Core student who wants more time to discuss the readings with a knowledgeable Humanities Core instructor? Then join us on Monday afternoons to talk with Dr. Christine Connell about your questions, concerns, and ideas regarding the reading(s) you're doing in your Humanities Core classes!",
        "date": "5/31/2021 3:00 PM",
        "location": "Langson Library",
        "organization_id": 11,
        "image": ""
      },
      {
        "id": 11,
        "name": "Alcohol and Other Drugs in the Workplace",
        "organization": "Center For Student Wellness & Health Promotion",
        "description": "Are you graduating and entering a new job? Or just curious to learn more about the intersection of alcohol and other drugs in the workplace? Join us to learn more about how alcohol and other drug policies in the workplace impact you as an employee, and how your substance use may affect your work.",
        "date": "5/27/2021 1:00 PM",
        "location": "SSH 101",
        "organization_id": 12,
        "image": ""
      }
    
    ],
    "Socials": [
      {
        "id": 2,
        "name": "Ice Cream Social",
        "organization": "VGDC",
        "description": "Insert description for ice cream social",
        "date": "5/18/2021 2:00 PM",
        "location": "Aldrich Park",
        "organization_id": 3,
        "image": ""
      },
      {
        "id": 4,
        "name": "Open Mic Night",
        "organization": "Patient Project",
        "description": "Recite your poetry and prose to other students! Get exposed t o some of the lovely writers in our community! Open to all UCI students!",
        "date": "5/22/2021 4:00 PM",
        "location": "RH 401",
        "organization_id": 4,
        "image": ""
      },
      {
        "id": 9,
        "name": "International Coffee Hour",
        "organization": "Center for Excellence in Writing & Communication",
        "description": "Talk to a fellow anteater in a comfortable environment. Topics change each week.",
        "date": "5/28/2021 11:00 AM",
        "location": "Langson Library",
        "organization_id": 11,
        "image": ""
      }
    ],
    "Workshops": [
      {
        "id": 1,
        "name": "Resume Review",
        "organization": "WICS",
        "description": "Insert description for resume review",
        "date": "5/17/2021 4:00 PM",
        "location": "Student Center",
        "organization_id": 1,
        "image": ""
      },
      {
        "id": 10,
        "name": "Humanities Core Reading Group",
        "organization": "Center for Excellence in Writing & Communication",
        "description": "Are you a Humanities Core student who wants more time to discuss the readings with a knowledgeable Humanities Core instructor? Then join us on Monday afternoons to talk with Dr. Christine Connell about your questions, concerns, and ideas regarding the reading(s) you're doing in your Humanities Core classes!",
        "date": "5/31/2021 3:00 PM",
        "location": "Langson Library",
        "organization_id": 11,
        "image": ""
      },
    ],
    "Must Attend": [
      {
        "id": 2,
        "name": "Ice Cream Social",
        "organization": "VGDC",
        "description": "Insert description for ice cream social",
        "date": "5/18/2021 2:00 PM",
        "location": "Aldrich Park",
        "organization_id": 3,
        "image": ""
      },
      {
        "id": 7,
        "name": "UCI Small Jazz Groups",
        "organization": "Clair Trevor School of the Arts",
        "description": "UCI Music undergraduate students in the jazz program will perform in smalls groups and as individuals. The concert will feature virtual real-time performances and videos.",
        "date": "5/26/2021 8:00 PM",
        "location": "Claire Trevor Theatre",
        "organization_id": 6,
        "image": ""
      },
      {
        "id": 9,
        "name": "International Coffee Hour",
        "organization": "Center for Excellence in Writing & Communication",
        "description": "Talk to a fellow anteater in a comfortable environment. Topics change each week.",
        "date": "5/28/2021 11:00 AM",
        "location": "Langson Library",
        "organization_id": 11,
        "image": ""
      },
    ]
  };

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
