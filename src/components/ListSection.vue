<script setup lang="ts">
import { type Cocktail } from '@/types'
import { RouterLink } from 'vue-router'

defineProps<{
  title: string
  items: Cocktail[] | undefined
}>()
</script>

<template>
  <section>
    <h3 class="text-2xl text-center">{{ title }}</h3>

    <div class="grid grid-cols-4 gap-8 mt-8">
      <div v-for="item in items" :key="item.idDrink" class="">
        <RouterLink :to="`/drink/${item.idDrink}`">
          <img :alt="`Drink-` + item.strImageSource" :src="item.strDrinkThumb!" />
          <span class="block w-full mt-4 text-lg font-medium text-center">
            {{ item.strDrink }}
          </span>
        </RouterLink>
      </div>
    </div>
  </section>
</template>
