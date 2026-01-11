<script lang="ts" setup>
const route = useRoute();

const { data: listing, error } = await useFetch(`/api/listing/${route.params.id}`);

if (error.value) {
  throw createError({
    statusCode: error.value.statusCode || 500,
    statusMessage: error.value.statusMessage || 'Error fetching listing',
  });
}

useSeoMeta({
  title: `For sale: ${listing.value?.Adres}`,
  description: `For sale: ${listing.value?.Adres}`,
});
</script>

<template>
  <section class="section">
    <div class="container">
      <div>
        <PhotoGallery
          :photos="mapMultipleMediaToGalleryPhotos(listing?.Media || [])"
        />
      </div>
      <div class="listing-content">
        <div class="listing-information">
          <div class="heading">
            <h1 class="h2">
              {{ listing?.Adres }}
            </h1>
            <p>{{ `${listing?.Postcode} ${listing?.Plaats}` }}</p>
          </div>
          <div
            class="text-large text-bold"
            v-html="listing?.PrijsGeformatteerd"
          />
        </div>
        <LocationMap
          v-if="listing"
          :longitude="listing.WGS84_X"
          :latitude="listing.WGS84_Y"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
  .heading {
    margin-block-end: 1rem;;
  }

  .listing-content {
    display: grid;
    grid-template-columns: 1fr;
    margin-block-start: 2rem;
    row-gap: 1rem;
  }

  @media (width > 768px) {
    .listing-content {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>
