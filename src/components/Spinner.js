import React from "react";
import loading from "./Ripple.gif";

function Spinner() {
  return (
    <div className="col d-flex align-items-center justify-content-center">
      <img src={loading} alt="loading.." />
    </div>
  );
}

export default Spinner;
