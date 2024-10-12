import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { chatboxEllipsesOutline, heartOutline, homeOutline, personOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage  {
  selectedTab: string = 'home'; // Default selected tab

  constructor(private router: Router) { 
    addIcons({ homeOutline, personOutline, heartOutline, chatboxEllipsesOutline });
  }

  

  onTabChange(tab: string) {
    this.selectedTab = tab;
    this.router.navigate([`/tabs/${tab}`]); // Route to the selected tab
  }
}