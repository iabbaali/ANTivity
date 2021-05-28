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
  selectedCatgeory: string = "all";
  savedEvents: { [key: string]: Array<{
    id:number;
    name:string;
    description:string;
    organization:string;
    date:string;
    location:string;
    organization_id:number;
    image:string;
  }>} = {};

  constructor(private router: Router, private dataservice: DataService) {
  }

  ngOnInit(): void {
    this.allButton = document.getElementById("All");
    this.categories = this.dataservice.getUser(1).saved_event_categories;
    this.savedEvents = this.dataservice.getSavedEvents();
    //console.log(this.savedEvents.All);

    //console.log(eventData);
    //console.log(this.categories);
    for (let category in this.categories) {
      let catName:string = this.categories[category]
      let divider = document.createElement('div');
      divider.id = this.categories[category];
      divider.className = "col";

      let divButton = document.createElement('button');
      divButton.id = this.categories[category] + "Button";
      divButton.innerText = this.categories[category];
      divButton.className = "btn btn-primary bg-transparent";
      divButton.style.border = "none";
      divButton.style.color = "#c4c4c4";
      divButton.addEventListener("click", function() {
        document.getElementById("saved-events-groups").dataset.value = catName;
        console.log(catName);
        this.style.color = "black";
        var allButtons = document.getElementsByClassName("btn btn-primary bg-transparent");
        for (var i = 0; i < allButtons.length; i++) {
          if (allButtons[i].id != (catName + "Button")) {
            allButtons[i].setAttribute("style", "border: none; color: #c4c4c4");
          }
        }
      })
      divider.appendChild(divButton);
      document.getElementById("categories").appendChild(divider);
    }
    
  }

  goToSchedulePage() {
    this.router.navigateByUrl('/schedule');
  }

  showAll() {
    this.allButton.style.color = "black";
    var allButtons = document.getElementsByClassName("btn btn-primary bg-transparent");
      for (var i = 1; i < allButtons.length; i++) {
        allButtons[i].setAttribute("style", "border: none; color: #c4c4c4");
      }
    document.getElementById("saved-events-groups").dataset.value = "All";
    console.log(document.getElementById("saved-events-groups").dataset.value);
  };

}
