import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-saved-events',
  templateUrl: './saved-events.component.html',
  styleUrls: ['./saved-events.component.css'],
})
export class SavedEventsComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToSchedulePage() {
    this.router.navigateByUrl('/schedule');
  }
}
