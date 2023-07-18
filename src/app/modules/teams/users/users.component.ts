import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TeamsService } from 'src/app/core/services/teams/teams.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{

  usersArray: any[] = [];
  roleArray : any[] = [];

  userForm: FormGroup = new FormGroup({
    emailId: new FormControl(),
    password: new FormControl(),
    role: new FormControl(0),
    isActive: new FormControl(),
    technicalStack: new FormControl()
  })

  initializeUserForm() {
    this.userForm = new FormGroup({
      emailId: new FormControl(),
      password: new FormControl(),
      role: new FormControl(0),
      isActive: new FormControl(),
      technicalStack: new FormControl()
    })
  }

  constructor(private http: HttpClient , private teamSrc : TeamsService ) {
    
  }

  ngOnInit(): void {
    this.getAllUsers();
    this.getAllRole();
  }

  getAllUsers() {
    this.teamSrc.getAllUsers().subscribe((res: any) => {
      this.usersArray = res.data;
    })
  }

  getAllRole(){
    this.teamSrc.getAllRole().subscribe((res: any) => {
      this.roleArray = res.data;
    })
  }

  createUser(){
    const formData = this.userForm.value;
    this.teamSrc.createUser(formData).subscribe((res: any) => {
     if(res.result){
      alert("Save Successfully");
      this.getAllUsers();
      this.initializeUserForm();
     }else{
      alert(res.message)
    }
    })
  }

  editUser(id:number){
    this.http.get("http://onlinetestapi.gerasim.in/api/Glitch2/GetUserById?id=" +id).subscribe((res:any)=>{
     this.usersArray = res.data;
    if(res.result){
        alert("Edit Successfully");
      }
      })
  }

  deleteUser(id:number){
    this.teamSrc.deleteUserById(id).subscribe((res:any)=>{
      if(res.result){
        alert("Delete Successfully");
        this.getAllUsers();
      }else{
        alert(res.message)
      }
    })
  }
}
