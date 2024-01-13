<template>
  <div class="p-6">
    <input
      type="text"
      v-model="keyword"
      class="rounded border-2 border-gray-50 w-full shadow"
      placeholder="Search for Recipe"
      @change="searchMeals"
    />
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
    <div v-for="meal of meals" :key="meal.idMeal" class="bg-white shadow">
      <img :src="meal.strMealThumb" :alt="strMeal" />
      <h3 class="p-3 font-semibold text-sky-800">{{ meal.strMeal }}</h3>
      <div class="p-3">
        <a
          :href="meal.strYoutube"
          target="_blank"
          class="p-2 rounded-lg bg-red-500 text-white hover:bg-red-800 transition-colors"
          >Youtube</a
        >
      </div>
    </div>
    <div v-if="!meals.length" class="flex justify-center text-gray-600 p-8">
      There are no recipes for that keyword.
    </div>
  </div>
</template>
<script setup>
import { computed } from "@vue/reactivity";
import { onMounted, ref } from "vue";
import store from "../store";

const keyword = ref("");
const meals = computed(() => store.state.searchedMeals);

function searchMeals() {
  store.dispatch("searchMeals", keyword.value);
}

onMounted(() => {
  const defaultKeyword = "Chicken";

  // Set the keyword value
  keyword.value = defaultKeyword;

  // Trigger the initial search
  searchMeals();
});
</script>
