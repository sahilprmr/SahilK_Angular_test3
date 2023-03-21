import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { load } from '@syncfusion/ej2-angular-grids';
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
  
  status =true;
  
  constructor(private apiservice:ApiDataService, private route:Router){}

  ngOnInit() {
      this.apiservice.gettingDataFromApi().pipe(pluck('programs'),).subscribe(res=>{
      this.data =res;
      this.fetching = false;
      })
    }

    editProgramBtnClicked(programdata:any){
      console.log(programdata);
      this.apiservice.fillprogramdata= programdata;
      this.apiservice.addingEditedDataToApi(programdata,programdata.programID);
      this.route.navigate(['edit']);      
    }
    activate(){
      this.status = !this.status;
    }
    deactivate(){
      this.status = !this.status;
    }
}
