<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Zoom } from 'swiper/modules';
import IconClose from '~/assets/icons/close.svg';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/zoom';

interface PhotoGalleryProps {
  photos: Photo[];
}

const { photos } = defineProps<PhotoGalleryProps>();

const modules = [Navigation, Pagination, Zoom];
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

    <Teleport to="body">
      <Transition name="fade">
        <div
          v-if="isLightboxOpen"
          class="lightbox-overlay"
          @click="closeLightbox"
        >
          <button
            class="close-button"
            aria-label="Close gallery"
            type="button"
            @click="closeLightbox"
          >
            <IconClose />
          </button>

          <div
            class="lightbox-content"
            @click.stop
          >
            <Swiper
              :modules="modules"
              :initial-slide="initialSlide"
              :navigation="true"
              :pagination="{ type: 'fraction' }"
              :zoom="true"
              :loop="true"
              :space-between="10"
            >
              <SwiperSlide
                v-for="(photo, index) in photos"
                :key="index"
              >
                <div class="swiper-zoom-container">
                  <img
                    :src="photo.url"
                    :alt="photo.alt || `Photo ${index + 1}`"
                  >
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<style scoped>
.photo-gallery {
  --z-index: 1000;
}

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

.lightbox-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100dvw;
  height: 100dvh;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(8px);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox-content {
  width: 100%;
  height: 100%;
}

.close-button {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 3rem;
  height: 3rem;
  border: none;
  background: rgba(255, 255, 255, 0.1);
  color: var(--color-black);
  cursor: pointer;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  transition: background 0.2s ease;
  padding: 0;
}

.close-button:hover {
  background: rgba(0, 0, 0, 0.2);
}

.close-button svg {
  width: 1.5rem;
  height: 1.5rem;
}

.lightbox-content :deep(.swiper) {
  width: 100%;
  height: 100%;
}

.lightbox-content :deep(.swiper-slide) {
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox-content :deep(.swiper-slide img) {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.lightbox-content :deep(.swiper-button-next),
.lightbox-content :deep(.swiper-button-prev) {
  color: var(--color-black);
}

.lightbox-content :deep(.swiper-pagination-fraction) {
  bottom: -0.5rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
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

  .lightbox-content {
    width: 90%;
    height: 90%;
    max-width: 1200px;
    max-height: 900px;
  }
}
</style>
