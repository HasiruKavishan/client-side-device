import {Component, OnDestroy, OnInit} from '@angular/core';
import {DeviceService} from "../../services/device.service";
import {map, tap, Subject, interval, Observable} from "rxjs";
import {DeviceDataModel} from "../../models/device.data.model";
import {DeviceDtoModel} from "../../models/device.dto.model";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit, OnDestroy {

  unsubscribe: Subject<void> = new Subject();
  deviceDataList!: Observable<DeviceDataModel[]>;
  liveMode: boolean = false;

  constructor(private deviceService: DeviceService) {
  }

  ngOnInit(): void {
    this.fetchAllDevicesData();
  }

  fetchAllDevicesData(deviceDtoModel?: DeviceDtoModel) {
    this.deviceDataList = this.deviceService.getAllDevicesData(deviceDtoModel)
      .pipe(
        takeUntil(this.unsubscribe),
        map((deviceList: DeviceDataModel[]) => deviceList.sort((pre, curr) => new Date(curr.createdDate).getTime() - new Date(pre.createdDate).getTime()))
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

  filterData(deviceDtoModel: DeviceDtoModel) {
    this.fetchAllDevicesData(deviceDtoModel)
  }

  enableLiveMode(liveMode: boolean) {
    this.liveMode = liveMode;
    this.deviceDataList = this.deviceDataList.pipe(
      takeUntil(this.unsubscribe),
      map((deviceList: DeviceDataModel[]) => deviceList.sort((pre, curr) => new Date(curr.createdDate).getTime() - new Date(pre.createdDate).getTime()))
    );

    const subscription = interval(3000)
      .pipe(
        tap(() => {
          if (this.liveMode) {
            this.deviceDataList = this.deviceService.getAllDevicesData()
              .pipe(
                takeUntil(this.unsubscribe),
                map((deviceList: DeviceDataModel[]) => deviceList.sort((pre, curr) => new Date(curr.createdDate).getTime() - new Date(pre.createdDate).getTime())),
                map((deviceList: DeviceDataModel[]) => deviceList.slice(0, 1))
              );
          } else {
            subscription.unsubscribe();
          }

        })
      ).subscribe();
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
