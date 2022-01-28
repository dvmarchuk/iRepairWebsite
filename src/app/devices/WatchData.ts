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
    deviceImg: 'assets/watch/iwatch5.png',
    repairId: 'iWatchSeries7_45',
    repair: [
      {repairTitle: 'Screen', repairDetails: 'OLED Screen', repairImg: 'assets/watch/screen.png', repairPrice: '$335.00'},
      {repairTitle: 'Other repairs?', repairDetails: '', repairImg: 'assets/watch/i.png', repairPrice: ''}

    ]
  }


  iWatchSeries7_41: WatchInterface = {
    deviceName: 'iWatch Series 7 41mm',
    deviceImg: 'assets/watch/appleWatch.png',
    repairId: 'iWatchSeries7_41',
    repair: [
      {repairTitle: 'Screen', repairDetails: 'OLED Screen', repairImg: 'assets/watch/screen.png', repairPrice: '$365.00'},
      {repairTitle: 'Other repairs?', repairDetails: '', repairImg: 'assets/watch/i.png', repairPrice: ''}

    ]
  }


  iWatchSeries6_44: WatchInterface = {
    deviceName: 'iWatch Series 6 44mm',
    deviceImg: 'assets/watch/iwatch6.png',
    repairId: 'iWatchSeries6_44',
    repair: [
      {repairTitle: 'Screen', repairDetails: 'OLED Screen', repairImg: 'assets/watch/screen.png', repairPrice: '$195.95'},
      {repairTitle: 'Other repairs?', repairDetails: '', repairImg: 'assets/watch/i.png', repairPrice: ''}

    ]
  }

  iWatchSeries6_40: WatchInterface = {
    deviceName: 'iWatch Series 6 40mm',
    deviceImg: 'assets/watch/appleWatch.png',
    repairId: 'iWatchSeries6_40',
    repair: [
      {repairTitle: 'Screen', repairDetails: 'OLED Screen', repairImg: 'assets/watch/screen.png', repairPrice: '$195.95'},
      {repairTitle: 'Other repairs?', repairDetails: '', repairImg: 'assets/watch/i.png', repairPrice: ''}

    ]
  }


  iWatchSeriesSE_40: WatchInterface = {
    deviceName: 'iWatch Series SE 40mm',
    deviceImg: 'assets/watch/iwatch6-2.png',
    repairId: 'iWatchSeriesSE_40',
    repair: [
      {repairTitle: 'Screen', repairDetails: 'OLED Screen', repairImg: 'assets/watch/screen.png', repairPrice: '$195.95'},
      {repairTitle: 'Other repairs?', repairDetails: '', repairImg: 'assets/watch/i.png', repairPrice: ''}

    ]
  }

  iWatchSeriesS5_44: WatchInterface = {
    deviceName: 'iWatch Series 5 44mm',
    deviceImg: 'assets/watch/iwatch4-2.png',
    repairId: 'iWatchSeriesS5_44',
    repair: [
      {repairTitle: 'Screen', repairDetails: 'OLED Screen', repairImg: 'assets/watch/screen.png', repairPrice: '$214.95'},
      {repairTitle: 'Other repairs?', repairDetails: '', repairImg: 'assets/watch/i.png', repairPrice: ''}

    ]
  }

  iWatchSeriesS5_40: WatchInterface = {
    deviceName: 'iWatch Series 5 40mm',
    deviceImg: 'assets/watch/iwatch2.png',
    repairId: 'iWatchSeriesS5_40',
    repair: [
      {repairTitle: 'Screen', repairDetails: 'OLED Screen', repairImg: 'assets/watch/screen.png', repairPrice: '$195.95'},
      {repairTitle: 'Other repairs?', repairDetails: '', repairImg: 'assets/watch/i.png', repairPrice: ''}

    ]
  }

  iWatchSeriesS4_44: WatchInterface = {
    deviceName: 'iWatch Series 4 44mm',
    deviceImg: 'assets/watch/iwatch4.png',
    repairId: 'iWatchSeriesS4_44',
    repair: [
      {repairTitle: 'Screen', repairDetails: 'OLED Screen', repairImg: 'assets/watch/screen.png', repairPrice: '$264.95'},
      {repairTitle: 'Other repairs?', repairDetails: '', repairImg: 'assets/watch/i.png', repairPrice: ''}

    ]
  }

  iWatchSeriesS4_40: WatchInterface = {
    deviceName: 'iWatch Series 4 40mm',
    deviceImg: 'assets/watch/iwatch6-2.png',
    repairId: 'iWatchSeriesS4_40',
    repair: [
      {repairTitle: 'Screen', repairDetails: 'OLED Screen', repairImg: 'assets/watch/screen.png', repairPrice: '$195.95'},
      {repairTitle: 'Other repairs?', repairDetails: '', repairImg: 'assets/watch/i.png', repairPrice: ''}

    ]
  }

  iWatchSeriesS3_42: WatchInterface = {
    deviceName: 'iWatch Series 3 42mm',
    deviceImg: 'assets/watch/iwatch3-2.png',
    repairId: 'iWatchSeriesS3_42',
    repair: [
      {repairTitle: 'Screen', repairDetails: 'OLED Screen', repairImg: 'assets/watch/screen.png', repairPrice: '$129.95'},
      {repairTitle: 'Other repairs?', repairDetails: '', repairImg: 'assets/watch/i.png', repairPrice: ''}
    ]
  }

  iWatchSeriesS3_38: WatchInterface = {
    deviceName: 'iWatch Series 3 38mm',
    deviceImg: 'assets/watch/iwatch5-2.png',
    repairId: 'iWatchSeriesS3_38',
    repair: [
      {repairTitle: 'Screen', repairDetails: 'OLED Screen', repairImg: 'assets/watch/screen.png', repairPrice: '$134.95'},
      {repairTitle: 'Other repairs?', repairDetails: '', repairImg: 'assets/watch/i.png', repairPrice: ''}
    ]
  }

  androidWatch: WatchInterface = {
    deviceName: 'Android Watches',
    deviceImg: 'assets/watch/galaxyWatch.png',
    repairId: 'androidWatch',
    repair: [
      {repairTitle: '', repairDetails: 'Due to a large number of various android watch devices and constantly changing availability of parts, please contact us for an instant quote.', repairImg: 'assets/watch/i.png', repairPrice: ''}
    ]
  }




  getDevices(){
    let arr : Array<WatchInterface> = [this.androidWatch, this.iWatchSeries7_45, this.iWatchSeries7_41, this.iWatchSeries6_44, this.iWatchSeries6_40, this.iWatchSeriesSE_40, this.iWatchSeriesS5_44, this.iWatchSeriesS5_40, this.iWatchSeriesS4_44, this.iWatchSeriesS4_40, this.iWatchSeriesS3_42, this.iWatchSeriesS3_38];
    return arr;
  }
}
