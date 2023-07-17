<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'

import ListSection from '@/components/ListSection.vue'
import SearchSection from '@/components/SearchSection.vue'

import { getRandomCocktail } from '@/actions'

const { data: randomDrinks, isError } = useQuery({
  queryKey: ['randomDrinks'],
  queryFn: () => getRandomCocktail(8)
})
</script>

<template>
  <SearchSection />

  <div class="px-24 py-6 mx-auto space-y-4 border-t max-w-7xl border-t-slate-200">
    <ListSection v-if="!isError" title="Popular drinks" :items="randomDrinks" />
  </div>
</template>
