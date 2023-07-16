import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YourWorkRoutingModule } from './your-work-routing.module';
import { AssignToMeComponent } from './assign-to-me/assign-to-me.component';
import { RecentComponent } from './recent/recent.component';
import { BoardComponent } from './board/board.component';


@NgModule({
  declarations: [
    AssignToMeComponent,
    RecentComponent,
    BoardComponent
  ],
  imports: [
    CommonModule,
    YourWorkRoutingModule
  ]
})
export class YourWorkModule { }
