import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css'],
})
export class EventsListComponent implements OnInit {
  public events;
  public selectedEvent;
  private sortOrder = 1;
  private collator = new Intl.Collator(undefined, {
    numeric:true,
    sensitivity: "base",
  })
  constructor(public dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.events = this.dataService.getEvents();
  }

  public selectEvent(event) {
    let table = document.getElementById("table");
    this.selectedEvent = event;
    table.style.display = "none";
  }
  
  goBack(): void{
    this.selectedEvent = null;
    let table = document.getElementById("table");
    table.style.display = "table";
  }
  
  allowDrop(ev) {
    ev.preventDefault();
  }
  
  drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    console.log(ev.dataTransfer)
    console.log(data);
    console.log(document.getElementById(data).parentElement.parentElement.parentElement);
    if(document.getElementById(data).parentElement.id.startsWith("event")){
      document.getElementById(data).parentElement.parentElement.parentElement.style.display = "none";
      console.log("test");
    }
    ev.target.appendChild(document.getElementById(data));
    document.getElementById(data).parentNode;
    }

  public startSort(type){
    console.log(this.events)
    if(type == "name"){
      this.events.sort(function compare(kv1, kv2) {
        return kv1['name'].localeCompare(kv2['name']);
      })
    }
    if(type == "date"){
      this.events.sort(function compare(kv1, kv2) {
        var date1 = new Date(kv1['date'])
        var date2 = new Date(kv2['date'])
        return date1.getDate() - date2.getDate();
    })
    }
  }

  private sortData(a,b) {
    if (a < b) {
      return -1 * this.sortOrder;
    }
    else if (a > b) {
      return 1 * this.sortOrder;
    }
    else {
      return 0 * this.sortOrder;
    }
  }
}
