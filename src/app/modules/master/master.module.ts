import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterRoutingModule } from './master-routing.module';
import { StatusComponent } from './status/status.component';
import { IssueTypesComponent } from './issue-types/issue-types.component';
import { CoomingSoonComponent } from './cooming-soon/cooming-soon.component';


@NgModule({
  declarations: [
    StatusComponent,
    IssueTypesComponent,
    CoomingSoonComponent
  ],
  imports: [
    CommonModule,
    MasterRoutingModule
  ]
})
export class MasterModule { }
