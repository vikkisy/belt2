import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QuestionComponent } from './question/question.component';
import { SurveyComponent } from './survey/survey.component';




const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: LandingComponent,
        children: []
    },
    {
        path: 'dashboard',
        pathMatch: 'full',
        component: DashboardComponent,
        children: []
    },
    {
        path: 'create',
        pathMatch: 'full',
        component: QuestionComponent,
        children: []
    },
    {
        path: 'question/:id',
        pathMatch: 'full',
        component: SurveyComponent,
        children: []
    }



];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }