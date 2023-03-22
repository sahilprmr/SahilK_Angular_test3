import { Component, Input, OnInit, Output } from '@angular/core';
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
  
  Ppopup=this.apiservice.popup;

  constructor(private apiservice:ApiDataService, private route:Router){}

  ngOnInit() {
      this.apiservice.gettingDataFromApi().pipe(pluck('programs'),).subscribe(res=>{
      this.data =res;
      this.fetching = false;
      })
    }
    putdata =[{
                  message:'',
                  programdata:this.apiservice.fillprogramdata,
                  success:''
                }]

    editProgramBtnClicked(programdata:any){
      console.log(programdata);      
      this.apiservice.fillprogramdata= programdata;
      console.log(this.apiservice.fillprogramdata);

      this.apiservice.addingEditedDataToApi(programdata,programdata.programID);

      this.route.navigate(['edit']); 
      this.apiservice.popup.next(true);
    }
    activate(){
      this.status = !this.status;
    }
    deactivate(){
      this.status = !this.status;
    }
    closepopup(){
    this.apiservice.popup.next(false)
    }
}
