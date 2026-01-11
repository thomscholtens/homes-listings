<script setup lang="ts">
const { data, error } = await useFetch('/api/listing');

if (error.value) {
  throw createError({
    statusCode: error.value.statusCode || 500,
    statusMessage: error.value.statusMessage || 'Error fetching listings',
  });
}

const listings = computed<Listing[]>(() => {
  if (!data.value?.Objects) return [];
  return mapApiObjectsToListings(data.value.Objects);
});

useSeoMeta({
  title: data.value?.Metadata.Titel,
  description: data.value?.Metadata.Omschrijving,
});
</script>

<template>
  <section class="section">
    <div class="container">
      <ListingGrid :listings="listings" />
    </div>
  </section>
</template>
