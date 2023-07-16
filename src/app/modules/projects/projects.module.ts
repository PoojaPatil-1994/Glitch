import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { LatestProjectComponent } from './latest-project/latest-project.component';
import { AllProjectsComponent } from './all-projects/all-projects.component';
import { CreateNewProjectComponent } from './create-new-project/create-new-project.component';


@NgModule({
  declarations: [
    LatestProjectComponent,
    AllProjectsComponent,
    CreateNewProjectComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule
  ]
})
export class ProjectsModule { }
