import { Component, OnInit } from '@angular/core';
import { map, pluck } from 'rxjs';
import { ApiDataService } from '../Api Calls/api-data.service';
import { WorkingData } from '../working_data.model';

@Component({
  selector: 'app-programs-grid',
  templateUrl: './programs-grid.component.html',
  styleUrls: ['./programs-grid.component.css']
})
export class ProgramsGridComponent implements OnInit {
  
  public data:any;

  fetching = true;
  
  isactive =true;
  
  activate = true;
  constructor(private apiservice:ApiDataService){}

  ngOnInit() {
      this.apiservice.gettingDataFromApi().pipe(pluck('programs')).subscribe(res=>{
      this.data =res;
      this.fetching = false;
      })
    }

    programStatus(){
      this.activate =!this.activate
    }
}
