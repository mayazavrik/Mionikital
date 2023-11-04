import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './MyModal.css';
import { RootState, useAppDispatch } from '../../redux/store';
import { Question } from '../type';
import scoreFetch from './api.modal';
import { Data } from '../LogReg/type';

function ModalQuest({
  active,
  setActive,
  id,
  question,
}: {
  active: boolean;
  setActive: () => {};
  id: number;
  question: Question;
}): JSX.Element {
  const questions = useSelector((store: RootState) => store.questions.questions);
  const dispatch = useAppDispatch();
  const user = useSelector((store: RootState) => store.user.user);
  const [result, setResult] = useState('');
  const [currentResult, setCurrentResult] = useState('');

  const onHandleClick = async (el: string): Promise<void> => {
    if (el === result) {
      setCurrentResult('Верно!');
      const data: Data = await scoreFetch(question.cost, user.id);
      if (data.message === 'success') {
        dispatch({ type: 'user/put', payload: data.score });
      }
    } else {
      setCurrentResult(`Неверно! Правильный ответ: ${el}`);
      const data: Data = await scoreFetch(-question.cost, user.id);
      if (data.message === 'success') {
        dispatch({ type: 'user/put', payload: data.score });
      }
    }
  };

  return (
    <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <div className="quest">
          <h3>Вопрос</h3>
          <div>
            <p>{question.quest}</p>
            <div className="answer">
              <input
                value={result}
                onChange={(e) => setResult(e.target.value)}
                type="text"
                className="answer-input"
              />
              <button
                onClick={() => onHandleClick(question.answer)}
                type="button"
                className="answer-btn"
              >
                Ответить
              </button>
            </div>
            <div className="result">{currentResult}</div>
          </div>
        </div>

        <button className="answer-away" type="button" onDoubleClick={() => setActive(!active)}>
          Обратно
        </button>
      </div>
    </div>
  );
}

export default ModalQuest;
