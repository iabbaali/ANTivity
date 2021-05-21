import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { EventsComponent } from './pages/events/events.component';
import { OrganizationsComponent } from './pages/organizations/organizations.component';
import { SavedEventsComponent } from './pages/saved-events/saved-events.component';
import { HeaderComponent } from './components/header/header.component';
import { EventsListComponent } from './components/events-list/events-list.component';
import { OrganizationsListComponent } from './components/organizations-list/organizations-list.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { SingleEventComponent } from './pages/single-event/single-event.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EventsComponent,
    OrganizationsComponent,
    SavedEventsComponent,
    HeaderComponent,
    EventsListComponent,
    OrganizationsListComponent,
    ScheduleComponent,
    SingleEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
