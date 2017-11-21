import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  allQuestions: any[];
  searchString: string;
  // showQuestions: 
  constructor(private _apiService: ApiService) { }

  ngOnInit() {
    console.log("loaded dashboard")

    this._apiService.getQuestions()
      .then((data) => {
        console.log("got questions")
        this.allQuestions = data;
      })
      .catch((error) => {
        console.log(error);
      })
  }





}
