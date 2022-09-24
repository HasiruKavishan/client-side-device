import {Component, Input, OnInit} from '@angular/core';
import { ChartConfiguration, ChartOptions } from "chart.js";
import {Observable} from "rxjs";
import {DeviceDataModel} from "../../models/device.data.model";
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-plot-view',
  templateUrl: './plot-view.component.html',
  styleUrls: ['./plot-view.component.scss']
})

export class PlotViewComponent implements OnInit {

  @Input('deviceDataList') set setDeviceData(deviceDataList: Observable<DeviceDataModel[]>) {
    deviceDataList.pipe(
      tap(res => {
        console.log(res);
      })
    ).subscribe();
  }
  title = 'ng2-charts-demo';

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July'
    ],
    datasets: [
      {
        data: [ 65, 59, 80, 81, 56, 55, 40 ],
        label: 'Series A',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba(255,0,0,0.3)'
      }
    ]
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false
  };
  public lineChartLegend = true;

  constructor() {
  }

  ngOnInit() {
  }

}
