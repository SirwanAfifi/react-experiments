import React, { useState } from "react";
import styles from "../styles/checkbox.module.css";

const Checkbox = () => {
  const [checked, setChecked] = useState(false);
  const [reverse, setReverse] = useState("");
  return (
    <div className={styles.inner}>
      <input
        type="checkbox"
        checked={checked}
        name="cb"
        id="cb"
        onClick={_ => {
          setChecked(!checked);
        }}
      />
      <label htmlFor="cb">
        <svg
          className={reverse}
          viewBox="0 0 100 100"
          onClick={_ => {
            if (checked) {
              setReverse("reverse");
            } else {
              setReverse("");
            }
          }}
        >
          <path
            className={styles.box}
            d="M82.5,90.5h-66c-3.87,0-7-3.13-7-7v-66c0-3.87,3.13-7,7-7h66c3.87,0,7,3.13,7,7v66
		C89.5,87.37,86.37,90.5,82.5,90.5z"
          />
          <polyline
            className={styles.check}
            points="25.5,52.5 39.5,66.5 74.5,31.5"
          />
        </svg>
        <span>Show Notes</span>
      </label>
    </div>
  );
};

export default Checkbox;
