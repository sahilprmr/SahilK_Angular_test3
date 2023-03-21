import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Form } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiDataService } from '../Api Calls/api-data.service';
import { WorkingData } from '../working_data.model';

@Component({
  selector: 'app-edit-programs',
  templateUrl: './edit-programs.component.html',
  styleUrls: ['./edit-programs.component.css']
})
export class EditProgramsComponent implements OnInit{

  @ViewChild('editform') editform! : ElementRef;
  edit = false;
  
  constructor(private apidataserv:ApiDataService, private http:HttpClient,private route:Router){}
 
  editingprogramdata = {
                          programName:'',
                          programNumber:'',
                          programBudget:'',
                          programDescription:'',
                          isActive:true,
                          canDelete:false,
                          isVirtual:true,
                        }
  
  ngOnInit() {
   this.editingprogramdata = this.apidataserv.fillprogramdata;
   console.log(this.editingprogramdata);
  }

  saveEditedProgram(editedform:WorkingData){
    console.log(editedform);
    this.apidataserv.savingEditedForm(editedform);
  }

  goBack(){
    this.route.navigate(['/']);
  }

}
