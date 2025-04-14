<script setup lang="ts">
import MailIcon from "../assets/icons/MailIcon.vue";
import Paragraph from "./Paragraph.vue";
</script>

<template>
  <section class="max-w-[1104px] mx-auto px-6 lg:px-8 items-center">
    <div class="flex flex-col lg:flex-row gap-xl lg:gap-[64px] w-full p-8 lg:p-[64px] bg-[#D3F0FF] rounded-[64px]">
      <img src="/contact-us.png" alt="Contact Us"
        class="w-[124px] h-[124px] object-cover rounded-full border-[8px] border-white" />
      <div class="flex flex-col gap-sm">
        <span class="text-[18px] lg:text-[22px] text-title font-medium text-primary">Du bist interessiert?</span>
        <Paragraph >
          Wir zeigen dir gerne, wie du mit Digidoo ganz einfach in eine neue,
          digitale Ära der Lernfortschrittsdokumentation durchstartest.
        </Paragraph>
        <a href="mailto:info@digidoo.com" class="flex gap-2 items-center text-tint font-semibold hover:underline">
          <MailIcon /> info@digidoo.com
        </a>
      </div>
    </div>
  </section>
</template>
