<script setup lang="ts">
defineProps<{
  text: string;
}>();
</script>
<template>
  <section class="max-w-[1104px] mx-auto px-6 lg:px-[80px] items-center">
    <p class="text-center text-primary text-[17px] lg:text-lg">{{ text }}</p>
  </section>
</template>
