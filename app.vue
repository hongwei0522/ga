<template>
  <div class="app-wrapper">
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: '永嘉塗裝設計',
  meta: [
    {
      name: '永嘉塗裝設計 - 有專業的施工團隊,高品質 精緻細膩 專業獨家技術,為客戶創造獨特風格,打造舒適 煥然一新的空間。 ',
      content:
        '永嘉塗裝設計 - 有專業的施工團隊,高品質 精緻細膩 專業獨家技術,為客戶創造獨特風格,打造舒適 煥然一新的空間。 ',
    },
  ],
  bodyAttrs: {
    class: 'test',
  },
  script: [{ innerHTML: "console.log('Hello world')" }],
});
</script>

<style>
.app-wrapper {
  /* width: 100vw;*/
  /* height: 100vh; */
  min-width: 360px;
  /* background: #fff2e1; */
}
</style>
