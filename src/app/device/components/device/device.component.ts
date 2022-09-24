import { Component, OnInit } from '@angular/core';
import {DeviceService} from "../../services/device.service";
import {map, tap} from "rxjs/operators";
import {Observable} from "rxjs";

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {

  deviceData!: Observable<any>;

  constructor(private deviceService: DeviceService) { }

  ngOnInit(): void {
    this.deviceData = this.deviceService.getAllDeviceData()
      .pipe(
        map(deviceData => deviceData)
      );
  }

}
