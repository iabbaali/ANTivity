import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { OrganizationsComponent } from './pages/organizations/organizations.component';
import { EventsComponent } from './pages/events/events.component';
import { SavedEventsComponent } from './pages/saved-events/saved-events.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { SingleEventComponent } from './pages/single-event/single-event.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'organizations', component: OrganizationsComponent },
  { path: 'events', component: EventsComponent },
  { path: 'saved-events', component: SavedEventsComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'event/:id', component: SingleEventComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
