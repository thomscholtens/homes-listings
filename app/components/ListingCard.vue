<script lang="ts" setup>
interface ListingCardProps {
  listing: Listing;
}

defineProps<ListingCardProps>();
</script>

<template>
  <div
    class="listing-card"
  >
    <NuxtLink :to="`/${listing.id}`">
      <NuxtImg
        :src="listing.photo.url"
        :alt="listing.photo.alt"
        format="webp"
        width="228"
        height="152"
      />
    </NuxtLink>
    <div>
      <NuxtLink :to="`/${listing.id}`">
        <h2 class="address">{{ listing.address }}</h2>
      </NuxtLink>
      <p>{{ listing.postalCode }} {{ listing.city }}</p>
      <div v-html="listing.priceHtml" />
      <p>{{ listing.realtorName }}</p>
    </div>
  </div>
</template>

<style>
.listing-card {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  border: 1px solid red;
}

a {
  text-decoration: none;
  color: inherit;
}

p {
  margin: 0;
}

.address {
  font-size: 1.25rem;
  margin: 0;
}

@container (width > 450px) {
  .listing-card {
    grid-template-columns: auto 1fr;
  }
}
</style>
