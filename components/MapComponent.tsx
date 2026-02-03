'use client'

import { useEffect } from 'react'
import L from 'leaflet'
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

interface Location {
  id: number
  name: string
  type: 'shop' | 'repair'
  lat: number
  lng: number
}

interface MapComponentProps {
  locations: Location[]
  selectedLocationId: number | null
  onMarkerClick: (id: number) => void
}

// Fix for default marker icon in Next.js
const fixIcon = () => {
  delete (L.Icon.Default.prototype as unknown as { _getIconUrl?: unknown })._getIconUrl
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  })
}

// Custom marker icons
const createIcon = (type: 'shop' | 'repair', isSelected: boolean) => {
  const color = type === 'shop' ? '#3B82F6' : '#F97316'
  const size = isSelected ? 44 : 36
  const borderWidth = isSelected ? 4 : 2
  
  return L.divIcon({
    className: 'custom-marker',
    html: `
      <div style="
        width: ${size}px;
        height: ${size}px;
        background: ${color};
        border-radius: 50% 50% 50% 0;
        transform: rotate(-45deg);
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 16px rgba(0,0,0,0.5);
        border: ${borderWidth}px solid ${isSelected ? '#fff' : 'rgba(255,255,255,0.5)'};
        cursor: pointer;
        transition: all 0.2s ease;
      ">
        <svg style="transform: rotate(45deg);" width="${size * 0.45}" height="${size * 0.45}" viewBox="0 0 24 24" fill="white">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
      </div>
    `,
    iconSize: [size, size],
    iconAnchor: [size / 2, size],
    popupAnchor: [0, -size],
  })
}

// Component to handle map view changes
function MapController({ selectedLocation, locations }: { selectedLocation: Location | null; locations: Location[] }) {
  const map = useMap()
  
  useEffect(() => {
    if (selectedLocation) {
      map.flyTo([selectedLocation.lat, selectedLocation.lng], 11, {
        duration: 0.8,
      })
    } else if (locations.length > 0) {
      // Fit bounds to show all markers
      const bounds = L.latLngBounds(locations.map(loc => [loc.lat, loc.lng]))
      map.fitBounds(bounds, { padding: [50, 50] })
    }
  }, [selectedLocation, locations, map])
  
  return null
}

export default function MapComponent({ locations, selectedLocationId, onMarkerClick }: MapComponentProps) {
  useEffect(() => {
    fixIcon()
  }, [])

  const selectedLocation = locations.find(loc => loc.id === selectedLocationId) || null

  return (
    <MapContainer
      center={[44.0165, 21.0059]}
      zoom={7}
      style={{ height: '100%', width: '100%', borderRadius: '1rem' }}
      zoomControl={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://carto.com/">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      />
      <MapController selectedLocation={selectedLocation} locations={locations} />
      
      {locations.map((location) => (
        <Marker
          key={location.id}
          position={[location.lat, location.lng]}
          icon={createIcon(location.type, selectedLocationId === location.id)}
          eventHandlers={{
            click: () => onMarkerClick(location.id),
          }}
        />
      ))}
    </MapContainer>
  )
}
