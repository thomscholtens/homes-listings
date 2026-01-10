<script lang="ts" setup>
interface ListingGridProps {
  listings: Listing[];
}

defineProps<ListingGridProps>();
</script>

<template>
  <div class="listings">
    <div
      v-for="listing in listings"
      :key="listing.id"
      class="listing-container"
    >
      <ListingCard
        :listing="listing"
      />
    </div>
  </div>
</template>

<style>
.listings {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

.listing-container {
  container-type: inline-size;
}

@media (width > 800px) {
  .listings {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
