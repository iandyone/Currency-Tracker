import './index.scss';

import { IThemeButtonProps, Theme } from '@appTypes/index';
import { useDispatchTyped, useSelectorTyped } from '@hooks/reduxHooks';
import { toggleAppTheme } from '@store/reducers';
import { FC } from 'react';

export const ThemeButton: FC<IThemeButtonProps> = ({ className }) => {
  const { theme } = useSelectorTyped((store) => store.app);
  const dispatch = useDispatchTyped();

  const classNames = {
    switcher: `theme__switcher ${theme}`,
    toggler: `theme__toggler ${theme}`,
  };

  function handlerOnClick() {
    const newTheme: Theme = theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);
    dispatch(toggleAppTheme(newTheme));
  }

  return (
    <div className={className} onClick={handlerOnClick} data-testid='theme-button'>
      <div className={classNames.switcher}>
        <div className={classNames.toggler}></div>
      </div>
    </div>
  );
};
