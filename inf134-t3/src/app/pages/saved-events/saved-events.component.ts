import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import eventData from '../../../assets/data/sample-events.json';

@Component({
  selector: 'app-saved-events',
  templateUrl: './saved-events.component.html',
  styleUrls: ['./saved-events.component.css'],
})
export class SavedEventsComponent implements OnInit {

  allButton: HTMLElement;
  socialsButton: HTMLElement;
  workshopsButton: HTMLElement;
  mustAttendButton: HTMLElement;

  lightGray: string = "#c4c4c4";
  selectedCatgeory: string = "all";

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.allButton = document.getElementById("allButton");
    this.socialsButton = document.getElementById("socialsButton");
    this.workshopsButton = document.getElementById("workshopsButton");
    this.mustAttendButton = document.getElementById("attendButton");

    console.log(eventData);
  }

  goToSchedulePage() {
    this.router.navigateByUrl('/schedule');
  }

  showAll() {
    this.allButton.style.color = "black";
    this.socialsButton.style.color = this.lightGray;
    this.workshopsButton.style.color = this.lightGray;
    this.mustAttendButton.style.color = this.lightGray;

    this.selectedCatgeory = "all";
  };

  showSocials() {
    this.allButton.style.color = this.lightGray;
    this.socialsButton.style.color = "black";
    this.workshopsButton.style.color = this.lightGray;
    this.mustAttendButton.style.color = this.lightGray;

    this.selectedCatgeory = "socials";
  };

  showWorkshops() {
    this.allButton.style.color = this.lightGray;
    this.socialsButton.style.color = this.lightGray;
    this.workshopsButton.style.color = "black";
    this.mustAttendButton.style.color = this.lightGray;

    this.selectedCatgeory = "workshops";
  };

  showMustAttend() {
    this.allButton.style.color = this.lightGray;
    this.socialsButton.style.color = this.lightGray;
    this.workshopsButton.style.color = this.lightGray;
    this.mustAttendButton.style.color = "black";

    this.selectedCatgeory = "must attend";
  };
}
