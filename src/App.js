import React, { useEffect } from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="App container">
      <h2>Welcome</h2>
      <CalculateAmount />
    </div>
  );
}

const CalculateAmount = () => {
  const [state, setState] = React.useState({
    amount: 0,
    percentage: 0,
    total: 0
  });

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const calcTotal = () => {
    let p = state.percentage / 100;
    let x = state.amount / (1 - p);
    x = Math.round((x + Number.EPSILON) * 100) / 100;
    setState({ ...state, total: x });
  };
  useEffect(calcTotal, [state.amount, state.percentage]);

  return (
    <div className="row">
      <div className="col">
        <div className="card">
          <div className="card-body">
            <div className="form-group">
              <label>Desired amount after percentage deduction:</label>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">$</span>
                </div>
                <input
                  name="amount"
                  type="number"
                  className="form-control"
                  onChange={handleChange}
                  placeholder="0"
                />
              </div>
            </div>
            <div className="form-group">
              <label>Percentage:</label>
              <div className="input-group mb-3">
                <input
                  name="percentage"
                  type="number"
                  className="form-control"
                  placeholder="0"
                  onChange={handleChange}
                />
                <div className="input-group-append">
                  <span className="input-group-text">%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <span>
              Total Amount: <strong> ${state.total} </strong>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
