import { Component, OnInit } from '@angular/core';
import { StandardsService } from 'src/app/Services/standards.service';

@Component({
  selector: 'app-standards',
  templateUrl: './standards.component.html',
  styleUrls: ['./standards.component.css']
})
export class StandardsComponent implements OnInit {
  stand:any;
  constructor( private user:StandardsService) {
    this.user.getstand().subscribe(stand=>{
      console.warn(stand)
      this.stand=stand
    })
   }

  ngOnInit(): void {
  }

}
