import { Component, ElementRef, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  private path: string;

  constructor(
    private router: Router
  ) {

  }

  ngOnInit() {
    this.path = this.router.url;
    console.log(this.path);
  }
}
