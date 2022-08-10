import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.clickBtn = this.clickBtn.bind(this);
  }

  clickBtn(e) {
    this.setState((state) => calculate(state, e.target.textContent));
  }

  render() {
    const { next, total } = this.state;
    return (
      <section className="calculator">
        <div className="div-container">
          <div className="screen">
            <span>{next || total || 0}</span>
          </div>
          <div className="buttons">
            <button className="btn" type="button" onClick={this.clickBtn}>
              AC
            </button>
            <button className="btn" type="button" onClick={this.clickBtn}>
              +/-
            </button>
            <button className="btn" type="button" onClick={this.clickBtn}>
              %
            </button>
            <button className="btn-symbol" type="button" onClick={this.clickBtn}>
              <span>&#247;</span>
            </button>
            <button className="btn" type="button" onClick={this.clickBtn}>
              7
            </button>
            <button className="btn" type="button" onClick={this.clickBtn}>
              8
            </button>
            <button className="btn" type="button" onClick={this.clickBtn}>
              9
            </button>
            <button className="btn-symbol" type="button" onClick={this.clickBtn}>
              x
            </button>
            <button className="btn" type="button" onClick={this.clickBtn}>
              4
            </button>
            <button className="btn" type="button" onClick={this.clickBtn}>
              5
            </button>
            <button className="btn" type="button" onClick={this.clickBtn}>
              6
            </button>
            <button className="btn-symbol" type="button" onClick={this.clickBtn}>
              -
            </button>
            <button className="btn" type="button" onClick={this.clickBtn}>
              1
            </button>
            <button className="btn" type="button" onClick={this.clickBtn}>
              2
            </button>
            <button className="btn" type="button" onClick={this.clickBtn}>
              3
            </button>
            <button className="btn-symbol" type="button" onClick={this.clickBtn}>
              +
            </button>
            <button className="zero" type="button" onClick={this.clickBtn}>
              0
            </button>
            <button className="btn" type="button" onClick={this.clickBtn}>
              .
            </button>
            <button className="btn-symbol" type="button" onClick={this.clickBtn}>
              =
            </button>
          </div>
        </div>
      </section>
    );
  }
}

export default Calculator;
