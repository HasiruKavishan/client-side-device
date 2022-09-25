import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import { Observable } from 'rxjs';
import {DeviceDataModel} from "../models/device.data.model";
import {API} from "../../configs/api.config";

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor(private httpClient: HttpClient) { }

  getAllDevicesData(): Observable<DeviceDataModel[]> {
    const url = API.device.fetchAllDevicesData;
    return this.httpClient.get<DeviceDataModel[]>(url);
  }

  deleteDeviceData(deviceId: string): Observable<DeviceDataModel[]> {
    const url = API.device.deleteDevice.format([deviceId]);
    return this.httpClient.delete<DeviceDataModel[]>(url);
  }

}
