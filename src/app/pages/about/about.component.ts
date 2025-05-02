import { Component, OnInit } from '@angular/core';
declare const google: any;

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {

  ngOnInit(): void {
    this.loadGoogleMaps().then(() => {
      this.initMap(); // tu función para inicializar el mapa
    });
  }

  loadGoogleMaps(): Promise<void> {
    return new Promise((resolve, reject) => {
      if ((window as any).google && (window as any).google.maps) {
        resolve(); // Ya cargado
        return;
      }
  
      const script = document.createElement('script');
      script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBQJ3btPOP05yFHAoo6kj-MoGmUSMRC6ek';
      script.async = true;
      script.defer = true;
      script.onload = () => resolve();
      script.onerror = () => reject('Google Maps no se pudo cargar');
      document.head.appendChild(script);
    });
  }

  initMap(){
    const mapElement = document.getElementById('map');

    if (!mapElement) return;

    const map = new google.maps.Map(mapElement, {
      center: { lat: 28.687123613229357, lng: -106.13087525581909 }, // Buenos Aires, ejemplo
      zoom: 15,
    });

    // Opcional: agregar marcador
    new google.maps.marker.AdvancedMarkerElement({
      position: { lat: 28.687123613229357, lng: -106.13087525581909 },
      map,
      title: 'Tragones Anónimos',
    });
  }
}
