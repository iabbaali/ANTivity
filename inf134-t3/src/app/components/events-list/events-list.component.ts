import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

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
  public doubleClickedEvent;
  closeResult: string;
  private touchtime = 0;
  public folderCategories;
  public selectedFolder = '';
  public showSaveStatus = false;
  public showForm = false;
  @Input() newFolderName = '';

  constructor(
    public dataService: DataService,
    private modalService: NgbModal,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.events = this.dataService.getEvents();
    for (let event of this.events) {
      this.collapseStatusEvents.push(false);
    }
    this.folderCategories = this.dataService.getCategories();
    this.folderCategories = ['New'].concat(this.folderCategories);
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

  goToEvent(id) {
    this.router.navigateByUrl('/event/' + id.toString());
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
    ev.dataTransfer.setData('text', this.doubleClickedEvent.name);
  }

  dropToFolder(ev, folderIndex) {
    ev.preventDefault();
    if (folderIndex !== 0) {
      this.selectedFolder = this.folderCategories[folderIndex];
      this.dataService.addToSavedEvents(
        this.selectedFolder,
        this.doubleClickedEvent
      );
      setTimeout(() => {
        this.showSaveStatus = true;
      }, 1);
      setTimeout(() => {
        this.showSaveStatus = false;
        this.selectedFolder = '';
      }, 3000);
    } else {
      this.showForm = true;
    }
  }

  createFolder() {
    this.dataService.addToCategories(this.newFolderName);
    this.folderCategories.push(this.newFolderName);
    this.showForm = false;
    this.selectedFolder = this.newFolderName;
    this.dataService.addToSavedEvents(
      this.newFolderName,
      this.doubleClickedEvent
    );
    setTimeout(() => {
      this.showSaveStatus = true;
    }, 1);
    setTimeout(() => {
      this.showSaveStatus = false;
      this.selectedFolder = '';
    }, 3000);
  }

  search(): void {
    // Declare variables
    var input, filter, results, tr, td, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    results = document.getElementById('table');
    tr = results.getElementsByTagName('tr');

    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName('td')[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = '';
        } else {
          tr[i].style.display = 'none';
        }
      }
    }
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
