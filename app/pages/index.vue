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

  return data.value.Objects.map(obj => ({
    id: obj.Id,
    photo: {
      url: obj.FotoMedium,
      alt: obj.Adres,
    },
    address: obj.Adres,
    postalCode: obj.Postcode,
    city: obj.Woonplaats,
    priceHtml: obj.PrijsGeformatteerdHtml,
    realtorName: obj.MakelaarNaam,
  }));
});

useSeoMeta({
  title: data.value?.Metadata.Titel,
  description: data.value?.Metadata.Omschrijving,
});
</script>

<template>
  <div class="container">
    <ListingGrid :listings="listings" />
  </div>
</template>
