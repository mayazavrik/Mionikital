import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { ServiceCard } from '../service/types/type';
import AddUslugaForm from './addUslugaForm';
import PriceItem from './PriceItem';

export default function UslugaContainter({ service }: { service: ServiceCard }): JSX.Element {
  const prices = useSelector((store: RootState) => store.prices.uslugasPrices).filter(
    (price) => price.service_id === service.id,
  );

  return (
    <div className="usluga-cont">
      <AddUslugaForm service={service} />
      <div className="prices">
        {prices.map((price) => (
          <PriceItem price={price} />
        ))}
      </div>
    </div>
  );
}
