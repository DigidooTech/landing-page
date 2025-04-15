<script lang="ts" setup>
import CompetenceSection from "./CompetenceSection.vue";
import ContactSection from "./ContactSection.vue";
import FeatureSelection from "./FeatureSection.vue";
import HeroImage from "./HeroImageSection.vue";
import IconSection from "./IconSection.vue";
import PerformanceAssessmentSection from "./PerformanceAssessmentSection.vue";
import StatisticsSection from "./StatisticsSection.vue";
import TestimonialSection from "./TestimonialSection.vue";
import Text from "./TextSection.vue";
</script>

<template>
  <HeroImage class="mt-10 lg:mt-16" />
  <Text
    class="mt-10 lg:mt-16"
    text="Du willst den Lernfortschritt deiner Schülerinnen und Schüler schnell und einfach festhalten – und Papier und Excel sind auf Dauer keine Lösung? Dann ist Digidoo genau das Richtige für dich!"
  />
  <FeatureSelection class="mt-10 lg:mt-16 overflow-hidden" />
  <IconSection class="mt-10 lg:mt-16" />
  <CompetenceSection class="mt-10 lg:mt-16" />
  <TestimonialSection class="mt-10 lg:mt-16" />
  <PerformanceAssessmentSection class="mt-10 lg:mt-16" />
  <StatisticsSection class="mt-10 lg:mt-16" />
  <ContactSection class="mt-10 lg:mt-16" />
</template>
