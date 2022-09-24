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

  getAllDeviceData(): Observable<DeviceDataModel[]> {
    const url = API.device.getAllDeviceData;
    return this.httpClient.get<DeviceDataModel[]>(url);
  }

}