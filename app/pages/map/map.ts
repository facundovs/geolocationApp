import { Component } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { GoogleMap, GoogleMapsEvent, GoogleMapsLatLng } from 'ionic-native';

/*
  Generated class for the MapPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/map/map.html',
})
export class MapPage {

  private map: GoogleMap;

  constructor(private navCtrl: NavController, private platform: Platform) {
    this.platform.ready().then(() => {
      GoogleMap.isAvailable().then(() =>{
        this.map = new GoogleMap('map_canvas');
        this.map.one(GoogleMapsEvent.MAP_READY).then((data:any) =>{
          //lets center map based in our position
          let myPosition = new GoogleMapsLatLng(41.390295, 2.154007);
          this.map.animateCamera({target: myPosition, zoom: 10});
        });
      })
      .catch(() => alert("GoogleMaps Native SDK is not available"));
    });
  }

}
