import { Component, OnInit } from '@angular/core';
import { MasterService } from 'src/app/core/services/master/master.service';
import { TeamsService } from 'src/app/core/services/teams/teams.service';

@Component({
  selector: 'app-filter-issue',
  templateUrl: './filter-issue.component.html',
  styleUrls: ['./filter-issue.component.css']
})
export class FilterIssueComponent implements OnInit {
  projectList: any[] = [];
  issueTypeList: any[] = [];
  issueTypeStatus: any[] = [];
  userList: any[] = [];
  issueFilterList: any[] = [];
  issueFilterListObj: any = {
    "reporter": 0,
    "assignedTo": 0,
    "statusId": 0,
    "projectId": 0,
    "issueTypeId": 0,
    "searchText": ""
  }

  constructor(private teamSrc: TeamsService, private masterSrc: MasterService) {

  }

  ngOnInit(): void {
    this.getAllProject();
    this.getAllIssueType();
    this.getAllIssueStatus();
    this.getAllUserProject();
    this.getIssuesByFilter()
  }
  getAllProject() {
    this.teamSrc.getAllProject().subscribe((res: any) => {
      this.projectList = res.data;
    })
  }

  getAllIssueType() {
    this.masterSrc.getAllIssueTypes().subscribe((res: any) => {
      this.issueTypeList = res.data;
    })
  }

  getAllIssueStatus() {
    this.masterSrc.getAllIssueStatus().subscribe((res: any) => {
      this.issueTypeStatus = res.data;
    })
  }

  getAllUserProject() {
    this.teamSrc.getAllProjectUsers().subscribe((res: any) => {
      this.userList = res.data;
    })
  }

  getIssuesByFilter() {
    this.teamSrc.getIssuesByFilter(this.issueFilterListObj).subscribe((res: any) => {
      this.issueFilterList = res.data;
    })
  }

}
