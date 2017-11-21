import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  newQuestion: object = {
    text: "",
    opt1: "",
    vote1: 0,
    opt2: "",
    vote2: 0,
    opt3: "",
    vote3: 0,
    opt4: "",
    vote4: 0,
  };
  currentUser: object = { name: "" };

  constructor(private _apiService: ApiService, private _router: Router) { }

  ngOnInit() {
    console.log("loaded dashboard")
    this._apiService.getCurrentUser()
      .then((data) => {
        this.currentUser = data;
        console.log(this.currentUser);
      })
      .catch((error) => {
        console.log(error);
      })
  }
  
  submitQuestion() {
    console.log("submitted new question");
    this._apiService.createQuestion(this.newQuestion)
      .then((data) => {
        console.log("then", data);
        this._router.navigate(['dashboard']);
      })
      .catch((error => {
        console.log("error submitting question");
        console.log("catch", error);
      }))
  }  
}
