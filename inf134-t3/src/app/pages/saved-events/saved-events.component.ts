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
  savedEvents: {
    [key: string]: Array<{
      id: number;
      name: string;
      description: string;
      organization: string;
      date: string;
      location: string;
      organization_id: number;
      image: string;
    }>;
  } = {};
  filterBySchedule = false;
  displayedEvents = [];

  constructor(private router: Router, private dataservice: DataService) {}

  showEventBasedOnSchedule(event) {
    if (this.filterBySchedule) {
      if (event.id > 8) {
        return false;
      }
    }
    console.log(event);
    return true;
  }

  ngOnInit(): void {
    this.savedEvents = this.dataservice.getSavedEvents();
    this.displayedEvents = this.savedEvents.All;
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
}
