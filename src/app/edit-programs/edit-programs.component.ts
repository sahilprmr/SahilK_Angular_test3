import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
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

  constructor(private apidataserv:ApiDataService, private http:HttpClient,private route:Router){}
 
  editingprogramdata = {
                          programName:'',
                          programNumber:'',
                          programBudget:0,
                          programDescription:'',
                          isActive:true,
                          canDelete:false,
                          isVirtual:true,
                          programID:''
                        }
  
  ngOnInit() {
                this.editingprogramdata = this.apidataserv.fillprogramdata;
  }

  saveEditedProgram(editedform:WorkingData,programID:string){
    editedform.programID=programID;
      this.apidataserv.savingEditedForm(editedform,programID);
    alert('Data Edited Succesfully!')
      this.apidataserv.popup.next(false);
  }
  closepopup(){
      this.apidataserv.popup.next(false);
  }
}
