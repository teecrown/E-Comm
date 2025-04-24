import React from "react";

const Modalsuccess = () => {
  return (
    <div className="modal-success">
      <div className="modal-content">
        <h2>Make Payment</h2>
        <div className="progress-flex">
          <p className="round-icon">1</p>
          <p className="round-icon">2</p>
          <p className="round-icon">3</p>
        </div>
      <div>
        <input className="big-tick" type="checkbox" value={yes} />
        <p> Success</p>
        <button type="submit"> Complete</button>
      </div>

      </div>
    </div>
  );
};

export default Modalsuccess;
