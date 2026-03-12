import type { PresetMiniTheme } from 'unocss';
/* ============================================
   EY  Tokens (from EY Studio+)
   ============================================ */
export const colors = {
  black: '#1a1a24',
  white: '#ffffff',
  yellow: '#ffe600',
  dark: '#2e2e38',
  green: '#2db757',
  teal: '#27acaa',
  blue: '#188ce5',
  purple: '#ff00bf',
  red: '#ff4136',
  orange: '#ff6d00',
  fuchsia: '#ff32ff',
  cyan: '#32ffff',
} as const;

const theme: PresetMiniTheme = {
  colors,
  fontSize: {
    '3xl': '1.5rem',
    '2xl': '1.375rem',
    xl: '1.25rem',
    lg: '1.125rem',
    DEFAULT: '1rem',
    sm: '0.875rem',
    xs: '0.75rem',
    xxs: '0.625rem',
  },
};

export default (): { theme: PresetMiniTheme } => ({
  theme,
});
