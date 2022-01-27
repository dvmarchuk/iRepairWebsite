import {AndroidPhoneInterface} from "./DevicesInterface";

export class AndroidData{


// : IpadInterface = {
//     deviceName: '',
//     deviceImg: '',
//     repairId: '',
//     repair: [
//       {repairTitle: '', repairDetails: '', repairImg: '', repairPrice: ''}
//     ]
//   }

  samsungS20: AndroidPhoneInterface = {
    deviceName: '',
    deviceImg: '',
    repairId: '',
    repair: [
      {repairTitle: '', repairDetails: '', repairImg: '', repairPrice: ''}
    ]
  }

  getDevices(){
    let arr : Array<AndroidPhoneInterface> = [this.samsungS20];
    return arr;
  }
}
