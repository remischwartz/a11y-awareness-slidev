<!--
  Usage:

```md
---
layout: three-cols
---

# Title

This shows on the top

::left::

# Left

This shows on the left

::center::

# Center

This shows on the center

::right::

# Right

This shows on the right
```

-->

<script setup lang="ts">
import { computed } from 'vue';
import { handleBackground } from '../layoutHelper';
import type { LayoutProps } from '../types';
import SlideFooter from '../components/SlideFooter.vue';
import defaultBg from '../images/backgrounds/12.jpeg';

const props = defineProps<LayoutProps>();

const style = computed(() =>
  handleBackground({ ...props, background: props.background ?? defaultBg }),
);
</script>

<template>
  <div
    class="slidev-layout three-cols"
    :style="style"
  >
    <slot />
    <div class="w-full grid grid-cols-3 gap-4">
      <div class="col left">
        <slot name="left" />
      </div>
      <div class="col center">
        <slot name="center" />
      </div>
      <div class="col right">
        <slot name="right" />
      </div>
    </div>
  </div>
  <SlideFooter :date="false" />
</template>
