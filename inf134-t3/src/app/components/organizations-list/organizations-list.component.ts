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
  public orgsEvent;
  public collapseStatusOrgs = [];
  public keyword: string;

  constructor(public dataService: DataService, public router: Router) {}

  ngOnInit(): void {
    this.organizations = this.dataService.getOrganizations();
    for  (let org of this.organizations) {
      this.collapseStatusOrgs.push(false);
    }
  }

  public selectOrganization(org, index) {
    this.selectedOrg = org;
    this.getEventDescription(org.id);
    this.toggleDescription(index);
  }

  private getEventDescription(org_id) {
    this.orgsEvent = this.dataService.getEventsFromOrganization(org_id);
  }

  public goToEventPageById(event_id) {
    // TODO: goto the actual event page
    this.router.navigate(['/event/' + event_id]);
  }

  public sortByName() {
    this.organizations = this.dataService.getOrganizations();
    console.log(this.organizations);
    this.organizations.sort(function compare(kv1, kv2) {
        return kv1['name'].localeCompare(kv2['name']);
      });
  }

  public toggleDescription(i) {
    this.collapseStatusOrgs[i] = !this.collapseStatusOrgs[i];
  }

  public searchForOrg() {
    console.log(this.keyword);
    let searchResultOrgs = []
    for (let org of this.organizations) {
      if (org.name.toLowerCase().includes(this.keyword) || org.description.toLowerCase().includes(this.keyword)) {
        searchResultOrgs.push(org);
      }
    }
    this.organizations = searchResultOrgs;
  }

}
