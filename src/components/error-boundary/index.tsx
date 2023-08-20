import './index.scss';

import { Spinner } from '@components/loader';
import React, { ReactNode, Suspense } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  error: boolean | string;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { error: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { error: error.message };
  }

  render() {
    if (this.state.error) {
      return (
        <Suspense fallback={<Spinner />}>
          <div className='error'>
            <h1 className='error__title'></h1>
            <p className='error__text'>{this.state.error}</p>
          </div>
        </Suspense>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
