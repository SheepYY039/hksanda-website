// Generated by Nuxt'
import type { Plugin } from '#app'

type Decorate<T extends Record<string, any>> = { [K in keyof T as K extends string ? `$${K}` : never]: T[K] }

type InjectionType<A extends Plugin> = A extends Plugin<infer T> ? Decorate<T> : unknown

type NuxtAppInjections = 
  InjectionType<typeof import("../../node_modules/@pinia/nuxt/dist/runtime/plugin.vue3").default> &
  InjectionType<typeof import("../components.plugin").default> &
  InjectionType<typeof import("../../node_modules/nuxt/dist/head/runtime/plugins/unhead").default> &
  InjectionType<typeof import("../../node_modules/nuxt/dist/pages/runtime/plugins/router").default> &
  InjectionType<typeof import("../../node_modules/nuxt/dist/pages/runtime/plugins/prefetch.client").default> &
  InjectionType<typeof import("../../node_modules/@nuxtjs/apollo/dist/runtime/plugin").default> &
  InjectionType<typeof import("../../node_modules/nuxt/dist/app/plugins/chunk-reload.client").default> &
  InjectionType<typeof import("../../plugins/apollo-client").default> &
  InjectionType<typeof import("../../plugins/bootstrap-vue.client").default> &
  InjectionType<typeof import("../../plugins/masonry").default> &
  InjectionType<typeof import("../../plugins/md-icons").default> &
  InjectionType<typeof import("../../plugins/primevue").default> &
  InjectionType<typeof import("../../plugins/vue-social-chat").default>

declare module '#app' {
  interface NuxtApp extends NuxtAppInjections { }
}

declare module 'vue' {
  interface ComponentCustomProperties extends NuxtAppInjections { }
}
// TODO: remove when webstorm has support for augumenting 'vue' directly
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties extends NuxtAppInjections { }
}

export { }
