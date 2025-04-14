<script lang="ts" setup>
import PageTitle from './PageTitle.vue';
import Paragraph from './Paragraph.vue';
</script>

<template>
  <PageTitle title="Impressum" />

  <section class="max-w-[1104px] mx-auto px-8 lg:px-[64px]">
    <div class="flex flex-col gap-[1px]">
      <span class="font-medium text-primary text-title">Digidoo GmbH</span>
      <Paragraph>FN 647532 d</Paragraph>
      <Paragraph>Griesgasse 1</Paragraph>
      <Paragraph>8020 Graz</Paragraph>

      <a class="text-[15px] lg:text-[17px] text-tint underline py-8" href="mailto:info@digidoo.com">info@digidoo.com</a>

      <Paragraph>
        Entwicklung sowie Weiterentwicklung und der Vertrieb von Apps im Bereich (Aus- und Weiter) Bildung sowie
        Personalentwicklung, inklusive Einräumung von Lizenzen an Software und die Erbringung von Dienstleistungen im
        Bereich der Informationstechnologie und der Handel mit Waren aller Art.
      </Paragraph>
    </div>
  </section>

  <section class="max-w-[1104px] mx-auto px-8 lg:px-[64px] mt-8">
    <h2 class="font-medium text-primary text-[18px] lg:text-[22px] text-title mb-[4px]">Urheberrecht</h2>
    <Paragraph>
      Die Inhalte dieser Website sind, soweit gesetzlich möglich, durch unterschiedliche Schutzrechte, wie etwa das
      Urheberrecht, abgesichert. Jegliche Nutzung oder Verbreitung des hier verfügbaren Materials, die nicht durch das
      Urheberrecht erlaubt ist, setzt die schriftliche Zustimmung des Website-Betreibers voraus.
    </Paragraph>
  </section>

  <section class="max-w-[1104px] mx-auto px-8 lg:px-[64px] mt-8">
    <h2 class="font-medium text-primary text-[18px] lg:text-[22px] text-title mb-[4px]">Haftungsausschluss</h2>
    <Paragraph>
      Obwohl wir den Inhalt dieser Website sorgfältig geprüft haben, übernehmen wir keine Verantwortung für die Inhalte
      von externen Links. Die Verantwortung für den Inhalt der verlinkten Seiten liegt ausschließlich bei den jeweiligen
      Betreibern. Sollten Sie dennoch auf Links stoßen, die auf Websites mit unrechtmäßigen Informationen oder
      Aktivitäten verweisen, bitten wir Sie, uns darauf hinzuweisen, damit wir diese gemäß § 17 Abs. 2 ECG
      schnellstmöglich entfernen können.
    </Paragraph>
    <Paragraph>
      Der Betreiber dieser Website legt großen Wert auf die Beachtung der Urheberrechte Dritter. Sollte Ihnen dennoch
      eine potenzielle Urheberrechtsverletzung auffallen, bitten wir Sie, uns dies umgehend mitzuteilen. Bei Bestätigung
      eines solchen Verstoßes werden wir den betreffenden Inhalt sofort von der Website entfernen.
    </Paragraph>
  </section>
</template>
