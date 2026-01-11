import leaflet from 'leaflet';

// Plugin for custom leaflet map pin icon, so that it only runs once on the client side
export default defineNuxtPlugin(() => {
  const mapPinIcon = leaflet.icon({
    iconUrl: '/map-pin.svg',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
  });

  return {
    provide: {
      leafletIcon: mapPinIcon,
    },
  };
});
