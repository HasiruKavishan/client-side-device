import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import { Observable } from 'rxjs';
import {DeviceDataModel} from "../models/device.data.model";
import {API} from "../../configs/api.config";
import {DeviceDtoModel} from "../models/device.dto.model";

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor(private httpClient: HttpClient) { }

  getAllDevicesData(deviceDtoModel?: DeviceDtoModel): Observable<DeviceDataModel[]> {
    let params = this.constructParams(deviceDtoModel);
    const url = API.device.fetchAllDevicesData;
    return this.httpClient.get<DeviceDataModel[]>(url, {params: params});
  }

  deleteDeviceData(deviceId: string): Observable<DeviceDataModel[]> {
    const url = API.device.deleteDevice.format([deviceId]);
    return this.httpClient.delete<DeviceDataModel[]>(url);
  }

  private constructParams(deviceDtoModel?: DeviceDtoModel): HttpParams {
    let params = new HttpParams();
    if (deviceDtoModel?.deviceName) {
      params = params.set('name', String(deviceDtoModel.deviceName))
    }
    if (deviceDtoModel?.deviceType) {
      params = params.set('type', deviceDtoModel.deviceType);
    }
    if (deviceDtoModel?.startDate) {
      params = params.set('startDate', deviceDtoModel.startDate);
    }
    if (deviceDtoModel?.endDate) {
      params = params.set('endDate', deviceDtoModel.endDate);
    }
    return params;
  }

}
