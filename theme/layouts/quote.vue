<script setup lang="ts">
import { computed } from 'vue';
import { handleBackground } from '../layoutHelper';
import type { LayoutProps } from '../types';
import SlideFooter from '../components/SlideFooter.vue';
import defaultBg from '../images/backgrounds/11.jpeg';

const props = defineProps<LayoutProps>();

const style = computed(() =>
  handleBackground({ ...props, background: props.background ?? defaultBg }),
);
</script>

<template>
  <div
    class="slidev-layout quote"
    :style="style"
  >
    <div class="my-auto mx-auto text-center">
      <slot />
    </div>
  </div>
  <SlideFooter />
</template>
