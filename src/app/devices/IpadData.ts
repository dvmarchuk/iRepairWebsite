import {IpadInterface} from "./DevicesInterface";

export class IpadData{


// : IpadInterface = {
//     deviceName: '',
//     deviceImg: '',
//     repairId: '',
//     repair: [
//       {repairTitle: '', repairDetails: '', repairImg: '', repairPrice: ''}
//     ]
//   }

  // ipadPro112020: IpadInterface = {
  //   deviceName: 'iPad Pro 11 inch 2020',
  //   deviceImg: 'assets/iPad/ipadPro2021.png',
  //   repairId: 'ipadPro112020',
  //   repair: [
  //     {repairTitle: '', repairDetails: '', repairImg: '', repairPrice: ''}
  //   ]
  // }


  ipadAir3: IpadInterface = {
    deviceName: 'iPad Air 3',
    deviceImg: '',
    repairId: 'iPadAir3',
    repair: [
      {repairTitle: 'Screen: ', repairDetails: '', repairImg: '', repairPrice: '$315.00'},
      {repairTitle: 'Battery: ', repairDetails: '', repairImg: '', repairPrice: '$175.00'},
      {repairTitle: 'Repair not listed?', repairDetails: '', repairImg: '', repairPrice: 'Call in!'}

    ]
  }

  ipadAir2: IpadInterface = {
    deviceName: 'iPad Air 2',
    deviceImg: '',
    repairId: 'iPadAir2',
    repair: [
      {repairTitle: 'Screen: ', repairDetails: '', repairImg: '', repairPrice: '$210.00'},
      {repairTitle: 'Battery: ', repairDetails: '', repairImg: '', repairPrice: '$175.00'},
      {repairTitle: 'Repair not listed?', repairDetails: '', repairImg: '', repairPrice: 'Call in!'}

    ]
  }

  ipadAir: IpadInterface = {
    deviceName: 'iPad Air',
    deviceImg: '',
    repairId: 'iPadAir',
    repair: [
      {repairTitle: 'Screen: ', repairDetails: '', repairImg: '', repairPrice: '$95.00'},
      {repairTitle: 'Battery: ', repairDetails: '', repairImg: '', repairPrice: '$95.00'},
      {repairTitle: 'Repair not listed?', repairDetails: '', repairImg: '', repairPrice: 'Call in!'}

    ]
  }

  ipadMini5: IpadInterface = {
    deviceName: 'iPad Mini 5',
    deviceImg: '',
    repairId: 'iPadMini5',
    repair: [
      {repairTitle: 'Screen: ', repairDetails: '', repairImg: '', repairPrice: '$220.00'},
      {repairTitle: 'Battery: ', repairDetails: '', repairImg: '', repairPrice: '$145.00'},
      {repairTitle: 'Repair not listed?', repairDetails: '', repairImg: '', repairPrice: 'Call in!'}

    ]
  }


  ipad9: IpadInterface = {
    deviceName: 'iPad 9',
    deviceImg: '',
    repairId: 'iPad9',
    repair: [
      {repairTitle: 'Screen: ', repairDetails: '', repairImg: '', repairPrice: '$145.00'},
      {repairTitle: 'Battery: ', repairDetails: '', repairImg: '', repairPrice: '$135.00'},
      {repairTitle: 'Repair not listed?', repairDetails: '', repairImg: '', repairPrice: 'Call in!'}

    ]
  }


  ipad8: IpadInterface = {
    deviceName: 'iPad 8',
    deviceImg: '',
    repairId: 'iPad8',
    repair: [
      {repairTitle: 'Screen: ', repairDetails: '', repairImg: '', repairPrice: '$145.00'},
      {repairTitle: 'Battery: ', repairDetails: '', repairImg: '', repairPrice: '$135.00'},
      {repairTitle: 'Repair not listed?', repairDetails: '', repairImg: '', repairPrice: 'Call in!'}

    ]
  }

  ipad7: IpadInterface = {
    deviceName: 'iPad 7',
    deviceImg: '',
    repairId: 'iPad7',
    repair: [
      {repairTitle: 'Screen: ', repairDetails: '', repairImg: '', repairPrice: '$145.00'},
      {repairTitle: 'Battery: ', repairDetails: '', repairImg: '', repairPrice: '$135.00'},
      {repairTitle: 'Repair not listed?', repairDetails: '', repairImg: '', repairPrice: 'Call in!'}

    ]
  }

  ipad6: IpadInterface = {
    deviceName: 'iPad 6',
    deviceImg: '',
    repairId: 'iPad6',
    repair: [
      {repairTitle: 'Screen: ', repairDetails: '', repairImg: '', repairPrice: '$125.00'},
      {repairTitle: 'Battery: ', repairDetails: '', repairImg: '', repairPrice: '$135.00'},
      {repairTitle: 'Repair not listed?', repairDetails: '', repairImg: '', repairPrice: 'Call in!'}

    ]
  }

  ipad5: IpadInterface = {
    deviceName: 'iPad 5',
    deviceImg: '',
    repairId: 'iPad5',
    repair: [
      {repairTitle: 'Screen: ', repairDetails: '', repairImg: '', repairPrice: '$95.00'},
      {repairTitle: 'Battery: ', repairDetails: '', repairImg: '', repairPrice: '$95.00'},
      {repairTitle: 'Repair not listed?', repairDetails: '', repairImg: '', repairPrice: 'Call in!'}
    ]
  }

  ipadOther: IpadInterface = {
    deviceName: 'iPad not listed?',
    deviceImg: 'assets/iPad/ipadPro2021.png',
    repairId: 'iPadOther',
    repair: [
      {repairTitle: 'Contact us for your repairs', repairDetails: 'Due to supply chain and pricing of parts, these repairs are done to order', repairImg: '', repairPrice: 'Call in!'}
    ]
  }

  getDevices(){
    let arr : Array<IpadInterface> = [this.ipadAir3, this.ipadAir2, this.ipadAir, this.ipadMini5, this.ipad9, this.ipad8, this.ipad7, this.ipad6, this.ipad5, this.ipadOther];
    return arr;
  }
}
