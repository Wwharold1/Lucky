import { Component, OnInit } from '@angular/core';
import { animateText, onSideNavChange } from '../../constants/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [onSideNavChange, animateText]
})
export class NavbarComponent {

  isExpanded :boolean = false;
  showText   :boolean = false
  expandGroup:boolean = false
  permisos
  showFiller = false;
  constructor(
  ) { 
  }

  onSidenavToggle() {
    this.isExpanded = !this.isExpanded;
    setTimeout(() => {
      this.showText = this.isExpanded
    }, 200);
  }

}
