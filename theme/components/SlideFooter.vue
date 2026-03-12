<script setup lang="ts">
import { useNav } from '@slidev/client';
import eyLogoDark from '../images/ey-studio+.png';
import eyLogoLight from '../images/ey-studio+_light.png';
import EYBottomLine from './EYBottomLine.vue';

interface SlideFooterProps {
  /** Show slide number */
  pagination?: boolean;
  /** Show date */
  date?: boolean;
  /** Show EY logo */
  logo?: 'light' | 'dark' | false;
  bottomLine?: boolean;
}

const props = withDefaults(defineProps<SlideFooterProps>(), {
  pagination: true,
  date: true,
  logo: 'light',
  bottomLine: false,
});

const { currentPage } = useNav();

const now = new Date();
const formattedDate = now.toLocaleDateString('fr-FR', {
  day: '2-digit',
  month: 'long',
  year: 'numeric',
});

const logoSrc = props.logo === 'light' ? eyLogoLight : eyLogoDark;
</script>

<template>
  <div
    v-if="pagination || date || props.bottomLine"
    class="absolute bottom-8 left-8 z-20 text-white bottom-line font-100"
  >
    <p>
      <span v-if="pagination">{{ currentPage }}</span>
      <span v-if="date">{{ formattedDate }}</span>
      <span v-if="props.bottomLine">
        <EYBottomLine />
      </span>
    </p>
  </div>
  <div
    v-if="logo"
    :class="logo === 'light' ? 'ey-logo-light' : 'ey-logo'"
  >
    <img
      :src="logoSrc"
      alt="EY Studio+"
    />
  </div>
</template>
