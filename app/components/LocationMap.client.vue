<script lang="ts" setup>
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface LocationMapProps {
  latitude: number;
  longitude: number;
}

const { latitude, longitude } = defineProps<LocationMapProps>();

const MAP_ZOOM = 13;

let map: leaflet.Map | null = null;
const mapEl = useTemplateRef('mapEl');

onMounted(async () => {
  await nextTick();
  if (!mapEl.value) return;

  map = leaflet.map(mapEl.value).setView([latitude, longitude], MAP_ZOOM);

  leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);

  leaflet.marker([latitude, longitude]).addTo(map);
});

onBeforeUnmount(() => {
  if (!map) return;
  map.remove();
});
</script>

<template>
  <div
    ref="mapEl"
    class="map"
  />
</template>

<style scoped>
.map {
  height: 400px;
  border-radius: var(--border-radius);
  overflow: hidden;
}
</style>
