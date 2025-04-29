<script lang="ts" setup>
defineProps<{
  reverseOnMobile?: boolean;
}>();
</script>

<template>
  <section class="bg-white">
    <div
      class="max-w-[1104px] mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center"
    >
      <div :class="[reverseOnMobile && 'order-2 lg:order-1']">
        <slot name="left" />
      </div>

      <div :class="[reverseOnMobile && 'order-1 lg:order-2']">
        <slot name="right" />
      </div>
    </div>
  </section>
</template>
