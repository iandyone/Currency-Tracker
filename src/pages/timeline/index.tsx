import './index.scss';

import Banner from '@components/banner';
import { withSection } from '@utils/hocs/with-section';
import { Component } from 'react';

class TimelinePage extends Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className='timeline__content'>
        <Banner />
        <h1>Timeline page</h1>
      </div>
    );
  }
}

export default withSection(TimelinePage, 'timeline');
