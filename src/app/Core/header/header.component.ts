import { Component, OnInit,Input,OnChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnChanges {
  @Input() sidenavState :any;
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges() {
   console.log(this.sidenavState,"this.sidenavState")
  }

}
