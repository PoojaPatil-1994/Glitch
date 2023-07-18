import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConstantserviceService } from '../constant/constantservice.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlitchserviceService {

  constructor(private http : HttpClient, private constantSrc : ConstantserviceService) { }



}
