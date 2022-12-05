import { Component, OnInit } from '@angular/core';
import { ByCountryService } from 'src/app/Services/by-country.service';
@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: ['./by-country.component.css']
})
export class ByCountryComponent implements OnInit {

  data:any;
  constructor( private user:ByCountryService) {
  this.user.getbytag().subscribe(data=>{
   console.warn(data)
   this.data=data
  })
  }
  ngOnInit(): void {
  }

}
