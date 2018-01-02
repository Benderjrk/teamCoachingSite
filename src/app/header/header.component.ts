import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  isCollapsed = true;

  constructor() { }

  ngOnInit() {
  }
  topScroll(){
    window.scrollTo(0, 0);
  }


}
