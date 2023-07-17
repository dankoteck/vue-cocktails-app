import type { Cocktail, CocktailCategory } from '@/types'
import { createApiUrl } from '@/utils'

export async function getCocktailCategories(): Promise<CocktailCategory[]> {
  const URL = createApiUrl()
  const response = await fetch(`${URL}/list.php?c=list`)
  const { drinks } = await response.json()
  return drinks.splice(0, 5)
}

export async function getRandomCocktail(n: number): Promise<Cocktail[]> {
  const data = []

  for (let i = 0; i < n; i++) {
    const URL = createApiUrl()
    const response = await fetch(`${URL}/random.php`)
    const { drinks } = await response.json()
    data.push(drinks[0])
  }

  return data
}
