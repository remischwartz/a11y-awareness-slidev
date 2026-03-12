<!--
  Usage:

```md
---
layout: end
---

# Title

This shows under the title

::sources::

Link1 : [link-1](https://link.one)  

Link2 : [link-2](https://link.two)  

```

-->

<script setup lang="ts">
import { computed } from 'vue';
import { handleBackground } from '../layoutHelper';
import type { LayoutProps } from '../types';
import defaultBg from '../images/backgrounds/9.jpeg';
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
      <div class="cover-content h-full flex flex col items-end">
        <div class="h-90 cover-polygon p-8 pb-2 pt-40 flex flex-col justify-center">
          <slot />
        </div>
      </div>
      <div class="fixed top-70 left-140">
        <slot name="sources" />
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
