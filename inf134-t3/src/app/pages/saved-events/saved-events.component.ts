import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import eventData from '../../../assets/data/sample-events.json';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-saved-events',
  templateUrl: './saved-events.component.html',
  styleUrls: ['./saved-events.component.css'],
})
export class SavedEventsComponent implements OnInit {
  allButton: HTMLElement;
  categories: string[];
  selectedCatgeory: string = 'all';
  savedEvents = {};
  filterBySchedule = false;
  displayedEvents = [];
  schedule = [];

  constructor(private router: Router, private dataservice: DataService) {}

  ngOnInit(): void {
    let temp = this.dataservice.getSavedEvents();
    this.schedule = this.dataservice.getSchedule();
    for (let [key, value] of Object.entries(temp)) {
      this.savedEvents[key] = [];
      for (let event of value) {
        let eventCopy = { ...event };
        eventCopy['fits_schedule'] = this.isEventAlignWithSchedule(event);
        this.savedEvents[key].push(eventCopy);
      }
    }
    this.displayedEvents = this.savedEvents['All'];
    this.categories = this.dataservice.getCategories();

    console.log(this.schedule);
  }

  toggleSchedule() {
    this.filterBySchedule = !this.filterBySchedule;
  }

  goToSchedulePage() {
    this.router.navigateByUrl('/schedule');
  }

  goToEvent(id) {
    this.router.navigateByUrl('/event/' + id.toString());
  }

  displayEventsByCategory(category) {
    let buttons = document.querySelectorAll('.btn-category-custom');
    buttons.forEach((button) => {
      if (button.id === category) {
        button.setAttribute('style', ' color: black');
      } else {
        button.setAttribute('style', ' color: var(--light-cyan');
      }
    });
    this.displayedEvents = this.savedEvents[category];
  }

  isEventAlignWithSchedule(event) {
    for (let [building, value] of Object.entries(this.schedule)) {
      if (event.location.includes(building)) {
        let date = new Date(event.date);
        let eventDay = new Intl.DateTimeFormat('en-US', {
          weekday: 'long',
        }).format(date);
        for (let options of value) {
          let pieces1 = options[1].split(':');
          let startHr = parseInt(pieces1[0]);
          let startMin = parseInt(pieces1[1]);
          let startTime = startHr * 60 + startMin;

          let pieces2 = options[2].split(':');
          let endHr = parseInt(pieces2[0]);
          let endMin = parseInt(pieces2[1]);
          let endTime = endHr * 60 + endMin;

          for (let day of options[0]) {
            if (day === eventDay) {
              let eventTime = date.getHours() * 60 + date.getMinutes();
              if (eventTime >= startTime - 30 && eventTime <= endTime + 30) {
                return true;
              }
            }
          }
        }
      }
    }
    return false;
  }
}
