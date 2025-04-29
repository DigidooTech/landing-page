<script lang="ts" setup></script>

<template>
  <div class="flex items-center flex-row md:flex-col gap-sm">
    <div class="flex-shrink-0">
      <slot name="icon" />
    </div>
    <div class="flex-grow flex items-center md:justify-center">
      <slot name="text" />
    </div>
  </div>
</template>
