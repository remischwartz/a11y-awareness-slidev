<script setup lang="ts">
import { computed } from 'vue';
import { handleBackground } from '../layoutHelper';
import type { LayoutProps } from '../types';
import defaultBg from '../images/backgrounds/3.png';
import SlideFooter from '../components/SlideFooter.vue';

const props = defineProps<LayoutProps>();

const style = computed(() =>
  handleBackground({ ...props, background: props.background ?? defaultBg }),
);

const imageStyle = computed(() => ({
  backgroundImage: `url(${props.image ?? ''})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}));
</script>

<template>
  <div
    class="slidev-layout image-left w-full h-full"
    :style="style"
  >
    <div
      class="image-left-image"
      :style="imageStyle"
    />
    <div class="image-left-content">
      <slot />
    </div>
  </div>
  <SlideFooter />
</template>
