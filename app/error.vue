<template>
  <NuxtLayout>
    <section class="section">
      <div class="container">
        <h2>{{ error.statusCode }}</h2>
        <p>{{ error.statusMessage }}</p>
      </div>
    </section>
  </NuxtLayout>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app';

defineProps<{ error: NuxtError }>();
</script>
