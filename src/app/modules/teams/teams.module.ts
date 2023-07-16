import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamsRoutingModule } from './teams-routing.module';
import { UsersComponent } from './users/users.component';
import { ProjectAssignmentComponent } from './project-assignment/project-assignment.component';
import { NewUsersComponent } from './new-users/new-users.component';


@NgModule({
  declarations: [
    UsersComponent,
    ProjectAssignmentComponent,
    NewUsersComponent
  ],
  imports: [
    CommonModule,
    TeamsRoutingModule
  ]
})
export class TeamsModule { }
