import React from "react";

/*import {
  FormContainer,
  SelectContainer,
  CustomButtonContainer,
} from "./custom-input.styles";*/

const CustomInput = ({ email, services }) => {
  console.log(email, services);
  return (
    <form action="/form" method="post">
      <label htmlFor="email">{email}</label>
      <input type="text" name="email" id="email" />
              <select name="service" id="service">
          {services.map((service, index) => (
            <option value={service} key={index}>
              {service}
            </option>
          ))}
        </select>
      <button>submit form</button>
    </form>
  );
};

export default CustomInput;