import typography from './typography';

type Spacing = (value: number, value2?: number) => string;

const spacing: Spacing = (value, value2) => {
  if (value2) {
    return `${typography.htmlFontSize * value}px ${
      typography.htmlFontSize * value2
    }px`;
  }
  return `${typography.htmlFontSize * value}px`;
};

export default spacing;
