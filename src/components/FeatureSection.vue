<script lang="ts" setup>
import CheckCircleIcon from "../assets/icons/CheckCircleIcon.vue";
import TwoColumns from "./TwoColumns.vue";

const features = [
  {
    title:
      "sofort mit vordefinierten Kompetenzen für alle Schulstufen loslegen",
  },
  {
    title:
      "die Leistungsfeststellung und deren Visualisierung ganz nach deinen Bedürfnissen gestalten",
  },
  {
    title:
      "im Handumdrehen Einträge für mehrere Schülerinnen und Schüler erstellen",
  },
  {
    title:
      "den Lernfortschritt jederzeit nachvollziehen und anschaulich darstellen",
  },
];
</script>

<template>
  <TwoColumns>
    <template #left>
      <div
        class="relative justify-center lg:justify-start rounded-[64px] bg-[#D3F0FF] aspect-10/9 w-full overflow-visible"
      >
        <img
          src="/macbook-digidoo.png"
          alt="Laptop Prototype"
          class="max-w-none absolute h-full left-[10%]"
        />
      </div>
    </template>
    <template #right>
      <div class="py-8 lg:p-8 mt-8 lg:mt-0">
        <h2
          class="text-title font-semibold mb-xxl lg:mb-[40px] text-primary text-[24px] leading-[130%]"
        >
          Mit Digidoo kannst du...
        </h2>
        <ul class="flex flex-col gap-4">
          <li
            v-for="feature in features"
            class="flex items-start gap-[12px] text-[17px] leading-[160%] text-primary"
          >
            <CheckCircleIcon class="size-icon-md shrink-0" />
            <span>{{ feature.title }}</span>
          </li>
        </ul>
      </div>
    </template>
  </TwoColumns>
</template>
