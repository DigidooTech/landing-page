<script setup lang="ts">
withDefaults(
  defineProps<{
    theme?: "primary" | "secondary" | "text" | "link" | "error";
    href?: string;
  }>(),
  {
    type: "button",
    theme: "primary",
    href: "/",
  },
);
</script>

<template>
  <a
    :href="href"
    :class="[
      'flex gap-[8px] h-button items-center',
      'rounded-button border-1',
      'px-[16px] py-[8px]',
      'transition duration-300',
      'font-medium',
      'focus:outline-2',
      'focus-visible:outline-offset-[3px]',
      'outline-tint/25',
      theme === 'primary' && [
        'text-on-tint',
        'border-tint',
        'bg-tint',
        'hover:border-tint-hover',
        'hover:bg-tint-hover',
        'active:bg-tint-active',
        'disabled:bg-surface-tertiary',
        'disabled:border-tertiary',
        'disabled:text-secondary',
      ],
      theme === 'secondary' && [
        'text-primary',
        'bg-surface-primary',
        'border-divider',
        'hover:bg-surface-secondary',
        'active:bg-surface-tertiary',
        'disabled:text-secondary',
      ],
      theme === 'error' && [
        'text-error',
        'border-divider',
        'hover:bg-transparent',
        'hover:text-secondary',
        'disabled:text-secondary',
      ],
      theme === 'link' && [
        'text-link',
        '!font-normal',
        'underline',
        'underline-offset-[4px]',
        'border-0',
        '!py-0',
        'px-1',
        '!h-min',
        'hover:border-tint-hover',
        'hover:text-tint-hover',
        'focus-visible:outline-offset-[4px]',
        'disabled:text-tertiary',
      ],
      theme === 'text' && [
        'text-tint',
        'border-transparent',
        'bg-transparent',
        'hover:text-tint-hover',
        'active:text-tint-active',
        'disabled:text-secondary',
      ],
    ]"
  >
    <slot></slot>
  </a>
</template>
