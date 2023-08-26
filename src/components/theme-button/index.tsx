import './index.scss';

import { IThemeButtonProps } from '@constants/types';
import { toggleAppTheme } from '@store/reducers/app-reducer';
import { useDispatchTyped, useSelectorTyped } from '@utils/hooks/redux-hooks';
import { FC } from 'react';

export const ThemeButton: FC<IThemeButtonProps> = ({ className }) => {
  const { theme } = useSelectorTyped((store) => store.app);
  const dispatch = useDispatchTyped();

  const classNames = {
    switcher: `theme__switcher ${theme}`,
    toggler: `theme__toggler ${theme}`,
  };

  function handlerOnClick() {
    dispatch(toggleAppTheme());
  }

  return (
    <div className={className} onClick={handlerOnClick} data-testid='theme-button'>
      <div className={classNames.switcher}>
        <div className={classNames.toggler}></div>
      </div>
    </div>
  );
};
