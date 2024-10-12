import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TabsPage } from './tabs.page';
import { TabsRoutingModule } from './tabs-routing.module';
import { HomePage } from './home/home.component';
import { JobDetailPage } from './job-detail/job-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    
    TabsRoutingModule
   
  ],
  declarations: [
    TabsPage,
    HomePage,
    JobDetailPage
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TabsPageModule {}