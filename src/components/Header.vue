<script setup lang="ts">
import DigidooLogo from "../assets/DigidooLogo.vue";
import MailIcon from "../assets/icons/MailIcon.vue";
import Button from "./Button.vue";
</script>

<template>
  <section class="max-w-[1104px] mx-auto px-6 lg:px-[64px] flex justify-between items-center gap-md">
    <a href="/">
      <DigidooLogo class="w-full m-w-[145px]" />
    </a>
    <div class="flex gap-md">
      <Button theme="secondary" href="https://app.digidoo.com">Anmelden</Button>
      <Button href="mailto:info@digidoo.com">
        <MailIcon class="w-icon h-icon" />
        <span class="hidden sm:inline">Kontaktiere uns</span>
      </Button>
    </div>
  </section>
</template>
