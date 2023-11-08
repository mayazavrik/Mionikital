import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';

function PersonalAreaPerson(): JSX.Element {
  const [widt, setWidt] = useState(false);
  const user = useSelector((store: RootState) => store.auth.user);
  const orders = useSelector((store: RootState) => store.uslugas.order);
  console.log(orders);

  return (
    <div>
      <div>Name: {user?.name}</div>
      <div>Email: {user?.email}</div>
      <div>Phone-number: {user?.phone}</div>
      <button
        type="submit"
        onClick={() => {
          setWidt(!widt);
        }}
      >
        Мои Записи
      </button>
      <div>
        <h3>fd</h3>
      </div>
    </div>
  );
}

export default PersonalAreaPerson;
