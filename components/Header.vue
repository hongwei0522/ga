<script setup lang="ts"></script>

<template>
  <div class="header">
    <div class="header-content">
      <div class="header-logo">logo</div>
      <ul class="header-item">
        <li class="header-item-text">關於我們</li>
        <li class="header-item-text">裝潢作品</li>
        <!-- <li class="header-item-text">聯絡我們</li> -->
      </ul>
    </div>
  </div>
</template>

<style scoped>
.header {
  background: #fff2e1;
  max-width: 1024px;
  margin: 0 auto;
  padding: 10px 20px;
}
.header-content {
  display: flex;
  justify-content: space-between;
}
.header-logo {
  cursor: pointer;
}
.header-item {
  display: flex;
}
.header-item-text {
  margin-left: 20px;
  font-size: 16px;
  cursor: pointer;
}
</style>
