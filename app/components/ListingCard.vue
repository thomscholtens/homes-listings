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
    <NuxtLink
      :to="`/${listing.id}`"
      class="image-container"
    >
      <NuxtImg
        class="image"
        :src="listing.photo.url"
        :alt="listing.photo.alt"
        format="webp"
        width="228"
        height="152"
      />
    </NuxtLink>
    <div class="content">
      <NuxtLink :to="`/${listing.id}`">
        <h2 class="address">{{ listing.address }}</h2>
      </NuxtLink>
      <p>{{ listing.postalCode }} {{ listing.city }}</p>
      <div
        class="price"
        v-html="listing.priceHtml"
      />
      <p>{{ listing.realtorName }}</p>
    </div>
  </div>
</template>

<style scoped>
.listing-card {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  padding-block-end: 0.75rem;
  border-bottom: 1px solid var(--color-gray);
}

a {
  text-decoration: none;
  color: inherit;
}

p {
  margin: 0;
}

.image-container {
  display: block;
}

.image {
  border-radius: var(--border-radius);
  width: 100%;
  aspect-ratio: 3 / 2;
  object-fit: cover;
}

.content {
  margin-block: auto;
}

.address {
  font-size: 1.25rem;
  color: var(--color-secondary);
  margin: 0;
}

.price {
  font-weight: bold;
}

@container (width > 450px) {
  .listing-card {
    grid-template-columns: 228px 1fr;
  }
}
</style>
