<template>
  <div class="container">
    <NuxtLayout>
      <h2>{{ error.statusCode }}</h2>
      <p>{{ error.statusMessage }}</p>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app';

defineProps<{ error: NuxtError }>();
</script>
