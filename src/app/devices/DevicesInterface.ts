
interface DevicesInterface {
  deviceName?: string,
  deviceImg?: string,
}

export interface IphoneInt{
  deviceName?: string;
  deviceImg?: string;
  repairId?: string ;
  repair?: Repair[];
}

export interface IpadInterface{
  deviceName?: string;
  deviceImg?: string;
  repairId?: string ;
  repair?: Repair[];
}

export interface Repair{
  repairTitle?: string;
  repairImg?: string;
  repairPrice?: string;
  repairDetails?: string;
}
