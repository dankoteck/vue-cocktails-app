<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="border-b border-b-slate-200 shadow-lg">
    <div class="py-6 px-24 max-w-7xl mx-auto flex items-center justify-between">
      <div class="text-4xl">
        <h1>Vue Cocktails App</h1>
      </div>

      <nav class="flex items-center gap-4 text-lg text-sky-600">
        <RouterLink to="/">Meals</RouterLink>
        <RouterLink to="/">Cocktails</RouterLink>
      </nav>
    </div>
  </header>
</template>
