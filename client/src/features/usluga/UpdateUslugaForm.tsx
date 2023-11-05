/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import type { Dispatch, SetStateAction } from 'react';
import { RootState, useAppDispatch } from '../../redux/store';
import type { CarModel, Mark, Usluga, UslugaPrice } from './types/types';
import { updPrice } from './uslugaPriceSlice';

export default function UpdateUslugaForm({
  carMark,
  carModel,
  serviceUsluga,
  price,
  setFlag,
}: {
  carMark: Mark;
  carModel: CarModel;
  price: UslugaPrice;
  serviceUsluga: Usluga;
  setFlag: Dispatch<SetStateAction<boolean>>;
}): JSX.Element {
  const dispatch = useAppDispatch();
  const [marka, setMarka] = useState(carMark.title);
  const [cost, setCost] = useState(price.cost);
  const [model, setModel] = useState('');
  const [usluga, setUsluga] = useState('');
  const uslugas = useSelector((store: RootState) => store.uslugas.uslugas);
  const marks = useSelector((store: RootState) => store.uslugas.marks);
  const onHandleUpd = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const mark_id = marks.find((el) => el.title === marka)?.id;
    const model_id = marks
      .find((el) => el.title === marka)
      ?.CarModels.find((carModel) => carModel.title === model)?.id;
    const usluga_id = uslugas.find((elem) => elem.title === usluga)?.id;

    dispatch(
      updPrice({
        id: price.id,
        mark_id,
        carModel_id: model_id,
        usluga_id,
        cost: +cost,
        service_id: price.service_id,
      }),
    );
    setFlag(false);
  };

  return (
    <div>
      <form id="usluga" onSubmit={onHandleUpd}>
        <select
          name="usluga"
          defaultValue={serviceUsluga?.title}
          onChange={(e) => setUsluga(e.target.value)}
        >
          <option value="1">Выберите услугу</option>
          {uslugas.map((usluga) => (
            <option key={usluga.id} value={usluga.title}>
              {usluga.title}
            </option>
          ))}
        </select>
        <select
          name="mark"
          id="mark"
          defaultValue={marka}
          onChange={(e) => {
            setMarka(e.target.value);
          }}
        >
          <option value="">Выберите марку авто</option>
          {marks.map((mark) => (
            <option key={mark.id} value={mark.title}>
              {mark.title}
            </option>
          ))}
        </select>
        <select
          name="model"
          defaultValue={carModel.title}
          onChange={(e) => setModel(e.target.value)}
        >
          <option value="">Выберите модель авто</option>
          {marka !== '' &&
            marks.map(
              (mark) =>
                mark.title === marka &&
                mark.CarModels.map((car) => (
                  <option key={car.id} value={car.title}>
                    {car.title}
                  </option>
                )),
            )}
        </select>
        <input
          type="number"
          name="cost"
          defaultValue={cost}
          onChange={(e) => setCost(e.target.value)}
        />
        <button type="submit">Изменить</button>
      </form>
    </div>
  );
}
