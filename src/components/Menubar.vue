<template>
  <header class="bg-white shadow h-16 flex justify-between items-stretch">
    <router-link
      class="inline-flex items-center h-full px-5 text-lg font-mono font-semibold tracking-widest text-transform: uppercase"
      :to="{ name: 'home' }"
      >Recipe Library</router-link
    >
    <div class="flex items-center gap-2">
      <router-link
        :to="{ name: 'byName' }"
        class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100"
      >
        Search Recipes
      </router-link>
      <router-link
        :to="{ name: 'byLetter' }"
        class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100"
      >
        Search by Letter
      </router-link>
      <router-link
        :to="{ name: 'byIngredient' }"
        class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100"
      >
        Search by Ingredient
      </router-link>
    </div>
  </header>
</template>
