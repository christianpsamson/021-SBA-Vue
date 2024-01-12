<template>
  <div class="bg-gray-100 h-full">
    <Menubar />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup>
import Menubar from "../components/Menubar.vue";
</script>
