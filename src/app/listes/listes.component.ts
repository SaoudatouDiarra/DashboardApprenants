import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApprenantsService } from '../apprenants.service';

@Component({
  selector: 'app-listes',
  templateUrl: './listes.component.html',
  styleUrls: ['./listes.component.css']
})
export class ListesComponent implements OnInit {
  apprenant: any;

  constructor(private app: ApprenantsService, private http: HttpClient) { }

  ngOnInit(): void {
    this.app.listerApprenant().subscribe(aps =>{
      console.log(aps);
      this.apprenant = aps;
    })
  }

}
