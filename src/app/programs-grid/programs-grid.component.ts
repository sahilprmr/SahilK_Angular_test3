import { Component,OnInit } from '@angular/core';
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
  
  status = this.apiservice.programStatus;
  
  Ppopup=this.apiservice.popup;

  constructor(private apiservice:ApiDataService, private route:Router){}

  ngOnInit() {
      this.apiservice.gettingDataFromApi().pipe(pluck('programs'),).subscribe(res=>{
      this.data =res;
      this.fetching = false;
      })
    }
    editProgramBtnClicked(programdata:any){
      this.apiservice.fillprogramdata= programdata;
      this.apiservice.popup.next(true);
    }
    activate(){
      this.apiservice.programStatus.next(true);
    }
    deactivate(){
      this.apiservice.programStatus.next(false);
    }
    closepopup(){
    this.apiservice.popup.next(false)
    }
}
