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
    MatButtonModule
  ],
  providers: [DeviceService, DatePipe]
})
export class DeviceModule {}
