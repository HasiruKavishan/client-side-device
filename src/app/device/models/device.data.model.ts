import {DeviceType} from "../enum/device.type.enum";

export interface DeviceDataModel {
  id: string;
  deviceName: string;
  reading: number;
  deviceType: DeviceType,
  createdDate: Date;
}
