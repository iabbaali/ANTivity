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

  constructor(private router: Router, private dataservice: DataService) {}

  ngOnInit(): void {
    let temp = this.dataservice.getSavedEvents();
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
    if (event.id > 8) {
      return false;
    }
    return true;
  }
}
