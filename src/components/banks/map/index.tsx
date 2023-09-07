import './index.scss';

import { IMapProps } from '@components/Banks/Map/types';
import { BankMaps } from '@constants/enums';
import { checkBanksWithCurrencies } from '@utils/helpers/checkBanksWithCurrenciess';
import mapboxgl from 'mapbox-gl';
import { createRef, PureComponent } from 'react';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKKEN;

export class Map extends PureComponent<IMapProps, object> {
  private mapContainer: React.RefObject<HTMLDivElement>;
  private map: mapboxgl.Map;

  constructor(props: IMapProps) {
    super(props);
    this.mapContainer = createRef();
  }

  componentDidMount() {
    const data = { lng: 27.5676, lat: 53.9058, zoom: 10.65 };

    this.map = new mapboxgl.Map({
      container: this.mapContainer.current,
      center: [data.lng, data.lat],
      style: BankMaps.ALL,
      zoom: data.zoom,
    });

    const navControl = new mapboxgl.NavigationControl();
    this.map.addControl(navControl, 'top-right');
  }

  componentDidUpdate() {
    const mapStyle = checkBanksWithCurrencies(this.props.currency);
    this.map.setStyle(mapStyle);
  }

  render() {
    return (
      <div className='map'>
        <div ref={this.mapContainer} className='map__container container' />
      </div>
    );
  }
}
