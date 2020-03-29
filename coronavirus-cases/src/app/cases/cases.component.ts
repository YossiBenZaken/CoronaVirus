import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Cases } from '../cases';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.scss']
})
export class CasesComponent implements OnInit {
  displayedColumns: string[] = ['name','age','status'];
  data: Cases[] = [];
  isLoadingResults = true;
  constructor(private _api: ApiService) { }

  ngOnInit(): void {
    this._api.getCases().subscribe((res: Cases[]) => {
      this.data = res;
      console.log(this.data);
      this.isLoadingResults = false;
    },err => {
      console.log(err);
      this.isLoadingResults = false;
    })
  }

}
