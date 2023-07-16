import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewUsersComponent } from './new-users/new-users.component';
import { ProjectAssignmentComponent } from './project-assignment/project-assignment.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'newusers',
        component:NewUsersComponent
      },
      {
        path:'projectassign',
        component:ProjectAssignmentComponent
      },
      {
        path:'users',
        component:UsersComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamsRoutingModule { }
