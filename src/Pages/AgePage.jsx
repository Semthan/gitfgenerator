import React, { useState } from "react";

export default function AgePage() {
    const [age, setAge] = useState("")

    function handeOnChange(e){
        setAge(e.target.value)
    }

  return (
    <div className="container">
       <h1>Age</h1> 
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="age"
          id="a"
          value="a"
          onChange={handeOnChange}
          defaultChecked={age === "a"}
        />
        <label className="form-check-label" htmlFor="a">Between 25 and 50</label>
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
        <label className="form-check-label" htmlFor="a">Older than 50</label>
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
        <label className="form-check-label" htmlFor="a">Younger than 25</label>
      </div>
    </div>
  );
}
