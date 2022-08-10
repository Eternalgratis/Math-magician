import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="calculator">
        <div className="div-container">
          <div className="screen">
            <span>0</span>
          </div>
          <div className="buttons">
            <button className="btn" type="button">
              AC
            </button>
            <button className="btn" type="button">
              +/-
            </button>
            <button className="btn" type="button">
              %
            </button>
            <button className="btn-symbol" type="button">
              <span>&#247;</span>
            </button>
            <button className="btn" type="button">
              7
            </button>
            <button className="btn" type="button">
              8
            </button>
            <button className="btn" type="button">
              9
            </button>
            <button className="btn-symbol" type="button">
              <span>&#215;</span>
            </button>
            <button className="btn" type="button">
              4
            </button>
            <button className="btn" type="button">
              5
            </button>
            <button className="btn" type="button">
              6
            </button>
            <button className="btn-symbol" type="button">
              -
            </button>
            <button className="btn" type="button">
              1
            </button>
            <button className="btn" type="button">
              2
            </button>
            <button className="btn" type="button">
              3
            </button>
            <button className="btn-symbol" type="button">
              +
            </button>
            <button className="zero" type="button">
              0
            </button>
            <button className="btn" type="button">
              .
            </button>
            <button className="btn-symbol" type="button">
              =
            </button>
          </div>
        </div>
      </section>
    );
  }
}

export default Calculator;
