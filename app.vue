<template>
  <div id="app-user" class="min-h-screen bg-blue-mountain bg-cover">
    <SchemaOrgOrganization name="香港極拳道武術協會" logo="/logo.png" :same-as="[
      'https://www.facebook.com/people/%E6%95%A3%E6%89%93%E8%87%AA%E8%A1%9B%E8%A1%93%E8%A8%93%E7%B7%B4%E7%8F%AD/100057130702824/',
      'https://www.hksanda.com',
    ]" />
    <SchemaOrgWebSite name="香港極拳道武術協會 | 中國武術散打、功夫、自衛術（香港）" alternateName="香港極拳道武術協會" />
    <SchemaOrgWebPage />
    <div aria-hidden="true" class="bg__text-outer -z-20 hidden sm:block">
      <div id="bg__text-1" class="bg__text select-none">勇敢</div>
      <div id="bg__text-2" class="bg__text select-none">自信</div>
      <div id="bg__text-3" class="bg__text select-none">不怕苦</div>
      <div id="bg__text-4" class="bg__text select-none">敢於拼搏</div>
    </div>
    <div class="flex w-screen flex-col overflow-y-scroll">
      <navigation />
      <!--<breadcrumb class="lg:hidden" />-->
      <main
        class="main z-10 m-auto h-auto w-screen p-2 md:min-w-[80vw] md:max-w-[95vw] flex-grow justify-center bg-gradient-to-br from-background to-transparent lg:max-w-[75vw]">
        <!-- role="main" -->
        <!-- Yellow Frame  -->
        <div class="md:m-2 w-full">
          <!-- Outer margin -->
          <Breadcrumb class="hidden lg:block" />
          <Breadcrumbs class="hidden">
            <template #breadcrumb="{ to, title, first }">
              {{ first ? "" : " / " }}
              <NuxtLink :to="to">
                {{ chinese.s2t(decodeURI(title)) }}
              </NuxtLink>
            </template>
          </Breadcrumbs>
          <!-- Scroll Frame  -->
          <div class="w-full md:p-2">
            <!-- Outer Border -->
            <div class="m-auto md:border-4 md:border-solid md:border-text-color md:p-[0.32rem]">
              <!-- Inner Border -->
              <div class="body md:border md:border-solid md:border-text-color md:p-6">
                <SeoKit />
                <!-- a. Generates browser screenshots for every page -->
                <OgImageScreenshot />
                <nuxt-page />
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </main>
      <whatsapp-chat />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Navigation, Breadcrumb, Footer } from "#components";
import { initFlowbite } from "flowbite";
import chinese from "s2t-chinese";

defineRobotMeta();

useHead({
  // ... or as a function
  titleTemplate: (title: str) => {
    return title
      ? `${title} | 香港極拳道武術協會 | 中國武術散打、功夫、自衛術`
      : "香港極拳道武術協會 | 中國武術散打、功夫、自衛術";
  },
});

// 1. make sure you have some meta
useSeoMeta({
  title: "香港極拳道武術協會 | 中國武術散打、功夫、自衛術（香港）",
  description:
    "「香港極拳道武術協會」是香港政府及體育協會暨奧林匹克委員會認可及資助的體育總會「香港武術聯會」及「香港泰拳理事會」認可之屬會會員。本會推廣『散打自衛術』是香港政府認可及資助的武術運動項目之一。",
});
// 2a. Use the Composition API
// defineOgImageStatic();

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
});
</script>

<style lang="scss">
@import "@/assets/scss/bg_text.scss";
@import "@/assets/scss/link.scss";

[aria-label="Breadcrumb"]>ul {
  display: flex;
}
</style>