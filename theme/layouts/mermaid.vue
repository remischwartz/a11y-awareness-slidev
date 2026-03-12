<script setup lang="ts">
import { computed } from 'vue';
import { handleBackground } from '../layoutHelper';
import type { LayoutProps } from '../types';
import defaultBg from '../images/backgrounds/4.png';
import SlideFooter from '../components/SlideFooter.vue';

const props = defineProps<LayoutProps>();

const style = computed(() =>
  handleBackground({ ...props, background: props.background ?? defaultBg }),
);
</script>

<template>
  <div
    class="slidev-layout mermaid w-full h-full"
    :style="style"
  >
    <div>
      <slot />
    </div>
  </div>
  <SlideFooter />
</template>
