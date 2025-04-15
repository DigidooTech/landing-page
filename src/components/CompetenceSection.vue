<script lang="ts" setup>
import CheckCircleIcon from "../assets/icons/CheckCircleIcon.vue";
import Paragraph from "./Paragraph.vue";
import TwoColumns from "./TwoColumns.vue";
</script>

<template>
  <TwoColumns>
    <template #left>
      <div
        class="lg:px-16 py-8 flex flex-col justify-center items-start gap-md"
      >
        <span
          class="text-[18px] lg:text-[22px] font-medium text-tint text-title"
          >Kompetenzen</span
        >
        <h2
          class="text-[28px] lg:text-[40px] font-semibold lg:mb-4 text-primary"
        >
          Lege sofort los
        </h2>
        <Paragraph>
          Mit unseren Kompetenzvorlagen legst du sofort los. Du kannst sie
          einfach übernehmen oder individuell erweitern und anpassen – und das
          für dich oder zentral für deine gesamte Schule. So kannst dich wieder
          auf das Wesentliche konzentrieren: Deine Schülerinnen und Schüler.
        </Paragraph>
      </div>
    </template>
    <template #right>
      <div
        class="relative justify-center lg:justify-start aspect-10/9 w-full border border-[rgba(0,0,0,0.10)] rounded-[64px] overflow-visible"
      >
        <img
          src="/student-screen-blurred.png"
          alt="Laptop Prototype"
          class="w-full h-full rounded-[64px] filter blur-4"
        />
        <img
          class="absolute -top-[7%] -left-[6%] w-[65%] z-10 drop-shadow-xl"
          src="/magnifying_glasses_competences.png"
          alt="Laptop Prototype"
        />
      </div>
    </template>
  </TwoColumns>
</template>
