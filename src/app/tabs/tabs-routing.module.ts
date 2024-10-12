// tabs-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsPage } from './tabs.page';
import { HomePage } from './home/home.component'; // Import the HomePage component
import { JobDetailPage } from './job-detail/job-detail.component'; // Import the JobDetail component

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        component: HomePage, // Use component instead of loadComponent
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'job/:id',
    component: JobDetailPage, // Use component instead of loadComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsRoutingModule {}