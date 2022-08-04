import React from "react";

export default function Calculator() {
  return (
    <React.Fragment>
      <div>
        <label>Weight</label>
        <input type="text" name="weight" />
      </div>
      <div>
        <label>Height</label>
        <input type="text" namae="height" />
      </div>
      <div>Your BMI is:</div>
      <button>Calculate</button>
    </React.Fragment>
  );
}
