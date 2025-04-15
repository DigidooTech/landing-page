<template>
  <section class="bg-white">
    <div
      class="max-w-[1104px] mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center"
    >
      <div>
        <slot name="left" />
      </div>

      <div>
        <slot name="right" />
      </div>
    </div>
  </section>
</template>
