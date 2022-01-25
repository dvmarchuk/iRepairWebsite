interface Device{
  deviceName: string,
  deviceImg: string,
}

export interface IphoneInt{
  deviceName: string;
  deviceImg: string;
  repairId: string ;
  repair : Repair[];
  // repairScreenImg: string = '';
  // repairBackGlassImg: string = '';
  // repairRearFrontCameraImg: string = '';
  // repairChargerPortImg: string = '';
  // repairBatteryImg: string = '';
  // repairScreenPrice: number = 0;
  // repairBackGlassPrice: number = 0;
  // repairRearFrontCameraPrice: number = 0;
  // repairChargerPortPrice: number = 0;
  // repairBatteryPrice: number = 0;
  // repairScreenDescription: string = '';
  // repairDeviceTextMessageBody: string = '';
}

export interface Repair{
  repairTitle?: string;
  repairImg?: string;
  repairPrice?: number;
  repairDetails?: string;
}
