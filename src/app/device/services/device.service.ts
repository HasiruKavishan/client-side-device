import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor(private httpClient: HttpClient) { }

  getAllDeviceData(deviceId?: string, reading?: number, startDateTime?: Date, endDateTime?: Date): Observable<any> {

    let params = new HttpParams();

    if(deviceId != undefined){
      params = params.append('deviceId',deviceId)
    }

    if(reading != undefined){
      params = params.append('reading', reading)
    }

    if(startDateTime != undefined && endDateTime != undefined){
      params = params.append('startDateTime',startDateTime?.toString()),
        params = params.append('endDateTime',endDateTime?.toString())
    }

    console.log(params)

    return this.httpClient.get('http://localhost:8088/api/device/get-all');

  }

}
