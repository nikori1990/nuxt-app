<script setup>
</script>

<template>
  <div class="avator">
    <img class="avator-img rounded-full" src="~assets/images/avator.jpg" alt="avator">
    <span class="text-black dark:text-light-300">(Niko1990)</span>
  </div>
</template>

<style lang="scss">
.avator {
  cursor: pointer;
  &-img {
    height: 30px;
    width: 30px;
  }

  display: flex;
  align-items: center;
}
</style>
