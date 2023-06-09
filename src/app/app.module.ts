import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MasterProgramComponent } from './master-program/master-program.component';
import { ProgramsGridComponent } from './programs-grid/programs-grid.component';
import { HttpClientModule } from '@angular/common/http';
import { EditProgramsComponent } from './edit-programs/edit-programs.component';
import {Form, FormsModule } from '@angular/forms';
import { FilterService} from '@syncfusion/ej2-angular-grids';

@NgModule({
  declarations: [
    AppComponent,
    MasterProgramComponent,
    ProgramsGridComponent,
    EditProgramsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GridModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [FilterService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
