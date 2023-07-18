import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterRoutingModule } from './master-routing.module';
import { StatusComponent } from './status/status.component';
import { IssueTypesComponent } from './issue-types/issue-types.component';
import { CoomingSoonComponent } from './cooming-soon/cooming-soon.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    StatusComponent,
    IssueTypesComponent,
    CoomingSoonComponent
  ],
  imports: [
    CommonModule,
    MasterRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class MasterModule { }
