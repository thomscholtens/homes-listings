<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Zoom } from 'swiper/modules';
import IconClose from '~/assets/icons/close.svg';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/zoom';

interface PhotoLightboxProps {
  photos: Photo[];
  isOpen: boolean;
  initialSlide: number;
}

const { photos, isOpen, initialSlide } = defineProps<PhotoLightboxProps>();

const emit = defineEmits<{
  (e: 'close'): void;
}>();

const modules = [Navigation, Pagination, Zoom];

function closeLightbox() {
  emit('close');
}
</script>

<template>
  <Teleport to="body">
    <Transition name="fade">
      <div
        v-if="isOpen"
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
                <NuxtImg
                  format="webp"
                  loading="lazy"
                  :width="1080"
                  :height="720"
                  :src="photo.url"
                  :alt="photo.alt || `Photo ${index + 1}`"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.lightbox-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100dvw;
  height: 100dvh;
  background: oklch(from var(--color-white) l c h / 0.95);
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
  background: oklch(from var(--color-white) l c h / 0.1);
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
  background: oklch(from var(--color-black) l c h / 0.2);
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
  bottom: 0;
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
  .lightbox-content {
    width: 90%;
    height: 90%;
    max-width: 1200px;
    max-height: 900px;
  }
}
</style>
