import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-organizations-list',
  templateUrl: './organizations-list.component.html',
  styleUrls: ['./organizations-list.component.css'],
})
export class OrganizationsListComponent implements OnInit {
  public organizations;
  public selectedOrg;

  constructor(public dataService: DataService) {}

  ngOnInit(): void {
    this.organizations = this.dataService.getOrganizations();
  }

  public selectOrganization(org) {
    this.selectedOrg = org;
  }
}
