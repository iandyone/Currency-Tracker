import { Theme } from '@appTypes/index';

export function getDiagramColors(theme: Theme) {
  return theme === 'dark' ? '#fff' : 'var(--gray)';
}
