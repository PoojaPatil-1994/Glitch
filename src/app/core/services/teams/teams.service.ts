import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConstantserviceService } from '../../constant/constantservice.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor(private http: HttpClient, private constantSrc: ConstantserviceService) { }

  host: string = this.constantSrc.apiCommonPart.apiStartPoint;

  getAllUsers(): Observable<any> {
    return this.http.get(this.host + this.constantSrc.apiEndPoint.teams.getAllUsers)
  }

  getAllRole(): Observable<any> {
    return this.http.get(this.host + this.constantSrc.apiEndPoint.teams.getAllRole)
  }

  createUser(obj: any): Observable<any> {
    return this.http.post(this.host + this.constantSrc.apiEndPoint.teams.createUser, obj)
  }

  deleteUserById(id: number): Observable<any> {
    return this.http.get(this.host + this.constantSrc.apiEndPoint.teams.deleteUserById + id)
  }
}
