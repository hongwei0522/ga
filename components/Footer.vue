<script setup lang="ts"></script>

<template>
  <div class="footer">
    <div class="footer-content">
      <a href="tel:0912002098" class="footer-icon">
        <img src="/icons/phone.png" alt="Phone" width="24" />
      </a>

      <a href="https://line.me/ti/p/nokil1141" class="footer-icon">
        <img src="/icons/line.png" alt="LINE" width="24" />
      </a>

      <a href="https://www.facebook.com/share/1A5wbMQmc5/?mibextid=wwXIfr" class="footer-icon" target="_blank">
        <img src="/icons/facebook.png" alt="Facebook" width="24" />
      </a>
    </div>
  </div>
</template>

<style scoped>
.footer {
  background: #fff2e1;
  max-width: 1024px;
  margin: 0 auto;
  padding: 10px 20px;
}
.footer-content {
  display: flex;
  justify-content: center;
}
.footer-icon {
  cursor: pointer;
  margin: 10px;
}
</style>
