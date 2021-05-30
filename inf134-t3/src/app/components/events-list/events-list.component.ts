import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css'],
})
export class EventsListComponent implements OnInit {
  public events;
  public selectedEvent;
  public collapseStatusEvents = [];
  private sortOrder = 1;
  private collator = new Intl.Collator(undefined, {
    numeric: true,
    sensitivity: 'base',
  });
  public doubleClickedEvent = '';
  closeResult: string;
  private touchtime = 0;
  constructor(
    public dataService: DataService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.events = this.dataService.getEvents();
    for (let event of this.events) {
      this.collapseStatusEvents.push(false);
    }
  }

  openModal(content, index) {
    if (this.touchtime == 0) {
      // set first click
      this.touchtime = new Date().getTime();
    } else {
      // compare first click to this click and see if they occurred within double click threshold
      if (new Date().getTime() - this.touchtime < 800) {
        // double click occurred
        this.touchtime = 0;
        this.doubleClickedEvent = this.events[index];
        this.modalService
          .open(content, { ariaLabelledBy: 'modal-basic-title' })
          .result.then(
            (result) => {
              this.closeResult = `Closed with: ${result}`;
            },
            (reason) => {
              this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
            }
          );
      } else {
        // not a double click so set as a new first click
        this.touchtime = new Date().getTime();
      }
    }
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  saveEvent() {
    console.log('double');
  }

  public selectEvent(event) {
    let table = document.getElementById('table');
    this.selectedEvent = event;
    table.style.display = 'none';
  }

  toggleDescription(index) {
    this.collapseStatusEvents[index] = !this.collapseStatusEvents[index];
  }

  goBack(): void {
    this.selectedEvent = null;
    let table = document.getElementById('table');
    table.style.display = 'table';
  }

  allowDrop(ev) {
    ev.preventDefault();
  }

  drag(ev) {
    ev.dataTransfer.setData('text', ev.target.id);
  }

  drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData('text');
    console.log(ev.dataTransfer);
    console.log(data);
    console.log(
      document.getElementById(data).parentElement.parentElement.parentElement
    );
    if (document.getElementById(data).parentElement.id.startsWith('event')) {
      document.getElementById(
        data
      ).parentElement.parentElement.parentElement.style.display = 'none';
      console.log('test');
    }
    ev.target.appendChild(document.getElementById(data));
    document.getElementById(data).parentNode;
  }

  public startSort(type) {
    console.log(this.events);
    if (type == 'name') {
      this.events.sort(function compare(kv1, kv2) {
        return kv1['name'].localeCompare(kv2['name']);
      });
    }
    if (type == 'date') {
      this.events.sort(function compare(kv1, kv2) {
        var date1 = new Date(kv1['date']);
        var date2 = new Date(kv2['date']);
        return date1.getDate() - date2.getDate();
      });
    }
  }

  private sortData(a, b) {
    if (a < b) {
      return -1 * this.sortOrder;
    } else if (a > b) {
      return 1 * this.sortOrder;
    } else {
      return 0 * this.sortOrder;
    }
  }
}
