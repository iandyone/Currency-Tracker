import './index.scss';

import { BankMaps, CurrenciesList } from '@constants/types';
import mapboxgl from 'mapbox-gl';
import { createRef, PureComponent } from 'react';
mapboxgl.accessToken = 'pk.eyJ1IjoiaWFuZHlvbmUiLCJhIjoiY2xsdXU2cXJwMW5ndDNrdGhyeWF5a3M3bSJ9.oZ9P-mgq16XfJIq5E2x2zA';

interface IMapProps {
  currency: string;
}

export class Map extends PureComponent<IMapProps, object> {
  private mapContainer: React.RefObject<HTMLDivElement>;
  private map: mapboxgl.Map;
  private mapData: { lng: 27.5676; lat: 53.9058; zoom: 10.65 };

  constructor(props: IMapProps) {
    super(props);
    this.mapContainer = createRef();
  }

  componentDidMount() {
    const data = { lng: 27.5676, lat: 53.9058, zoom: 10.65 };

    this.map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: BankMaps.ALL,
      center: [data.lng, data.lat],
      zoom: data.zoom,
    });
  }

  componentDidUpdate() {
    this.checkBanksWithCurrencies();
  }

  checkBanksWithCurrencies = () => {
    switch (this.props.currency) {
      case CurrenciesList.BYN:
      case CurrenciesList.USD:
      case CurrenciesList.EUR:
      case CurrenciesList.PLN:
        this.map.setStyle(BankMaps.ALL);
        break;

      case CurrenciesList.AUD:
      case CurrenciesList.GBP:
      case CurrenciesList.CHF:
        this.map.setStyle(BankMaps.ALPHA);
        break;

      case CurrenciesList.CNY:
      case CurrenciesList.JPY:
      case CurrenciesList.UAH:
        this.map.setStyle(BankMaps.PRIOR);
        break;

      default:
        this.map.setStyle(BankMaps.NONE);
    }
  };

  render() {
    return (
      <div className='map'>
        <div ref={this.mapContainer} className='map__container' />
      </div>
    );
  }
}
