import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import type { RootState } from '../../redux/store';
import SaleItem from '../sales/SaleItem';
import AddSaleForm from './AddSaleForm';

export default function ServicePage(): JSX.Element {
  const { serviceId } = useParams();
  const service = useSelector((store: RootState) =>
    store.servicesSlice.services.find((service) => service.id === +serviceId),
  );
  return (
    <div>
      <br />
      <AddSaleForm service={service} />
      <h2>{service?.title}</h2>
      <img src={service?.img} alt="" />
      <h3>Адрес: {service?.adress}</h3>
      <div className="sales-container">
        {service?.Sales.map((sale) => <SaleItem sale={sale} key={sale.id} />)}
      </div>
    </div>
  );
}
