import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TeamsService } from 'src/app/core/services/teams/teams.service';

@Component({
  selector: 'app-project-assignment',
  templateUrl: './project-assignment.component.html',
  styleUrls: ['./project-assignment.component.css']
})
export class ProjectAssignmentComponent implements OnInit {

  projectArray: any[] = [];
  projectList: any[] = [];
  usersArray: any[] = [];
  roleArray: any[] = [];
  tableData: any[] = [];

  projectForm: FormGroup = new FormGroup({
    userId: new FormControl(),
    userEmail: new FormControl(),
    projectName: new FormControl(),
    projectUserId: new FormControl(),
    roleInProject: new FormControl(),
    addedDate: new FormControl(),
    isActive: new FormControl(),
    technicalStack: new FormControl(),
  })

  initializeForm() {
    this.projectForm = new FormGroup({
      userId: new FormControl(),
      userEmail: new FormControl(),
      projectName: new FormControl(),
      projectUserId: new FormControl(),
      roleInProject: new FormControl(),
      addedDate: new FormControl(),
      isActive: new FormControl(),
      technicalStack: new FormControl(),
    })

  }

  constructor(private teamSrc: TeamsService) {

  }

  ngOnInit(): void {
    this.getAllUserProject();
    this.getAllUsers();
    this.getAllProject();
    this.getAllRole();
  }

  getAllUserProject() {
    this.teamSrc.getAllProjectUsers().subscribe((res: any) => {
      this.projectArray = res.data;
    })
  }

  getAllProject() {
    this.teamSrc.getAllProject().subscribe((res: any) => {
      this.projectList = res.data;
    })
  }

  getAllUsers() {
    this.teamSrc.getAllUsers().subscribe((res: any) => {
      this.usersArray = res.data;
    })
  }

  getAllRole() {
    this.teamSrc.getAllRole().subscribe((res: any) => {
      this.roleArray = res.data;
    })
  }

  AddData() {
    let data = this.projectForm.value;
    this.tableData.push(data)
  }

  deleteUser(obj: any) {

  }
}
