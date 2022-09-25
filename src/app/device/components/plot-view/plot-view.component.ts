import {Component, Input, OnInit} from '@angular/core';
import { ChartConfiguration, ChartOptions } from "chart.js";
import {Observable} from "rxjs";
import {DeviceDataModel} from "../../models/device.data.model";
import {tap} from "rxjs/operators";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-plot-view',
  templateUrl: './plot-view.component.html',
  styleUrls: ['./plot-view.component.scss']
})

export class PlotViewComponent implements OnInit {

  lineChartData!: ChartConfiguration<'line'>['data'];

  @Input('deviceDataList') set setDeviceData(deviceDataList: Observable<DeviceDataModel[]>) {
    deviceDataList.pipe(
      tap((deviceList: DeviceDataModel[]) => {
        const labels = deviceList.map((device: DeviceDataModel) => {
          return this.datePipe.transform(device.createdDate, 'medium')
        });

        const firstDeviceReadings = deviceList.filter((device: DeviceDataModel) => device.deviceName === 'TMP_SEN_001')
          .map((device: DeviceDataModel) => device.reading);

        const secondDeviceReadings = deviceList.filter((device: DeviceDataModel) => device.deviceName === 'TMP_SEN_002')
          .map((device: DeviceDataModel) => device.reading);

        this.lineChartData = {
          labels,
          datasets: [
            {data: firstDeviceReadings, label:'Series A', fill: true, tension:0.5, borderColor:'rgb(75, 192, 192)', backgroundColor: 'rgba(255,0,0,0.3)'},
            {data: secondDeviceReadings, label:'Series B', fill: true, tension:0.5, borderColor:'yellow', backgroundColor: 'rgba(250,0,0,0.2)'},
          ]
        };
      })
    ).subscribe();
  }

  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false
  };
  public lineChartLegend = true;

  constructor(private datePipe: DatePipe) {
  }

  ngOnInit() {
  }

}
