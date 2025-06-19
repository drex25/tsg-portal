import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface Location {
  city: string;
  address: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

interface LocationMapProps {
  locations: Location[];
  currentLocation: Location;
  onMarkerClick: (index: number) => void;
}

export default function LocationMap({ locations, currentLocation, onMarkerClick }: LocationMapProps) {
  const mapRef = useRef<L.Map | null>(null);
  const markersRef = useRef<L.Marker[]>([]);

  useEffect(() => {
    if (!mapRef.current) {
      // Initialize map
      const map = L.map('map', {
        center: [currentLocation.coordinates.lat, currentLocation.coordinates.lng],
        zoom: 13,
        zoomControl: false,
        attributionControl: false
      });

      L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        maxZoom: 19
      }).addTo(map);

      // Custom marker icon
      const customIcon = L.divIcon({
        className: 'custom-marker',
        html: `
          <div class="marker-pin">
            <div class="marker-pulse"></div>
          </div>
        `,
        iconSize: [30, 30],
        iconAnchor: [15, 15]
      });

      // Add markers
      locations.forEach((location, index) => {
        const marker = L.marker([location.coordinates.lat, location.coordinates.lng], {
          icon: customIcon
        }).addTo(map);

        marker.on('click', () => onMarkerClick(index));
        markersRef.current.push(marker);
      });

      mapRef.current = map;
    }

    // Pan to current location
    if (mapRef.current) {
      mapRef.current.setView(
        [currentLocation.coordinates.lat, currentLocation.coordinates.lng],
        13,
        { animate: true, duration: 1 }
      );

      // Update markers appearance
      markersRef.current.forEach((marker, index) => {
        const markerElement = marker.getElement();
        if (markerElement) {
          if (index === locations.findIndex(loc => loc.city === currentLocation.city)) {
            markerElement.classList.add('active');
          } else {
            markerElement.classList.remove('active');
          }
        }
      });
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
        markersRef.current = [];
      }
    };
  }, [locations, currentLocation, onMarkerClick]);

  return (
    <div id="map" className="w-full h-full" />
  );
} 