import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilterIssueComponent } from './filter-issue/filter-issue.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'filterissue',
        component:FilterIssueComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FiltersRoutingModule { }
