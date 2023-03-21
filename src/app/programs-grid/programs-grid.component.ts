import { Component, OnInit } from '@angular/core';
import { ApiDataService } from '../Api Calls/api-data.service';
import { WorkingData } from '../working_data.model';

@Component({
  selector: 'app-programs-grid',
  templateUrl: './programs-grid.component.html',
  styleUrls: ['./programs-grid.component.css']
})
export class ProgramsGridComponent implements OnInit {
  public data: any[]=[];
  
  constructor(private apiservice:ApiDataService){}

  ngOnInit() {
      this.data = [{name:'118',programNo:'69',programBudget:'$11100',description:'1111 cust'}];
      
      this.apiservice.gettingDataFromApi().subscribe(res=>{
        
        this.data.push("getdata"+res);
        
      })
    }

}
