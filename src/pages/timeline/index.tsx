import './index.scss';

import Banner from '@components/banner';
import { Timeline } from '@components/timeline';
import { withSection } from '@utils/hocs/with-section';
import { Component } from 'react';

class TimelinePage extends Component<object, object> {
  constructor(props: object) {
    super(props);
  }

  render() {
    return (
      <div className='timeline__content'>
        <Banner />

        <Timeline />
      </div>
    );
  }
}

export default withSection(TimelinePage, 'timeline-page');
