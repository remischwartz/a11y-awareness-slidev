<!--
  Usage:

```md
---
layout: two-cols
ratio: "1/3"  # Optional: "1/2" (default), "1/3", "2/3", "1/4", "3/4", "2/5"
---

# Title

This shows on the top

::left::

# Left

This shows on the left

::right::

# Right

This shows on the right
```

-->

<script setup lang="ts">
import { computed } from 'vue';
import { handleBackground } from '../layoutHelper';
import type { LayoutProps } from '../types';
import { LayoutRatio, LAYOUT_RATIO_GRID } from '../types';
import defaultBg from '../images/backgrounds/5.jpeg';
import SlideFooter from '../components/SlideFooter.vue';

const props = defineProps<LayoutProps & { ratio?: LayoutRatio }>();

const style = computed(() =>
  handleBackground({ ...props, background: props.background ?? defaultBg }),
);

const gridStyle = computed(() => {
  const ratio = props.ratio ?? LayoutRatio.OneToTwo;

  return { gridTemplateColumns: LAYOUT_RATIO_GRID[ratio] };
});
</script>

<template>
  <div
    class="slidev-layout two-cols"
    :style="style"
  >
    <slot />
    <div
      class="two-columns w-full grid gap-4"
      :style="gridStyle"
    >
      <div class="col left">
        <slot name="left" />
      </div>
      <div class="col right">
        <slot name="right" />
      </div>
    </div>
    <div class="mt-6 p-4 text-xs text-center font-100">
      <slot name="note" />
    </div>
  </div>
  <SlideFooter :date="false" />
</template>
