<script setup lang="ts">
import AnalyzeIcon from "../assets/icons/AnalyzeIcon.vue";
import PlantIcon from "../assets/icons/PlantIcon.vue";
import RocketIcon from "../assets/icons/RocketIcon.vue";
import IconText from "./IconText.vue";
import ThreeColumns from "./ThreeColumns.vue";
</script>

<template>
  <ThreeColumns class="lg:pb-12">
    <template #left>
      <IconText>
        <template #icon>
          <RocketIcon class="max-w-[80px] max-h-[80px] lg:max-w-full lg:max-h-full"/>
        </template>
        <template #text>
          <h3 class="text-[16px] lg:text-[22px] text-title text-center font-medium">Lege sofort los</h3>
        </template>
      </IconText>
    </template>
    <template #center>
      <IconText>
        <template #icon>
          <PlantIcon class="max-w-[80px] max-h-[80px] lg:max-w-full lg:max-h-full"/>
        </template>
        <template #text>
          <h3 class="text-[16px] lg:text-[22px] text-title text-center font-medium">
            So individuell<br />wie dein Unterricht
          </h3>
        </template>
      </IconText>
    </template>
    <template #right>
      <IconText>
        <template #icon>
          <AnalyzeIcon class="max-w-[80px] max-h-[80px] lg:max-w-full lg:max-h-full"/>
        </template>
        <template #text>
          <h3 class="text-[16px] lg:text-[22px] text-title text-center font-medium">
            Alle Fortschritte<br />klar im Blick
          </h3>
        </template>
      </IconText>
    </template>
  </ThreeColumns>
</template>
