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
  <div>
    <pre>
      {{ meals }}
    </pre>
  </div>
</template>
<script setup>
import { computed } from "@vue/reactivity";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import store from "../store";

const keyword = ref("");
const meals = computed(() => store.state.searchedMeals);

function searchMeals() {
  console.log("searchMeals function is invoked with keyword:", keyword.value);
  store.dispatch("searchMeals", keyword.value);
}
</script>
