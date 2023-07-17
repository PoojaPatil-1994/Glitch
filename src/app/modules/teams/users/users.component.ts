import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

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

  constructor(private http: HttpClient) {
    this.getAllUsers();
    this.getAllRole();
  }

  getAllUsers() {
    this.http.get("http://onlinetestapi.gerasim.in/api/Glitch2/GetAllUsers").subscribe((res: any) => {
      this.usersArray = res.data;
    })
  }

  getAllRole(){
    this.http.get("http://onlinetestapi.gerasim.in/api/Glitch2/GetAllRoles").subscribe((res: any) => {
      this.roleArray = res.data;
    })
  }

  saveUser(){
    const formData = this.userForm.value;
    this.http.post("http://onlinetestapi.gerasim.in/api/Glitch2/CreateUser",formData).subscribe((res: any) => {
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
    alert("hhh")
    this.http.get("'http://onlinetestapi.gerasim.in/api/Glitch2/GetUserById?id=" +id).subscribe((res:any)=>{
      if(res.result){
        alert("Edit Successfully");
      }
      })
  }

  deleteUser(id:number){
    this.http.get("http://onlinetestapi.gerasim.in/api/Glitch2/DeleteUserById?id=" +id).subscribe((res:any)=>{
      if(res.result){
        alert("Delete Successfully");
        this.getAllUsers();
      }else{
        alert(res.message)
      }
    })
  }
}
