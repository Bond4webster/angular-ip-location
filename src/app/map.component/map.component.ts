import { Component, OnInit, Input } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit{
  @Input() map_lat: string = "0";
  @Input() map_lon: string = "0";
  // @ts-ignore
  private map: L.Map;
  //private centroid: L.LatLngExpression = [Number(this.map_lat),Number(this.map_lon)];

  private initMap(): void {

      this.map = L.map('map', {
        center: [Number(this.map_lat),Number(this.map_lon)],
        zoom: 1
      });

      const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        minZoom: 10,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      });

      tiles.addTo(this.map);


  }

  constructor() { }

  ngOnInit(): void {
    this.initMap();
  }

}
