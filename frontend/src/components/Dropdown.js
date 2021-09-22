import React, { useState } from 'react';
import SEPractices from "../dummydata/SEPractices"

const optionItems = SEPractices.map((SEPractice) => (
  <option key={SEPractice.practice}>{SEPractice.practice}</option>
));
const Dropdown = (props) => {
  const [selected, setSelected] = useState('');
  const changeHandler = (option) => {
      setSelected(option);
      props.parentCallback(option);
  };

  return (
      <div>
          <select onChange={(e) => changeHandler(e.target.value)}>
              <option value="">Select an SE Practice </option>;{optionItems}
          </select>
      </div>
  );
};
export default Dropdown;
