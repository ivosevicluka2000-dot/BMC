'use client';

import React, { useState, useMemo, useCallback, useEffect, useRef } from 'react';
import { APIProvider, Map, AdvancedMarker, useMap } from '@vis.gl/react-google-maps';
import { locations, Location, LocationType } from '../data/locations';
import Header from './home/Header';
import LocationModal from './LocationModal';

// Dark map style for the Balkans theme
const darkMapStyle = [
  { elementType: 'geometry', stylers: [{ color: '#1a1a1a' }] },
  { elementType: 'labels.text.stroke', stylers: [{ color: '#1a1a1a' }] },
  { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
  { featureType: 'administrative.locality', elementType: 'labels.text.fill', stylers: [{ color: '#d59563' }] },
  { featureType: 'administrative.country', elementType: 'geometry.stroke', stylers: [{ color: '#4a4a4a' }] },
  { featureType: 'road', elementType: 'geometry', stylers: [{ color: '#2c2c2c' }] },
  { featureType: 'road', elementType: 'geometry.stroke', stylers: [{ color: '#1a1a1a' }] },
  { featureType: 'road.highway', elementType: 'geometry', stylers: [{ color: '#3c3c3c' }] },
  { featureType: 'water', elementType: 'geometry', stylers: [{ color: '#0e0e0e' }] },
  { featureType: 'water', elementType: 'labels.text.fill', stylers: [{ color: '#4a4a4a' }] },
  { featureType: 'poi', stylers: [{ visibility: 'off' }] },
  { featureType: 'transit', stylers: [{ visibility: 'off' }] },
];

// Balkans center coordinates
const BALKANS_CENTER = { lat: 43.5, lng: 20.5 };
const DEFAULT_ZOOM = 6;

// Custom marker component
interface LocationMarkerProps {
  location: Location;
  isHovered: boolean;
  isSelected: boolean;
  onClick: () => void;
}

const LocationMarker: React.FC<LocationMarkerProps> = ({ location, isHovered, isSelected, onClick }) => {
  const isHighlighted = isHovered || isSelected;
  
  return (
    <AdvancedMarker
      position={{ lat: location.lat, lng: location.lng }}
      onClick={onClick}
    >
      <div className="relative group cursor-pointer">
        {/* Pin shape */}
        <div 
          className={`
            w-8 h-8 rounded-full border-2 flex items-center justify-center
            transition-all duration-300 ease-out
            ${isHighlighted 
              ? 'bg-brand border-white scale-125 shadow-[0_0_20px_rgba(207,10,10,0.8)]' 
              : 'bg-brand/80 border-black/50 hover:scale-110 shadow-[0_0_10px_rgba(207,10,10,0.5)]'
            }
          `}
        >
          <div className="w-2 h-2 bg-white rounded-full" />
        </div>
        
        {/* Label tooltip */}
        <div 
          className={`
            absolute -top-10 left-1/2 -translate-x-1/2 
            bg-black/95 border border-brand/40 text-white 
            px-3 py-1.5 whitespace-nowrap 
            text-[10px] uppercase tracking-widest font-medium
            transition-all duration-200 pointer-events-none z-50
            ${isHighlighted ? 'opacity-100 -translate-y-1' : 'opacity-0 translate-y-0'}
          `}
        >
          {location.name}
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-brand/40" />
        </div>
      </div>
    </AdvancedMarker>
  );
};

// Map controller component for programmatic control
interface MapControllerProps {
  selectedLocation: Location | null;
  filteredLocations: Location[];
}

const MapController: React.FC<MapControllerProps> = ({ selectedLocation, filteredLocations }) => {
  const map = useMap();
  const hasInitialFit = useRef(false);

  // Fit bounds when filtered locations change  
  useEffect(() => {
    if (!map || filteredLocations.length === 0) return;
    
    // Only auto-fit on initial load or when no location is selected
    if (!selectedLocation && !hasInitialFit.current) {
      const bounds = new google.maps.LatLngBounds();
      filteredLocations.forEach(loc => {
        bounds.extend({ lat: loc.lat, lng: loc.lng });
      });
      map.fitBounds(bounds, { top: 50, right: 50, bottom: 50, left: 50 });
      hasInitialFit.current = true;
    }
  }, [map, filteredLocations, selectedLocation]);

  // Pan to selected location
  useEffect(() => {
    if (!map || !selectedLocation) return;
    
    map.panTo({ lat: selectedLocation.lat, lng: selectedLocation.lng });
    map.setZoom(14);
  }, [map, selectedLocation]);

  return null;
};

const LocationsPage: React.FC = () => {
  const [activeType, setActiveType] = useState<LocationType>('shop');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [hoveredLocationId, setHoveredLocationId] = useState<string | null>(null);
  const [isMobileListOpen, setIsMobileListOpen] = useState(false);

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';

  // Filtered data based on toggle and search
  const filteredLocations = useMemo(() => {
    return locations.filter(loc => {
      const matchesType = loc.type === activeType;
      const query = searchQuery.toLowerCase();
      const matchesSearch = 
        loc.name.toLowerCase().includes(query) ||
        loc.city.toLowerCase().includes(query) ||
        loc.category.toLowerCase().includes(query) ||
        loc.address.toLowerCase().includes(query);
      return matchesType && matchesSearch;
    });
  }, [activeType, searchQuery]);

  const handleLocationSelect = useCallback((loc: Location) => {
    setSelectedLocation(loc);
    if (window.innerWidth < 1024) {
      setIsMobileListOpen(false);
    }
  }, []);

  return (
    <>
      <Header />
      <div className="pt-20 sm:pt-24 lg:pt-[100px] h-screen flex flex-col bg-[#050505] overflow-hidden">
      {/* Header / Controls */}
      <div className="flex-none px-4 sm:px-6 lg:px-12 py-4 sm:py-6 lg:py-8 border-b border-white/10 flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6">
        <div className="text-center lg:text-left">
          <h1 className="serif text-2xl sm:text-3xl lg:text-4xl">The Network</h1>
          <p className="text-white/50 text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] mt-1 sm:mt-2">Verified Chapters & Partners</p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full lg:w-auto">
          {/* Toggle */}
          <div className="bg-white/5 p-1 flex rounded-none border border-white/20 w-full sm:w-auto sm:min-w-[240px] lg:w-[300px]">
            <button 
              onClick={() => setActiveType('shop')}
              className={`flex-1 py-3.5 sm:py-3 text-[11px] sm:text-xs uppercase tracking-widest font-bold transition-all min-h-[44px] ${activeType === 'shop' ? 'bg-brand text-white' : 'text-white/60 hover:text-white'}`}
            >
              Shops
            </button>
            <button 
              onClick={() => setActiveType('service')}
              className={`flex-1 py-3.5 sm:py-3 text-[11px] sm:text-xs uppercase tracking-widest font-bold transition-all min-h-[44px] ${activeType === 'service' ? 'bg-brand text-white' : 'text-white/60 hover:text-white'}`}
            >
              Services
            </button>
          </div>

          {/* Search */}
          <div className="relative w-full sm:flex-1 lg:w-[400px] lg:flex-none">
            <input 
              type="text" 
              placeholder="SEARCH BY CITY OR NAME..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/20 px-4 sm:px-6 py-3.5 text-[11px] sm:text-xs uppercase tracking-widest focus:outline-none focus:border-brand transition-colors placeholder:text-white/30 min-h-[48px]"
            />
            <div className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg className="w-4 h-4 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
          </div>
        </div>
      </div>

      {/* Main Layout */}
      <div className="flex-1 flex flex-col lg:flex-row relative overflow-hidden">
        
        {/* List View (Left) */}
        <div className={`
          absolute lg:relative inset-0 lg:inset-auto z-[900] lg:z-auto bg-[#050505] w-full sm:w-[85%] md:w-[60%] lg:w-[400px] xl:w-[450px] border-r border-white/10 flex flex-col transition-transform duration-500
          ${isMobileListOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}>
          <div className="p-6 bg-[#0a0a0a] border-b border-white/10 lg:hidden flex justify-between items-center">
             <span className="text-xs uppercase tracking-widest font-bold">Results ({filteredLocations.length})</span>
             <button onClick={() => setIsMobileListOpen(false)} className="text-white/70 text-xs uppercase tracking-widest">Close</button>
          </div>
          
          <div className="flex-1 overflow-y-auto custom-scrollbar">
            {filteredLocations.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center p-12 text-center">
                <div className="w-12 h-12 border border-white/20 flex items-center justify-center mb-6 rotate-45">
                   <span className="text-white/40 -rotate-45 font-bold">!</span>
                </div>
                <p className="text-white/40 text-xs uppercase tracking-widest">No connections found in this sector.</p>
              </div>
            ) : (
              filteredLocations.map(loc => (
                <button 
                  key={loc.id}
                  onClick={() => handleLocationSelect(loc)}
                  onMouseEnter={() => setHoveredLocationId(loc.id)}
                  onMouseLeave={() => setHoveredLocationId(null)}
                  className={`w-full text-left p-5 sm:p-6 lg:p-8 border-b border-white/10 group transition-all hover:bg-white/[0.04] active:bg-white/[0.08] ${selectedLocation?.id === loc.id ? 'bg-white/[0.06]' : ''}`}
                >
                  <div className="flex justify-between items-start mb-3 sm:mb-4">
                    <span className="text-[10px] sm:text-xs text-white/50 uppercase tracking-[0.15em] sm:tracking-[0.2em] font-medium">{loc.category}</span>
                    <span className="text-[10px] sm:text-xs text-white/40 uppercase tracking-widest">{loc.city}</span>
                  </div>
                  <h3 className="serif text-lg sm:text-xl mb-2 sm:mb-3 group-hover:translate-x-1 transition-transform">{loc.name}</h3>
                  <p className="text-white/60 text-xs sm:text-sm font-light leading-relaxed line-clamp-2">{loc.description}</p>
                  
                  <div className="mt-4 sm:mt-6 flex items-center space-x-4 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                    <div className="w-4 h-[1px] bg-white/50" />
                    <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] font-bold text-white/80">View Location Details</span>
                  </div>
                </button>
              ))
            )}
          </div>
        </div>

        {/* Map View (Right) */}
        <div className="flex-1 relative bg-black">
          {apiKey && apiKey !== 'YOUR_API_KEY_HERE' ? (
            <APIProvider apiKey={apiKey}>
              <Map
                defaultCenter={BALKANS_CENTER}
                defaultZoom={DEFAULT_ZOOM}
                mapId="balkans-dark-map"
                styles={darkMapStyle}
                disableDefaultUI={true}
                zoomControl={true}
                className="h-full w-full"
                gestureHandling="greedy"
              >
                <MapController selectedLocation={selectedLocation} filteredLocations={filteredLocations} />
                {filteredLocations.map(loc => (
                  <LocationMarker
                    key={loc.id}
                    location={loc}
                    isHovered={hoveredLocationId === loc.id}
                    isSelected={selectedLocation?.id === loc.id}
                    onClick={() => handleLocationSelect(loc)}
                  />
                ))}
              </Map>
            </APIProvider>
          ) : (
            <div className="h-full w-full flex items-center justify-center bg-zinc-900">
              <div className="text-center p-8 max-w-md">
                <div className="w-16 h-16 mx-auto mb-6 border border-brand/30 flex items-center justify-center">
                  <svg className="w-8 h-8 text-brand/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <h3 className="serif text-xl mb-3">Map Configuration Required</h3>
                <p className="text-white/50 text-sm mb-4">Add your Google Maps API key to .env.local:</p>
                <code className="block bg-black/50 border border-white/10 p-3 text-xs text-brand font-mono">
                  NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_key
                </code>
              </div>
            </div>
          )}
          
          {/* Mobile Overlay Toggle */}
          <button 
            onClick={() => setIsMobileListOpen(true)}
            className="lg:hidden absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-[1000] bg-brand text-white px-6 sm:px-8 py-4 text-[11px] sm:text-xs font-bold uppercase tracking-widest shadow-2xl active:scale-95 transition-transform min-h-[48px]"
          >
            Show List
          </button>

          {/* Selected Location Modal/Card */}
          {selectedLocation && (
            <LocationModal 
              location={selectedLocation} 
              onClose={() => setSelectedLocation(null)} 
            />
          )}
        </div>
      </div>
    </div>
    </>
  );
};

export default LocationsPage;
