import { NgModule } from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';

import { DeviceRoutingModule } from './device-routing.module';
import { DeviceComponent } from './components/device/device.component';
import { PlotViewComponent } from './components/plot-view/plot-view.component';
import { TableViewComponent } from './components/table-view/table-view.component';
import { FilterComponent } from './components/filter/filter.component';
import {NgChartsModule} from "ng2-charts";
import {DeviceService} from "./services/device.service";
import {HttpClientModule} from "@angular/common/http";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";


@NgModule({
  declarations: [
    DeviceComponent,
    PlotViewComponent,
    TableViewComponent,
    FilterComponent
  ],
  imports: [
    CommonModule,
    DeviceRoutingModule,
    NgChartsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule
  ],
  providers: [DeviceService, DatePipe]
})
export class DeviceModule {}
