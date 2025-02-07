<template>
  <div class="products">
    <div class="product-title">裝潢作品</div>
    <Swiper
      :modules="[Autoplay]"
      :navigation="false"
      :loop="true"
      :autoplay="{
        delay: 3000,
        disableOnInteraction: false,
      }"
    >
      <SwiperSlide class="swiper-slide">
        <img src="/imgs/product1.jpg" alt="" width="350px" height="200px" />
        <p>跳色系設計風格</p>
      </SwiperSlide>
      <SwiperSlide class="swiper-slide">
        <img src="/imgs/product2.jpg" alt="" width="350px" height="200px" />
        <p>藝術塗料 「雪菲爾」</p>
      </SwiperSlide>
      <SwiperSlide class="swiper-slide">
        <img src="/imgs/product3.jpg" alt="" width="350px" height="200px" />
        <p>石塑地板安裝</p>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
// import 'swiper/css/navigation';

import { Autoplay } from 'swiper/modules';
</script>

<style scoped>
.products {
  max-width: 1024px;
  margin: 0 auto;
  margin-bottom: 50px;
  padding: 10px 20px;
}
.product-title {
  font-size: 32px;
  text-align: center;
  margin-bottom: 20px;
}
.swiper-slide {
  text-align: center;
  margin: 0 auto;
}
</style>
