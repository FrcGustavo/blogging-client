import typography from './typography';

type Spacing = (value: number) => string;

const spacing: Spacing = (value) => {
  return `${typography.htmlFontSize * value}px`;
};

export default spacing;
