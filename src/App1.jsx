import React, { useState } from "react";
import "./App1.css";

const carBrands = ["Mercedes", "BMW", "Maserati", "Infinity", "Audi"];
const carBrandOptions = carBrands.map((carBrand, key) => (
  <option value={carBrand} key={key}>
    {carBrand}
  </option>
));

const App1 = () => {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    message: "",
    carBrand: "",
    isChecked: false,
    price: 0,
    gender: "",
  });
  const handleChange = (e) => {
    const value =
      e.target.type === "checked" ? e.target.checked : e.target.value;
    setState((state) => ({
      ...state,
      [e.target.name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <div className="container">
      <h1>Controled Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            name="firstName"
            type="text"
            value={state.firstName}
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            name="lastName"
            type="text"
            value={state.lastName}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="message">
          Your message
          <textarea
            name="message"
            value={state.message}
            onChange={handleChange}
          ></textarea>
        </label>
        <label>
          Car brand:
          <select
            name="carBrand"
            value={state.carBrand}
            onChange={handleChange}
          >
            {/* <option value={""} disabled>
              --Pick a car brand--
            </option> */}
            {carBrandOptions}
          </select>
        </label>
        <label>
          <input
            type="checkbox"
            name="isChecked"
            value={state.isChecked}
            onChange={handleChange}
          />
        </label>
        <label>
          Price between 0 to 50
          <input
            type="range"
            name="price"
            min="0"
            max="50"
            value={state.price}
            onChange={handleChange}
          />
        </label>
        <div>
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={state.gender === "male"}
              onChange={handleChange}
            />
            {""}
            Male
            <input
              type="radio"
              name="gender"
              value="female"
              checked={state.gender === "female"}
              onChange={handleChange}
            />
            {""}
            Female
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
      <h2>{state.firstName}</h2>
      <h2>{state.lastName}</h2>
      <h2>{state.message}</h2>
      <h2>{state.carBrand}</h2>
      <h2>Is checked? : {state.isChecked ? "Yes" : "No"}</h2>
      <h2>Price: {state.price}</h2>
    </div>
  );
};

export default App1;
// const App1 = () => {
//   const ref = useRef();
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(ref.current.value);
//   };
//   return (
//     <div className="container">
//       <h1>Uncontroled Form</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           <input type="text" ref={ref} />
//         </label>
//       </form>
//     </div>
//   );
// };

// export default App1;
