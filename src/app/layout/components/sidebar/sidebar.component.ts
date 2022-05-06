import { Component, OnInit } from '@angular/core';
import { RouterLinkActive, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  expanded: boolean = false
  expanded2: boolean = false

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {

  }
  expand():void {
    this.expanded = !this.expanded
  }
  expand2():void {
    this.expanded2 = !this.expanded2
  }

}
