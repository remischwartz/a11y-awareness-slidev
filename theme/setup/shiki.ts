/// dark-plus
import darkPlus from './shiki_dark_plus.json';
import { defineShikiSetup } from '@slidev/types';

export default defineShikiSetup(() => {
  return {
    themes: {
      dark: darkPlus,
    },
  };
});
