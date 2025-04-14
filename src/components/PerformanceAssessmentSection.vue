<script lang="ts" setup>
import CheckCircleIcon from "../assets/icons/CheckCircleIcon.vue";
import Paragraph from "./Paragraph.vue";
import TwoColumns from "./TwoColumns.vue";
</script>

<template>
  <TwoColumns>
    <template #left>
      <div
        class="relative justify-center lg:justify-start aspect-10/9 w-full bg-[#D3F0FF] rounded-[64px] overflow-visible">
        <img src="/teaching.png" alt="Laptop Prototype"
          class="h-full w-full object-cover object-center rounded-[64px]" />
      </div>
    </template>
    <template #right>
      <div class="lg:px-16 py-8 flex flex-col justify-center items-start gap-md">
        <span class="text-[18px] lg:text-[22px] font-medium text-tint text-title">Individuelle<br />Leistungsfeststellung</span>
        <h2 class="text-[28px] lg:text-[40px] font-semibold lg:mb-4 text-primary">
          So individuell<br />wie dein<br />Unterricht
        </h2>
        <Paragraph>
          Mit Digidoo bestimmst du selbst, wie du Leistungen festhältst,
          darstellst und welchen Einfluss sie auf die Endbeurteilung haben.
          Mehrere Lehrerinnen in einer Klasse, oder individuelle Kompetenzen für
          einzelne Schüler? Kein Problem mit Digidoo.
        </Paragraph>
      </div>
    </template>
  </TwoColumns>
</template>
