import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignToMeComponent } from './assign-to-me/assign-to-me.component';
import { BoardComponent } from './board/board.component';
import { RecentComponent } from './recent/recent.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'assigntome',
        component:AssignToMeComponent
      },
      {
        path:'board',
        component:BoardComponent
      },
      {
        path:'recent',
        component:RecentComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YourWorkRoutingModule { }
