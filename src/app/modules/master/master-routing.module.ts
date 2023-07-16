import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoomingSoonComponent } from './cooming-soon/cooming-soon.component';
import { IssueTypesComponent } from './issue-types/issue-types.component';
import { StatusComponent } from './status/status.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'commingsoon',
        component:CoomingSoonComponent
      },
      {
        path:'issuetype',
        component:IssueTypesComponent
      },
      {
        path:'status',
        component:StatusComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
