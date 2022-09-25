import {DeviceType} from "../enum/device.type.enum";

export interface DeviceDtoModel {
  id?: string;
  deviceName?: string;
  deviceType?: DeviceType,
  startDate?: string;
  endDate?: string;
}
