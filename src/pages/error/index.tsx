import { withSection } from '@utils/hocs/withSection';
import { FC } from 'react';

const ErrorPage: FC = () => {
  return <h1>Error page</h1>;
};

export default withSection(ErrorPage, 'error', 'error-page');
