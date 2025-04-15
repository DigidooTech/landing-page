import {
  defineConfig,
  presetAttributify,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";

function toRem(
  values: Array<string> | string,
  baseSizePx: number = 16,
): Array<string> | string {
  return Array.isArray(values)
    ? values.map((v) => {
        return `${+v.replace("px", "") / baseSizePx}rem`;
      })
    : `${+values.replace("px", "") / baseSizePx}rem`;
}

export default defineConfig({
  transformers: [transformerDirectives(), transformerVariantGroup()],
  presets: [
    presetUno(),
    presetAttributify({
      prefix: "data-un-",
      prefixedOnly: true,
      strict: true,
    }),
  ],
  shortcuts: {
    "text-title": "text-title font-semibold",
    "text-link":
      "flex items-center px-[4px] transition duration-300 text-tint hover:text-tint-hover outline-inner border-b border-tint",
    "text-link-on-tint":
      "flex items-center px-[4px] transition duration-300 text-on-tint hover:text-on-tint/80 outline-inner border-b border-on-tint",
    "shadow-popover": "shadow-[0_8px_32px_0_#20004d1a]",
    "outline-inner":
      "focus:outline-2 focus-visible:outline-tint focus:outline-offset-[-2px]",
    "outline-inner-error":
      "outline outline-2 outline-color-error outline-offset-[-2px]",
    "absolute-center":
      "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
    "state-effects":
      "transition duration-300 outline-inner hover:bg-surface-tertiary active:bg-primary/10",
    "badge-as-button": "rounded-badge state-effects",
    "list-item-as-button":
      "badge-as-button cursor-pointer rounded-2xl flex items-center p-4 text-start",
    "input-text":
      "border-1 m-[1px] py-sm pl-[12px] pr-[16px] min-h-[44px] outline-none border-divider rounded-input focus-visible:border-tint focus-visible:border-2 focus-visible:m-0 disabled:opacity-30 w-full",
    "main-nav-link":
      "size-cell flex flex-col items-center justify-center bg-op-30 text-secondary border border-divider state-effects rounded-xl focus-visible:outline-offset-5 hover:!bg-tint/20",
    "list-item":
      "bg-surface-secondary min-h-list-item flex items-center p-md rounded-2xl",
    "table-cell":
      "px-md py-[12px] last-of-type:rounded-r-lg first-of-type:rounded-l-lg",
    "shadow-popup":
      "shadow-[0_16px_64px_0_rgba(32,0,77,0.15),0_0_1px_0_rgba(0,0,0,0.25)]",
    "shadow-hero":
      "shadow-[0_0_1px_0_rgba(32,0,77,0.15),0_16px_64px_0_rgba(32,0,77,0.15)]",
  },
  theme: {
    animation: {
      keyframes: {
        notification:
          "{0%{background-color:rgb(248 247 250 / 0.1))}50%{background-color: rgb(92 46 229 / 0.1)}100%{background-color:rgb(248 247 250 / 0.1))}}",
      },
      durations: {
        notification: "1s",
      },
      timingFns: {
        notification: "ease-in-out",
      },
      counts: {
        notification: 1,
      },
    },
    fontSize: {
      body: toRem(["16px", "24px"]),
      title: toRem(["22px", "28px"]),
      subtitle: toRem(["18px", "27px"]),
      footer: toRem(["13px", "15.51px"]),
      sm: toRem(["10px", "11.68px"]),
      lg: toRem(["24px", "32px"]),
    },
    spacing: {
      xs: "4px",
      sm: "8px",
      md: "16px",
      lg: "24px",
      xl: "32px",
      xxl: "48px",
      content: "32px",
    },
    height: {
      "icon-button": "32px",
      "icon-xl": "40px",
      "icon-lg": "34px",
      "icon-md": "24px",
      "icon-sm": "20px",
      "icon-xs": "16px",
      "icon-xxs": "8px",
      button: "44px",
      "list-item": "68px",
      "badge-md": "28px",
      "badge-sm": "23px",
      cell: "52px",
      footer: "88px",
      header: "100px",
      icon: "24px",
      avatar: "32px",
      "performance-level": "74px",
    },
    width: {
      "cell-icon": "24px",
      "icon-button": "32px",
      "icon-xl": "40px",
      "icon-lg": "34px",
      "icon-md": "24px",
      "icon-sm": "20px",
      "icon-xs": "16px",
      "icon-xxs": "8px",
      cell: "52px",
      icon: "24px",
      "badge-sm": "36px",
      button: "44px",
      "badge-md": "47px",
      avatar: "32px",
      "performance-level": "74px",
    },
    borderRadius: {
      badge: "32px",
      input: "8px",
      checkbox: "4px",
      button: "9999px",
      sm: "8px",
      md: "12px",
      panel: "12px",
      group: "12px",
      dialog: "24px",
    },
    textColor: {
      primary: "#241F33",
      secondary: "#8D8998",
      muted: "#8D8998",
      tertiary: "#E2E1E5",
      "on-tint": "#FFFFFF",
      tint: "#5C2EE5",
    },
    borderColor: {
      divider: "#E2E1E5",
      primary: "#5C2EE5",
      secondary: "#F8F7FA",
      tertiary: "#F1F0F5",
      "on-tint": "#FFFFFF",
      tint: "#5C2EE5",
      "tint-hover": "#5229CC",
      "tint-active": "#2900A3",
    },
    backgroundColor: {
      primary: "#5C2EE5",
      secondary: "#8D8998",
      surface: {
        border: "#E2E1E5",
        primary: "#FFFFFF",
        secondary: "#F8F7FA",
        tertiary: "#F1F0F5",
        warning: "#FA7E25",
      },
      tint: "#5C2EE5",
      "tint-hover": "#5229CC",
      "tint-active": "#2900A3",
    },
    colors: {
      error: "#FA3C32",
      tint: "#5C2EE5",
      "tint-hover": "#5229CC",
      "tint-active": "#2900A3",
      primary: "#241F33",
      "primary-hover": "#6B6180",
      "primary-active": "#0A0812",
      warning: "#FA7E25",
      base: {
        green: "#12B27D",
      },
    },
  },
});
