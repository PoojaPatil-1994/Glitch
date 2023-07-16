import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FiltersRoutingModule } from './filters-routing.module';
import { FilterIssueComponent } from './filter-issue/filter-issue.component';


@NgModule({
  declarations: [
    FilterIssueComponent
  ],
  imports: [
    CommonModule,
    FiltersRoutingModule
  ]
})
export class FiltersModule { }
