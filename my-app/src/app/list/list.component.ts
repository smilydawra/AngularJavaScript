import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  brews: any;

  constructor(private _http: HttpService) { }

  ngOnInit(): void {
    this._http.getBrewries().subscribe(data => {
      this.brews = data;
      console.log(this.brews);
    });
  }

}
