import React from 'react';
import { Sale } from '../service/types/type';

export default function SaleItem({ sale }: { sale: Sale }): JSX.Element {
  return (
    <div>
      <img src={sale.img} alt="" />
      <h3>{sale.text}</h3>
    </div>
  );
}
