import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

  constructor(private _apiService: ApiService, private _route: ActivatedRoute, private _router: Router) { }
  thisQiD: string;
  currentQuestion: object;

  ngOnInit() {

    this._route.paramMap.subscribe(params => {
      this.thisQiD = params.get('id');
      console.log(this.thisQiD);
    })

    this._apiService.currentQuestion(this.thisQiD)
      .then((data) => {
        console.log("found question", data);
        this.currentQuestion = data;
      })
      .catch((error) => {
        console.log(error);
      })
  }

  vote1(qid) {
    console.log("in componenet");
    this._apiService.vote1(qid)
    .then((data) => {
      console.log("then", data);
      this._router.navigate(['/question/'+qid]);
    })
    .catch((error) => {
      console.log("catch", error);
    })
    window.location.reload();
  }
  vote2(qid) {
    console.log("in componenet");
    this._apiService.vote2(qid)
      .then((data) => {
        console.log("then", data);
        this._router.navigate(['/question/' + qid]);
      })
      .catch((error) => {
        console.log("catch", error);
      })
      window.location.reload();
    }
  vote3(qid) {
      console.log("in componenet");
      this._apiService.vote3(qid)
        .then((data) => {
          console.log("then", data);
          
          this._router.navigate(['/question/' + qid]);
        })
        .catch((error) => {
          console.log("catch", error);
        })
    window.location.reload();
      }
      vote4(qid) {
        console.log("in componenet");
        this._apiService.vote4(qid)
          .then((data) => {
            console.log("then", data);
          })
          .catch((error) => {
            console.log("catch", error);
          })
        window.location.reload();
        }


  

}
