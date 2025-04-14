<template>
  <section class="bg-white overflow-hidden">
    <div
      class="max-w-[1104px] mx-auto px-6 lg:px-8 grid grid-cols-3 md:grid-cols-3 gap-10 items-start"
    >
      <div>
        <slot name="left" />
      </div>

      <div>
        <slot name="center" />
      </div>

      <div>
        <slot name="right" />
      </div>
    </div>
  </section>
</template>
