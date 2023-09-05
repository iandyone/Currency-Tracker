import './index.scss';

import Banner from '@components/Banner';
import { Timeline } from '@components/Timeline';
import { withSection } from '@utils/hocs/withSection';
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

export default withSection(TimelinePage, 'timeline-page', 'timeline-page');
