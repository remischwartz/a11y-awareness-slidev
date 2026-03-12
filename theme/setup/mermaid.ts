import { defineMermaidSetup } from '@slidev/types';
import { colors } from './unocss';

export default defineMermaidSetup(() => {
  return {
    theme: 'dark',
    fontFamily: 'EYInterstate',
    themeVariables: {
      primaryColor: colors.blue,
      primaryTextColor: colors.white,
      primaryBorderColor: colors.dark,
      lineColor: colors.yellow,
      secondaryColor: colors.orange,
      tertiaryColor: colors.blue,
      pie1: colors.blue,
      pie2: colors.red,
      pie3: colors.orange,
      pie4: colors.green,
      pie5: colors.cyan,
      pie6: colors.fuchsia,
      pie7: colors.yellow,
      pie8: colors.purple,
      pieStrokeWidth: '0.5px',
      pieTitleTextSize: '1rem',
      pieLegendTextSize: '0.75rem',
      pieSectionTextSize: '0.75rem',
    },
  };
});
