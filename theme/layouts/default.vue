<script setup lang="ts">
import { computed } from 'vue';
import { handleBackground } from '../layoutHelper';
import type { LayoutProps } from '../types';
import defaultBg from '../images/backgrounds/1.jpeg';
import SlideFooter from '../components/SlideFooter.vue';
import GlobalSvgFilters from '../components/GlobalSvgFilters.vue';

const props = defineProps<LayoutProps>();

const style = computed(() =>
  handleBackground({ ...props, background: props.background ?? defaultBg }),
);
</script>

<template>
  <GlobalSvgFilters />
  <div
    class="slidev-layout default w-full h-full"
    :style="style"
  >
    <div>
      <slot />
    </div>
  </div>
  <SlideFooter />
</template>
