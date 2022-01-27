import {WatchInterface} from "./DevicesInterface";

export class WatchData{


// : IpadInterface = {
//     deviceName: '',
//     deviceImg: '',
//     repairId: '',
//     repair: [
//       {repairTitle: '', repairDetails: '', repairImg: '', repairPrice: ''}
//     ]
//   }

  iWatchSeries7_45: WatchInterface = {
    deviceName: 'iWatch Series 7 45mm',
    deviceImg: '',
    repairId: 'iWatchSeries7_45',
    repair: [
      {repairTitle: 'Screen', repairDetails: 'OLED Screen', repairImg: '', repairPrice: '$335.00'}
    ]
  }


  iWatchSeries7_41: WatchInterface = {
    deviceName: 'iWatch Series 7 41mm',
    deviceImg: '',
    repairId: 'iWatchSeries7_41',
    repair: [
      {repairTitle: 'Screen', repairDetails: 'OLED Screen', repairImg: '', repairPrice: '$365.00'}
    ]
  }


  iWatchSeries6_44: WatchInterface = {
    deviceName: 'iWatch Series 6 44mm',
    deviceImg: '',
    repairId: 'iWatchSeries6_44',
    repair: [
      {repairTitle: 'Screen', repairDetails: 'OLED Screen', repairImg: '', repairPrice: '$195.95'}
    ]
  }

  iWatchSeries6_40: WatchInterface = {
    deviceName: 'iWatch Series 6 40mm',
    deviceImg: '',
    repairId: 'iWatchSeries6_40',//ignore this
    repair: [
      {repairTitle: 'Screen', repairDetails: '', repairImg: '', repairPrice: '$195.95'}
    ]
  }


  iWatchSeriesSE_40: WatchInterface = {
    deviceName: 'iWatch Series SE 40mm',
    deviceImg: '',
    repairId: 'iWatchSeriesSE_40',
    repair: [
      {repairTitle: 'Screen', repairDetails: 'OLED Screen', repairImg: '', repairPrice: '$195.95'}
    ]
  }

  iWatchSeriesS5: WatchInterface = {
    deviceName: 'iWatch Series SE 40mm',
    deviceImg: '',
    repairId: 'iWatchSeriesSE_40',
    repair: [
      {repairTitle: 'Screen', repairDetails: 'OLED Screen', repairImg: '', repairPrice: '$195.95'}
    ]
  }



  getDevices(){
    let arr : Array<WatchInterface> = [this.iWatchSeries7_45, this.iWatchSeries7_41, this.iWatchSeries6_44, this.iWatchSeries6_40];
    return arr;
  }
}
