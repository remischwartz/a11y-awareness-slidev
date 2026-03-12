export type LayoutProps = {
  image?: string;
  background?: string;
  dim?: boolean;
  backgroundAnimation?: boolean;
  frontmatter?: Record<string, unknown>;
};

export enum LayoutRatio {
  OneToTwo = '1/2',
  OneToThree = '1/3',
  TwoToThree = '2/3',
  OneToFour = '1/4',
  ThreeToFour = '3/4',
  TwoToFive = '2/5',
}

export const LAYOUT_RATIO_GRID: Record<LayoutRatio, string> = {
  [LayoutRatio.OneToTwo]: '1fr 1fr',
  [LayoutRatio.OneToThree]: '1fr 3fr',
  [LayoutRatio.TwoToThree]: '2fr 1fr',
  [LayoutRatio.OneToFour]: '1fr 4fr',
  [LayoutRatio.ThreeToFour]: '3fr 1fr',
  [LayoutRatio.TwoToFive]: '2fr 5fr',
};
