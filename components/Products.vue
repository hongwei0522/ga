<template>
  <div class="products">
    <div class="product-title">裝潢作品</div>
    <Swiper :modules="[Navigation]" navigation>
      <SwiperSlide class="swiper-test">Slide 1</SwiperSlide>
      <SwiperSlide class="swiper-test">Slide 2</SwiperSlide>
      <SwiperSlide class="swiper-test">Slide 3</SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
</script>

<style scoped>
.products {
  background: #fff2e1;
  max-width: 1024px;
  margin: 0 auto;
  padding: 10px 20px;
}
.product-title {
  font-size: 32px;
  text-align: center;
  margin-bottom: 20px;
}
.swiper-test {
  text-align: center;
}
</style>
