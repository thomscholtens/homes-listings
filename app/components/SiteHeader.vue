<script lang="ts" setup>
import Logo from '~/assets/icons/logo.svg';
</script>

<template>
  <header class="site-header">
    <div class="container">
      <NuxtLink
        to="/"
        aria-label="Navigate back to listings overview"
      >
        <Logo class="logo" />
      </NuxtLink>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  background-color: var(--color-primary);
  padding-block: 1rem;
}

.logo {
  display: block;
  max-inline-size: 8rem;
}
</style>
