import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProgramsComponent } from './edit-programs/edit-programs.component';
import { MasterProgramComponent } from './master-program/master-program.component';
import { ProgramsGridComponent } from './programs-grid/programs-grid.component';

const routes: Routes = [
  
    { 
      path:'',component:MasterProgramComponent ,pathMatch:'full',
      children:[
      {
        path:'',
        component:ProgramsGridComponent
      },
              ],
    },
    // { path:'edit',component:EditProgramsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
