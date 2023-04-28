<template>
  <div id="st-preloader" v-if="!isloaded">
    <div class="st-preloader-wave"></div>
    <div class="st-preloader-wave"></div>
    <div class="st-preloader-wave"></div>
    <div class="st-preloader-wave"></div>
    <div class="st-preloader-wave"></div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

const isloaded = ref(false);

onMounted(() => {
  setTimeout(() => {
    isloaded.value = true;
  }, 1000);
});
</script>
