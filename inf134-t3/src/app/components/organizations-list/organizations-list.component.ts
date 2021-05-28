import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-organizations-list',
  templateUrl: './organizations-list.component.html',
  styleUrls: ['./organizations-list.component.css'],
})
export class OrganizationsListComponent implements OnInit {
  public organizations;
  public selectedOrg;
  public orgsEvent

  constructor(public dataService: DataService, public router: Router) {}

  ngOnInit(): void {
    this.organizations = this.dataService.getOrganizations();
  }

  public selectOrganization(org) {
    this.selectedOrg = org;
    this.getEventDescription(org.id);
  }

  private getEventDescription(org_id) {
    this.orgsEvent = this.dataService.getEventsFromOrganization(org_id);
  }

  public goToEventPageById(event_id) {
    // TODO: goto the actual event page
    this.router.navigate(['/event/' + event_id]);
  }
}
