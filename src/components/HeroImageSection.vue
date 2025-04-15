<script setup lang="ts">
import MailIcon from "../assets/icons/MailIcon.vue";
import Button from "./Button.vue";
</script>
<template>
  <section
    class="max-w-[1104px] mx-auto px-6 lg:px-8 items-center relative rounded-[64px] overflow-hidden lg:min-h-[400px] drop-shadow-xl"
  >
    <div class="absolute inset-0 px-6 lg:px-8">
      <img
        class="h-full w-full object-cover object-center rounded-[48px]"
        src="/hero-background.jpg"
        alt="Hero Image"
      />
    </div>
    <div
      class="relative z-10 bg-opacity-50 h-full flex flex-col justify-center p-8 md:p-16 lg:p-20 lg:min-h-[400px]"
    >
      <div class="flex flex-col gap-4">
        <h1
          class="text-white text-2xl md:text-4xl lg:text-5xl font-semibold mb-4"
        >
          Einfach<br />Lernfortschritte<br />festhalten.
        </h1>
        <div class="w-fit">
          <Button href="mailto:info@digidoo.com">
            <MailIcon class="w-icon h-icon" />
            <span>Kontaktiere uns</span>
          </Button>
        </div>
      </div>
    </div>
  </section>
</template>
