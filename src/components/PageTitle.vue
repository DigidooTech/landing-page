<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<template>
  <section class="max-w-[1104px] mx-auto px-6 lg:px-[64px] py-8 lg:py-16">
    <h1 class="text-primary text-[28px] lg:text-[52px] font-semibold">
      {{ title }}
    </h1>
  </section>
</template>
