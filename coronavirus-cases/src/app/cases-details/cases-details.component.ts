import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Cases } from '../cases';

@Component({
  selector: 'app-cases-details',
  templateUrl: './cases-details.component.html',
  styleUrls: ['./cases-details.component.scss']
})
export class CasesDetailsComponent implements OnInit {
  cases: Cases = {_id: '', name: '',gender: '',age:null,address: '',city: '',country: '',status: '', updated: null};
  isLoadingResults = true;
  constructor(private _route: ActivatedRoute, private _api: ApiService, private _router: Router) { }

  ngOnInit(): void {
    this.getCasesDetails(this._route.snapshot.params.id);
  }
  getCasesDetails(id: string) {
    this._api.getCasesById(id).subscribe((data: Cases) => {
      this.cases = data;
      console.log(this.cases);
      this.isLoadingResults = false;
    });
  }
  deleteCases(id: string) {
    this.isLoadingResults = true;
    this._api.deleteCases(id).subscribe((res: Cases) => {
      this.isLoadingResults = false;
      this._router.navigate(['/cases']);
    },err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }
}
