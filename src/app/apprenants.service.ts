import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


const httpOptions = { Headers:new HttpHeaders({'content-type':'application/json'})

};

@Injectable({
  providedIn: 'root'
})
export class ApprenantsService {
  apiURL:string= 'http://localhost:8083/apprenants';


  constructor(private http : HttpClient) {
  }
  listerApprenant(){
    return this.http.get(this.apiURL+'/ListeApprenants');
  }
}
