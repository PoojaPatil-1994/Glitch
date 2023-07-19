import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MasterService } from 'src/app/core/services/master/master.service';

@Component({
  selector: 'app-issue-types',
  templateUrl: './issue-types.component.html',
  styleUrls: ['./issue-types.component.css']
})
export class IssueTypesComponent implements OnInit {

  issueTypeArray: any[] = [];
  issueObj : FormGroup = new FormGroup({
    issueTypeId :new FormControl (0),
    issueType :new FormControl (''),
  })

  initializeForm(){
    this.issueObj == new FormGroup({
      issueTypeId :new FormControl (0),
      issueType :new FormControl (''),
    })
  }
  constructor(private masterSrc: MasterService) {

  }

  ngOnInit(): void {
    this.getAllIssueTypes();
  }

  getAllIssueTypes() {
    this.masterSrc.getAllIssueTypes().subscribe((res: any) => {
      this.issueTypeArray = res.data;
    })
  }

  addNewType() {
    const formData = this.issueObj.value;
    this.masterSrc.addNewType(formData).subscribe((res: any) => {
      if (res.result) {
        alert("save successfully")
        this.initializeForm();
        this.getAllIssueTypes();
      } else {
        alert(res.message)
      }
    })
  }

  reset(){
    this.initializeForm();
  }

  editIssue(obj:any){
    this.issueObj = new FormGroup({
      issueTypeId :new FormControl (obj.issueTypeId),
      issueType :new FormControl (obj.issueType)
    })
  }

  updateIssue(){
    const Data = this.issueObj.value;
    this.masterSrc.updateIssueType(Data).subscribe((res: any) => {
      if (res.result) {
        alert("Update successfully")
        this.initializeForm();
        this.getAllIssueTypes();
      } else {
        alert(res.message)
      }
    })
  }

  deleteIssue(id:number){
    this.masterSrc.deleteIssueTypeById(id).subscribe((res: any) => {
      if (res.result) {
        alert("save successfully")
        this.getAllIssueTypes();
      } else {
        alert(res.message)
      }
    })
  }
}
