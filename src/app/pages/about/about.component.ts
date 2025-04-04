import { Component, OnInit } from '@angular/core';
import { GoogleMap, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-about',
  imports: [GoogleMap, MapMarker],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  center: google.maps.LatLngLiteral = {
    lat: 28.687123613229357, // Latitud de tu ubicación
    lng: -106.13087525581909,  // Longitud de tu ubicación
  };
  zoom = 15;
  mapOptions: google.maps.MapOptions = {
    disableDefaultUI: true,
    zoomControl: true
  };

  constructor() {}

  ngOnInit(): void {
  }
}
