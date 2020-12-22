import React, { useState } from "react";
import RadioButton from "../component/RadioButton";

export default function AgePage() {
  const [age, setAge] = useState("");

  function handeOnChange(e) {
    setAge(e.target.value);
  }

  const pageName = "age"
  const currentValue = age

  const pageData = [
    {value: "a", label: "Yonger than 25"},
    {value: "b", label: "Between 25 and 50"},
    {value: "c", label: "Older than 50"}
  ]


  return (
    <div className="container">
      <h2>Age</h2>

    
        {pageData.map((item, index)=> {
            return <RadioButton key={index}
            name={pageName} value={item.value} onChange={handeOnChange} currentValue={currentValue}
            label={item.label}
            />

        })}
     {/*  <RadioButton
        name={pageName}
        value="a"
        onChange={handeOnChange}
        currentValue={age}
        label="Yonger than 25"
      />

    <RadioButton
        name="age"
        value="b"
        onChange={handeOnChange}
        currentValue={age}
        label="Between 25 and 50"
      />

    <RadioButton
        name="age"
        value="c"
        onChange={handeOnChange}
        currentValue={age}
        label="Older than 50"
      /> */}

{/*       <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="age"
          id="a"
          value="a"
          onChange={handeOnChange}
          defaultChecked={age === "a"}
        />
        <label className="form-check-label" htmlFor="a">
          Between 25 and 50
        </label>
      </div>

      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="age"
          id="b"
          value="b"
          onChange={handeOnChange}
          defaultChecked={age === "b"}
        />
        <label className="form-check-label" htmlFor="a">
          Older than 50
        </label>
      </div>

      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="age"
          id="c"
          value="c"
          onChange={handeOnChange}
          defaultChecked={age === "c"}
        />
        <label className="form-check-label" htmlFor="a">
          Younger than 25
        </label>
      </div> */}
    </div>
  );
}
