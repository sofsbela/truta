import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from './history/history.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MainComponent } from './menu/main/main.component';
import { MenuComponent } from './menu/menu.component';
import { TeamComponent } from './team/team.component';
import { WineComponent } from './menu/wine/wine.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'team', component: TeamComponent },
  {
    path: 'menu/main',
    component: MainComponent,
  },
  {
    path: 'menu/wine',
    component: WineComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
