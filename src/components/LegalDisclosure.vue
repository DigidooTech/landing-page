<script lang="ts" setup>
import PageTitle from "./PageTitle.vue";
import Paragraph from "./Paragraph.vue";
</script>

<template>
  <PageTitle title="Impressum" />

  <section class="max-w-[1104px] mx-auto px-8 lg:px-[64px]">
    <div class="flex flex-col gap-[1px]">
      <span class="font-medium text-primary text-title">Digidoo GmbH</span>
      <Paragraph>FN 647532 d</Paragraph>
      <Paragraph>Griesgasse 1</Paragraph>
      <Paragraph>8020 Graz</Paragraph>
      <Paragraph>Österreich</Paragraph>

      <Paragraph class="mt-8"
        ><a class="font-semibold">Firmenbuchnummer</a>: FN 647532 d</Paragraph
      >
      <Paragraph
        ><a class="font-semibold">UID-Nummer</a>: ATU81875339</Paragraph
      >
      <Paragraph
        ><a class="font-semibold">Geschäftsführer</a>: Moritz Hiebl</Paragraph
      >
      <Paragraph
        ><a class="font-semibold">E-Mail</a>:
        <a
          class="text-[15px] lg:text-[17px] text-tint underline py-8"
          href="mailto:info@digidoo.com"
          >info@digidoo.com</a
        ></Paragraph
      >
      <Paragraph
        ><a class="font-semibold">Web</a>:
        <a class="text-[15px] lg:text-[17px] text-tint underline py-8" href="/"
          >www.digidoo.com</a
        >
      </Paragraph>
    </div>
  </section>

  <section class="max-w-[1104px] mx-auto px-8 lg:px-[64px] mt-8">
    <h2
      class="font-medium text-primary text-[18px] lg:text-[22px] text-title mb-[4px]"
    >
      Zuständige Aufsichtsbehörde:
    </h2>
    <Paragraph
      >Entwicklung sowie Weiterentwicklung und der Vertrieb von Apps im Bereich
      (Aus- und Weiter) Bildung sowie Personalentwicklung, inklusive Einräumung
      von Lizenzen an Software und die Erbringung von Dienstleistungen im
      Bereich der Informationstechnologie und der Handel mit Waren aller
      Art.</Paragraph
    >
  </section>

  <section class="max-w-[1104px] mx-auto px-8 lg:px-[64px] mt-8">
    <h2
      class="font-medium text-primary text-[18px] lg:text-[22px] text-title mb-[4px]"
    >
      Unternehmengegenstand
    </h2>
    <Paragraph
      >Bezirkshauptmannschaft Graz-Umgebung<br />
      Mitglied der WKO Steiermark, Fachgruppe Informationstechnologie</Paragraph
    >
  </section>

  <section class="max-w-[1104px] mx-auto px-8 lg:px-[64px] mt-8">
    <h2
      class="font-medium text-primary text-[18px] lg:text-[22px] text-title mb-[4px]"
    >
      Anwendbare Rechtsvorschriften:
    </h2>
    <Paragraph
      >Gewerbeordnung (abrufbar unter
      <a
        class="text-[15px] lg:text-[17px] text-tint underline py-8"
        href="http://www.ris.bka.gv.at"
        rel="nofollow"
        >http://www.ris.bka.gv.at</a
      >
      )</Paragraph
    >
  </section>

  <section class="max-w-[1104px] mx-auto px-8 lg:px-[64px] mt-8">
    <h2
      class="font-medium text-primary text-[18px] lg:text-[22px] text-title mb-[4px]"
    >
      Online-Streitbeilegung:
    </h2>
    <Paragraph
      >Verbraucher:innen können Beschwerden an die
      Online-Streitbeilegungsplattform der EU richten:
      <a
        class="text-[15px] lg:text-[17px] text-tint underline py-8"
        href="http://ec.europa.eu/odr"
        rel="nofollow"
        >http://ec.europa.eu/odr</a
      ></Paragraph
    >
  </section>

  <section class="max-w-[1104px] mx-auto px-8 lg:px-[64px] mt-8">
    <h2
      class="font-medium text-primary text-[18px] lg:text-[22px] text-title mb-[4px]"
    >
      Urheberrecht & Haftung:
    </h2>
    <Paragraph>
      Die Inhalte dieser Website sind – soweit gesetzlich möglich –
      urheberrechtlich geschützt. Jegliche Nutzung, die über gesetzliche
      Ausnahmen hinausgeht, erfordert die vorherige schriftliche Zustimmung der
      Digidoo GmbH.
      <br /><br />Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine
      Haftung für externe Links. Für die Inhalte verlinkter Seiten sind
      ausschließlich deren Betreiber verantwortlich. Sollten Sie auf
      rechtswidrige Inhalte stoßen, informieren Sie uns bitte – wir entfernen
      entsprechende Links gemäß § 17 Abs. 2 ECG umgehend.<br /><br />Die Digidoo
      GmbH achtet auf die Einhaltung von Urheberrechten Dritter. Bei
      Bekanntwerden etwaiger Verstöße bitten wir um Hinweis, damit entsprechende
      Inhalte sofort entfernt werden können.
    </Paragraph>
  </section>
</template>
