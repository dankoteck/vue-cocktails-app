<script setup lang="ts">
import { getCocktailCategories } from '@/actions'
import { useQuery } from '@tanstack/vue-query'

const { data, isError } = useQuery({
  queryKey: ['categories'],
  queryFn: getCocktailCategories
})
</script>

<template>
  <section v-if="!isError" class="mb-8">
    <div class="flex flex-col items-center gap-6 px-24 py-6 mx-auto max-w-7xl">
      <input
        type="text"
        placeholder="Search for a cocktail"
        class="px-4 py-2 border rounded-2xl border-slate-200 w-96"
      />
      <div class="flex items-center gap-3 text-sm">
        <span class="">Searches</span>
        <div class="space-x-2">
          <span
            v-for="category in data"
            :key="category.strCategory"
            class="px-2 py-1 transition duration-150 border cursor-pointer hover:bg-slate-900 hover:text-white rounded-xl border-slate-200"
          >
            {{ category.strCategory }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
