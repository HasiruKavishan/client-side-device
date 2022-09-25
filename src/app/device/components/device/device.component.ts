import { Component, OnInit } from '@angular/core';
import {DeviceService} from "../../services/device.service";
import {map, tap} from "rxjs/operators";
import {Observable} from "rxjs";
import {DeviceDataModel} from "../../models/device.data.model";

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {

  deviceDataList!: Observable<DeviceDataModel[]>;

  constructor(private deviceService: DeviceService) { }

  ngOnInit(): void {
    this.fetchAllDevicesData();
  }

  fetchAllDevicesData() {
    this.deviceDataList = this.deviceService.getAllDevicesData()
      .pipe(
        map(deviceDataList => deviceDataList)
      );
  }

  removeDevice(deviceId: string) {
    this.deviceService.deleteDeviceData(deviceId).pipe(
      tap(res => {
        if (res) {
          console.log(res);
        }
      })
    )
  }

}
