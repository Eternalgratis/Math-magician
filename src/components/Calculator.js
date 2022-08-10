import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState(0);
  const clickBtn = (e) => {
    setState((state) => calculate(state, e.target.textContent));
  };

  return (
    <section className="calculator">
      <div className="div-container">
        <div className="screen">
          <span>{state.next || state.total || 0}</span>
        </div>
        <div className="buttons">
          <button className="btn" type="button" onClick={clickBtn}>
            AC
          </button>
          <button className="btn" type="button" onClick={clickBtn}>
            +/-
          </button>
          <button className="btn" type="button" onClick={clickBtn}>
            %
          </button>
          <button className="btn-symbol" type="button" onClick={clickBtn}>
            <span>&#247;</span>
          </button>
          <button className="btn" type="button" onClick={clickBtn}>
            7
          </button>
          <button className="btn" type="button" onClick={clickBtn}>
            8
          </button>
          <button className="btn" type="button" onClick={clickBtn}>
            9
          </button>
          <button className="btn-symbol" type="button" onClick={clickBtn}>
            x
          </button>
          <button className="btn" type="button" onClick={clickBtn}>
            4
          </button>
          <button className="btn" type="button" onClick={clickBtn}>
            5
          </button>
          <button className="btn" type="button" onClick={clickBtn}>
            6
          </button>
          <button className="btn-symbol" type="button" onClick={clickBtn}>
            -
          </button>
          <button className="btn" type="button" onClick={clickBtn}>
            1
          </button>
          <button className="btn" type="button" onClick={clickBtn}>
            2
          </button>
          <button className="btn" type="button" onClick={clickBtn}>
            3
          </button>
          <button className="btn-symbol" type="button" onClick={clickBtn}>
            +
          </button>
          <button className="zero" type="button" onClick={clickBtn}>
            0
          </button>
          <button className="btn" type="button" onClick={clickBtn}>
            .
          </button>
          <button className="btn-symbol" type="button" onClick={clickBtn}>
            =
          </button>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
