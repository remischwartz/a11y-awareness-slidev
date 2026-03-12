<script setup lang="ts">
import { computed } from 'vue';
import { handleBackground } from '../layoutHelper';
import type { LayoutProps } from '../types';
import SlideFooter from '../components/SlideFooter.vue';
import defaultBg from '../images/backgrounds/7.jpeg';

const props = defineProps<LayoutProps>();

const style = computed(() =>
  handleBackground({ ...props, background: props.background ?? defaultBg }),
);
</script>

<template>
  <div
    class="slidev-layout fact"
    :style="style"
  >
    <div class="my-auto">
      <slot />
    </div>
  </div>
  <SlideFooter
    :pagination="false"
    :date="false"
    :bottom-line="true"
  />
</template>
