import leaflet from 'leaflet';

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
