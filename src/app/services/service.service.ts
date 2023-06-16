import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  constructor(private http : HttpClient) { }

  getData(from: string , to: string){
    return this.http.get(`${environment.baseApi}/${from}/${to}`)
  }
}
