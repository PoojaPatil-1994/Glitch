import { Injectable } from '@angular/core';
import { ConstantserviceService } from '../../constant/constantservice.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http : HttpClient,private constSrc : ConstantserviceService) { }
  host: string = this.constSrc.apiCommonPart.apiStartPoint;

  getAllIssueStatus(): Observable<any> {
   return this.http.get(this.host + this.constSrc.apiEndPoint.master.getAllIssueStatus)
  }

  addNewStatus(obj : any): Observable<any> {
    return this.http.post(this.host + this.constSrc.apiEndPoint.master.addNewStatus,obj)
   }

   updateStatus(obj : any): Observable<any> {
    return this.http.post(this.host + this.constSrc.apiEndPoint.master.updateStatus,obj)
   }

   deleteStatusById(id : number): Observable<any> {
    return this.http.get(this.host + this.constSrc.apiEndPoint.master.deleteStatusById+id)
   }

   getAllIssueTypes(): Observable<any> {
    return this.http.get(this.host + this.constSrc.apiEndPoint.master.getAllIssueTypes)
   }

   addNewType(obj : any): Observable<any> {
    return this.http.post(this.host + this.constSrc.apiEndPoint.master.addNewType,obj)
   }

   updateIssueType(obj : any): Observable<any> {
    return this.http.post(this.host + this.constSrc.apiEndPoint.master.updateIssueType,obj)
   }

   deleteIssueTypeById(id : number): Observable<any> {
    return this.http.get(this.host + this.constSrc.apiEndPoint.master.deleteIssueTypeById+id)
   }
}
