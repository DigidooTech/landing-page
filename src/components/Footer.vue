<script setup lang="ts">
import DigidooLogoGrey from "../assets/DigidooLogoGrey.vue";
const { theme = "home" } = defineProps<{
  theme: "home" | "legal";
}>();
</script>

<template>
  <div
    :class="[
      'max-w-[1104px] mx-auto px-6 lg:px-8 items-center text-[14px] lg:text-[16px]',
      theme === 'legal' && 'px-8 !lg:px-[64px] mt-16',
    ]"
  >
    <div
      :class="[
        'flex flex-col gap-4',
        theme === 'home' && 'mt-12 lg:mt-0 lg:p-[64px]',
        theme === 'legal' && 'pt-[64px] ',
      ]"
    >
      <DigidooLogoGrey />
      <span class="text-secondary">Einfach Lernfortschritte festhalten</span>
      <span class="text-secondary"
        >Copyright 2025 Digidoo GmbH •
        <a href="/impressum" class="hover:underline">Impressum</a> •
        <a href="/datenschutz" class="hover:underline">Datenschutz</a> •
        <a href="/agb" class="hover:underline">AGB</a> •
        <a href="mailto:info@digidoo.com" class="hover:underline"
          >Kontakt</a
        ></span
      >
    </div>
  </div>
</template>
