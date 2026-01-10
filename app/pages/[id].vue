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
      <div>
        <h1>{{ listing?.Adres }}</h1>
        <p>{{ listing?.VolledigeOmschrijving }}</p>
      </div>
      <LocationMap
        v-if="listing"
        :longitude="listing.WGS84_X"
        :latitude="listing.WGS84_Y"
      />
    </div>
  </div>
</template>

<style scoped>
  .listing-content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
</style>
