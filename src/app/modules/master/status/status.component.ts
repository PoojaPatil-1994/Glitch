import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MasterService } from 'src/app/core/services/master/master.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  statusArray: any[] = [];

  statusForm:FormGroup = new FormGroup( {
    statusId: new FormControl(0),
    status:  new FormControl(''),
    isActive: new FormControl(''),
    orderNo: new FormControl(0)
  })

  initializationForm(){
    this.statusForm = new FormGroup( {
      statusId: new FormControl(0),
      status:  new FormControl(''),
      isActive: new FormControl(''),
      orderNo: new FormControl(0)
    })
  }

  constructor(private masterSrc: MasterService) {

  }

  ngOnInit(): void {
    this.getAllIssueStatus();
  }

  getAllIssueStatus() {
    this.masterSrc.getAllIssueStatus().subscribe((res: any) => {
      this.statusArray = res.data;
    })
  }

  addNewStatus() {
    const obj = this.statusForm.value
    this.masterSrc.addNewStatus(obj).subscribe((res: any) => {
      if (res.result) {
        alert("save Successfully")
        this.getAllIssueStatus();
        this.initializationForm();
      }else{
        alert(res.message)
      }
    })
  }

  editStatus(obj: any){
    this.statusForm = new FormGroup( {
      statusId: new FormControl(obj.statusId),
      status:  new FormControl(obj.status),
      isActive: new FormControl(obj.isActive),
      orderNo: new FormControl(obj.orderNo)
    })
  }

  updateStatus() {
    const obj = this.statusForm.value
    this.masterSrc.updateStatus(obj).subscribe((res: any) => {
      if (res.result) {
        alert("Update Successfully")
        this.getAllIssueStatus();
        this.initializationForm();
      }else{
        alert(res.message)
      }
    })
  }

  deleteStatus(id :any){
    this.masterSrc.deleteStatusById(id).subscribe((res: any) => {
      if (res.result) {
        alert("Delete Successfully")
        this.getAllIssueStatus();
      }else{
        alert(res.message)
      }
    })
  }

}
