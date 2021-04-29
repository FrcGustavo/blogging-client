type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type BreakpointValues = { [key in Breakpoint]: number };

interface Breakpoints {
  keys: Breakpoint[];
  values: BreakpointValues;
  up: (key: Breakpoint | number) => string;
  down: (key: Breakpoint | number) => string;
}

const breakpoints: Breakpoints = {
  keys: ['xs', 'sm', 'md', 'lg', 'xl'],
  values: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
  },
  up: (key) => {
    const breakpoint = typeof key === 'number' ? key : breakpoints.values[key];
    return `@media screen and (min-width: ${[breakpoint]}px)`;
  },
  down: (key) => {
    const breakpoint = typeof key === 'number' ? key : breakpoints.values[key];
    return `@media screen and (max-width: ${[breakpoint]}px)`;
  },
};

export default breakpoints;
