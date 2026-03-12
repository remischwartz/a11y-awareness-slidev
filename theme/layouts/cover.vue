<script setup lang="ts">
import { computed } from 'vue';
import { handleBackground } from '../layoutHelper';
import type { LayoutProps } from '../types';
import defaultBg from '../images/backgrounds/10.jpeg';
import SlideFooter from '../components/SlideFooter.vue';
import EYBottomLine from '../components/EYBottomLine.vue';

const props = defineProps<LayoutProps>();

const style = computed(() =>
  handleBackground({ ...props, background: props.background ?? defaultBg }),
);
</script>

<template>
  <div
    class="slidev-layout cover"
    :style="style"
  >
    <div class="h-[calc(100vh - 4rem)] w-[50%] flex justify-between flex-col gap-8">
      <div class="h-90 cover-polygon p-8 pb-2 pt-30 flex flex-col justify-center">
        <div class="h-90 p-8 pt-36">
          <slot />
        </div>
      </div>
      <EYBottomLine />
    </div>
    <SlideFooter
      logo="dark"
      :pagination="false"
      :date="false"
    />
  </div>
</template>
