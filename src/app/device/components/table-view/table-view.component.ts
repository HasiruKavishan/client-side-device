import {AfterViewInit, Component, Input, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {Observable, tap} from "rxjs";
import {DeviceDataModel} from "../../models/device.data.model";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent implements AfterViewInit {

  constructor(private datePipe: DatePipe) {}


  displayedColumns: string[] = ['deviceName', 'reading', 'deviceType', 'createdDate'];
  dataSource!: MatTableDataSource<DeviceDataModel>;

  @ViewChild(MatPaginator) paginator:any = MatPaginator;

  @Input('deviceDataList') set setDeviceDataList(deviceDataList: Observable<DeviceDataModel[]>) {
    deviceDataList.pipe(
      tap((deviceList: DeviceDataModel[]) => {{
        const dataList = deviceList.map((device: DeviceDataModel) => {
          device.reading = +device.reading.toFixed(2);
          return device;
        });
        this.dataSource = new MatTableDataSource(dataList)
      }})
    ).subscribe();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator!;
  }

}
