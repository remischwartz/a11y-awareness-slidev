import { defineAppSetup } from '@slidev/types';
import GlobalSvgFilters from '../components/GlobalSvgFilters.vue';

export default defineAppSetup(({ app }) => {
  app.component('GlobalSvgFilters', GlobalSvgFilters);
});
