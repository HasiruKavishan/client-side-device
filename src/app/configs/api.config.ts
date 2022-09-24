import {environment} from "../../environments/environment";

export const BASE = environment.colomboLink.api;
const DEVICE = `${BASE}/api/device`;

type StringFormatter = (urlParams: string[], queryParams?: Map<string, string | number | boolean>) => string;
export const formatter = (apiString: string): { format: StringFormatter } => {
  const format = (urlParams: string[]): string => {
    // process url params
    let url = urlParams.reduce((prev: string, param: string, index: number) => {
      prev = prev.replace(`{${index}}`, param);
      return prev;
    }, apiString);

    return url;
  };
  return {format};
};
export const API = {
  device: {
    getAllDeviceData: `${DEVICE}/get-all`
  }
};
