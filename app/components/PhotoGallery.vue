<script lang="ts" setup>
interface PhotoGalleryProps {
  photos: Photo[];
}

const { photos } = defineProps<PhotoGalleryProps>();

const isLightboxOpen = ref<boolean>(false);
const initialSlide = ref<number>(0);

function openLightbox(index: number) {
  initialSlide.value = index;
  isLightboxOpen.value = true;
}

function closeLightbox() {
  isLightboxOpen.value = false;
}

const firstPhoto = computed(() => photos[0]);
const otherPhotos = computed(() => photos.slice(1, 5));
</script>

<template>
  <div
    v-if="photos.length > 0"
    class="photo-gallery"
  >
    <div class="grid">
      <button
        v-if="firstPhoto"
        type="button"
        aria-label="Open photo 1"
        class="grid-item grid-item--large"
        @click="openLightbox(0)"
      >
        <NuxtImg
          :src="firstPhoto.url"
          :width="574"
          :height="448"
          :alt="firstPhoto.alt"
          format="webp"
        />
      </button>
      <button
        v-for="(photo, index) in otherPhotos"
        :key="photo.url"
        type="button"
        :aria-label="`Open photo ${index + 2}`"
        class="grid-item grid-item--small"
        @click="openLightbox(index + 1)"
      >
        <NuxtImg
          :src="photo.url"
          :alt="photo.alt"
          :width="276"
          :height="246"
          format="webp"
        />
      </button>
    </div>
    <!-- Lazy load this component to improve performance. These photos should only be loaded when the lightbox is opened. -->
    <LazyPhotoLightbox
      :photos="photos"
      :is-open="isLightboxOpen"
      :initial-slide="initialSlide"
      @close="closeLightbox"
    />
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto auto;
  gap: 0.25rem;
  height: auto;
}

.grid-item {
  position: relative;
  overflow: hidden;
  border: none;
  padding: 0;
  cursor: pointer;
  background: var(--color-white);
  transition: opacity 0.2s;
  aspect-ratio: 574 / 448;
}

.grid-item:hover {
  opacity: 0.9;
}

.grid-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.grid-item--large {
  grid-column: span 2;
}

@media (width > 768px) {
  .grid {
    gap: 0.5rem;
    height: 500px;
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }

  .grid-item {
    aspect-ratio: auto;
  }

  .grid-item--large {
    grid-column: span 1;
    grid-row: span 2;
  }
}
</style>
