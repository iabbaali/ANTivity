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

  constructor(private router: Router, private dataservice: DataService) {}

  ngOnInit(): void {
    let eventIDCategories: { [key: string]: number[] } = {};
    this.allButton = document.getElementById('All');
    this.categories = this.dataservice.getUser(1).saved_event_categories;
    this.savedEvents = this.dataservice.getSavedEvents();
    //console.log(this.savedEvents);
    for (let key in this.savedEvents) {
      if (key != 'All') {
        eventIDCategories[key] = [];
      }
    }
    for (let key in this.savedEvents) {
      if (key != 'All') {
        for (let event in this.savedEvents[key]) {
          //console.log(this.savedEvents[key][event].id);
          eventIDCategories[key].push(this.savedEvents[key][event].id);
        }
      }
    }
    console.log(eventIDCategories);
    //console.log(this.savedEvents);
    //console.log(eventData);
    //console.log(this.categories);

    // generate user created event categories
    for (let category in this.categories) {
      let catName: string = this.categories[category];
      let divider = document.createElement('div');
      divider.id = this.categories[category];
      divider.className = 'col';

      let divButton = document.createElement('button');
      divButton.id = this.categories[category] + 'Button';
      divButton.innerText = this.categories[category];
      divButton.className = 'btn btn-primary bg-transparent';
      divButton.style.border = 'none';
      divButton.style.color = '#c4c4c4';
      divButton.addEventListener('click', function () {
        document.getElementById('saved-events-groups').dataset.value = catName;
        console.log(catName);
        this.style.color = 'black';
        let allButtons = document.getElementsByClassName(
          'btn btn-primary bg-transparent'
        );
        for (var i = 0; i < allButtons.length; i++) {
          if (allButtons[i].id != catName + 'Button') {
            allButtons[i].setAttribute('style', 'border: none; color: #c4c4c4');
          }
        }
        let allEventCards = document.getElementsByClassName('row event-card');
        for (var i = 0; i < allEventCards.length; i++) {
          if (
            eventIDCategories[catName].indexOf(parseInt(allEventCards[i].id)) ==
            -1
          ) {
            allEventCards[i].setAttribute(
              'style',
              'display: none; padding-top: 2em;'
            );
          } else {
            allEventCards[i].setAttribute('style', 'padding-top: 2em;');
          }
        }
      });
      divider.appendChild(divButton);
      document.getElementById('categories').appendChild(divider);
    }
    // Generate event cards
    for (let eventItem in this.savedEvents.All) {
      //console.log(this.savedEvents.All[eventItem]);

      let rowDiv = document.createElement('div');
      rowDiv.className = 'row event-card justify-content-md-center';
      rowDiv.style.paddingTop = '1em';
      rowDiv.id = this.savedEvents.All[eventItem].id.toString();
      let colDiv = document.createElement('div');
      colDiv.className = 'col-md-8';
      let cardDiv = document.createElement('div');
      cardDiv.className = 'card';
      let cardBodyDiv = document.createElement('div');
      cardBodyDiv.className = 'card-body';
      let cardTitle = document.createElement('h5');
      cardTitle.className = 'card-title';
      cardTitle.innerText = this.savedEvents.All[eventItem].name;
      let cardOrg = document.createElement('h6');
      cardOrg.className = 'card-title';
      cardOrg.innerText = this.savedEvents.All[eventItem].organization;
      let cardDate = document.createElement('h6');
      cardDate.className = 'card-title';
      cardDate.innerText =
        this.savedEvents.All[eventItem].date +
        ' - ' +
        this.savedEvents.All[eventItem].location;
      let cardText = document.createElement('p');
      cardText.className = 'card-text';
      cardText.innerHTML = this.savedEvents.All[eventItem].description;
      let cardImage = document.createElement('img');
      cardImage.className = 'card-img-top';
      cardImage.src =
        '../../../assets/images/' + this.savedEvents.All[eventItem].image;
      cardImage.alt = 'Card image';

      cardBodyDiv.appendChild(cardImage);
      cardBodyDiv.appendChild(cardTitle);
      cardBodyDiv.appendChild(cardOrg);
      cardBodyDiv.appendChild(cardDate);
      cardBodyDiv.appendChild(cardText);
      cardDiv.appendChild(cardBodyDiv);
      colDiv.appendChild(cardDiv);
      rowDiv.appendChild(colDiv);
      document.getElementById('saved-events').appendChild(rowDiv);
    }
  }

  toggleSchedule() {
    this.filterBySchedule = !this.filterBySchedule;
    console.log(this.filterBySchedule);
  }

  goToSchedulePage() {
    this.router.navigateByUrl('/schedule');
  }

  showAll() {
    this.allButton.style.color = 'black';
    var allButtons = document.getElementsByClassName(
      'btn btn-primary bg-transparent'
    );
    for (var i = 1; i < allButtons.length; i++) {
      allButtons[i].setAttribute('style', 'border: none; color: #c4c4c4');
    }
    document.getElementById('saved-events-groups').dataset.value = 'All';
    let allEventCards = document.getElementsByClassName(
      'row event-card justify-content-md-center'
    );
    for (let i = 0; i < allEventCards.length; i++) {
      allEventCards[i].setAttribute('style', 'padding-top: 2em;');
    }
    console.log(document.getElementById('saved-events-groups').dataset.value);
  }
}
