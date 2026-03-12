import type { CSSProperties } from 'vue';
import type { LayoutProps } from './types';

/**
 * Resolve urls from frontmatter and append with the base url
 */
export function resolveAssetUrl(url: string): string {
  if (url.startsWith('/')) {
    return import.meta.env.BASE_URL + url.slice(1);
  }
  return url;
}

export function handleBackground({
  background,
  dim,
  backgroundAnimation,
}: LayoutProps): CSSProperties {
  const isBackgroundDefined = typeof background === 'string' && background.length > 0;
  const isColor =
    isBackgroundDefined && ['#', 'rgb', 'hsl'].some((v) => background.indexOf(v) === 0);

  const style: CSSProperties & { background?: string } = {
    background: isColor ? background : undefined,
    color: isBackgroundDefined && !isColor ? 'white' : undefined,
    backgroundImage: isColor
      ? undefined
      : isBackgroundDefined
        ? dim === true
          ? `linear-gradient(#0005, #0008), url(${resolveAssetUrl(background)})`
          : `url("${resolveAssetUrl(background)}")`
        : undefined,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    animation: backgroundAnimation === true ? '300s background-animation infinite' : 'none',
  };

  if (style.background === undefined) {
    delete style.background;
  }

  return style;
}
