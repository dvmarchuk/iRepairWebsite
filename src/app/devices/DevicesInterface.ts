
interface DevicesInterface {
  deviceName?: string,
  deviceImg?: string,
}

export interface IphoneInterface{
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

export interface AndroidPhoneInterface{
  deviceName?: string;
  deviceImg?: string;
  repairId?: string ;
  repair?: Repair[];
}

export interface AndroidTabletInterface{
  deviceName?: string;
  deviceImg?: string;
  repairId?: string ;
  repair?: Repair[];
}

export interface ComputerInterface{
  deviceName?: string;
  deviceImg?: string;
  repairId?: string ;
  repair?: Repair[];
}

export interface WatchInterface{
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
