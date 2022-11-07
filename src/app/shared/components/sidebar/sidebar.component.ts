import { Component, OnInit } from '@angular/core';

import { menu } from './sidebar.data';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  public isOpen = false;
  public menuItems = menu;

  constructor() {}

  ngOnInit(): void {}
}
