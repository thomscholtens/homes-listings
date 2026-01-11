<script lang="ts" setup>
const route = useRoute();

const { data: listing, error } = await useFetch(`/api/listing/${route.params.id}`);

if (error.value) {
  throw createError({
    statusCode: error.value.statusCode || 500,
    statusMessage: error.value.statusMessage || 'Error fetching listing',
  });
}
</script>

<template>
  <div class="container">
    <NuxtLink to="/">Back to overview</NuxtLink>
    <div>
      <PhotoGallery
        :photos="mapMultipleMediaToGalleryPhotos(listing?.Media || [])"
      />
    </div>
    <div class="listing-content">
      <div class="listing-information">
        <h1 class="h2">
          {{ listing?.Adres }}
        </h1>
        <div
          class="text-large text-bold"
          v-html="listing?.PrijsGeformatteerd"
        />
        <div>
          <h2 class="h3">
            Description
          </h2>
          <p class="text-small">
            {{ listing?.VolledigeOmschrijving }}
          </p>
        </div>
      </div>
      <div>
        <h2 class="h3">
          Location
        </h2>
        <LocationMap
          v-if="listing"
          :longitude="listing.WGS84_X"
          :latitude="listing.WGS84_Y"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
  .listing-content {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .listing-information {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  @media (width > 768px) {
    .listing-content {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>
