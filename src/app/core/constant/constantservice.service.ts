import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantserviceService {

  constructor() { }

  apiCommonPart: any = {
    apiStartPoint: "http://onlinetestapi.gerasim.in/api/Glitch2/"
  }

  apiEndPoint: any = {
    teams: {
      getAllUsers: 'GetAllUsers',
      getAllRole: 'GetAllRoles',
      createUser: 'CreateUser',
      deleteUserById: 'Glitch2/DeleteUserById?id=',
      getAllProjectUsers : 'GetAllProjectUsers',
      getAllProject : 'GetAllProject'
    },
    
    master :{
      getAllIssueStatus : 'GetAllIssueStatus',
      addNewStatus : 'AddNewStatus',
      updateStatus : 'UpdateStatus',
      deleteStatusById : 'DeleteStatusById?id=',
      getAllIssueTypes : 'GetAllIssueTypes',
      addNewType : 'AddNewType',
      updateIssueType : 'UpdateIssueType',
      deleteIssueTypeById: 'DeleteIssueTypeById?id='
    }
  }

}
