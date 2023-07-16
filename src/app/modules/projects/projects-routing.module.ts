import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProjectsComponent } from './all-projects/all-projects.component';
import { CreateNewProjectComponent } from './create-new-project/create-new-project.component';
import { LatestProjectComponent } from './latest-project/latest-project.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'allprojects',
        component:AllProjectsComponent
      },
      {
        path:'createnewproject',
        component:CreateNewProjectComponent
      },
      {
        path:'latestproject',
        component:LatestProjectComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
