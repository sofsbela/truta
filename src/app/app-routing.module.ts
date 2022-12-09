import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from './history/history.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MainComponent } from './menu/main/main.component';
import { MenuComponent } from './menu/menu.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'team', component: TeamComponent },
  {
    path: 'menu/main',
    component: MainComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
