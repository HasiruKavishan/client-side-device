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
    HttpClientModule
  ],
  providers: [DeviceService, DatePipe]
})
export class DeviceModule {}
