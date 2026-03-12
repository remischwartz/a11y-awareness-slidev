<script setup lang="ts">
import { computed } from 'vue';
import { handleBackground } from '../layoutHelper';
import type { LayoutProps } from '../types';
import defaultBg from '../images/backgrounds/2.jpeg';
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
    class="slidev-layout image-right w-full h-full"
    :style="style"
  >
    <div class="image-right-content">
      <slot />
    </div>
    <div
      class="image-right-image"
      :style="imageStyle"
    />
  </div>
  <SlideFooter />
</template>
