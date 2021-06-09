import React from "react";
import Form from 'react-bootstrap/Form';

import {CustomButton, CustomButtonContainer} from "./custom-button.styles";
import {FormContainer} from "./custom-form.styles";

const CustomForm = ({ email, options }) => {
  console.log(email, options);
  return (
    <FormContainer>
      <Form action="/form" method="post" className="col-5">
          <Form.Group controlId="formBasicEmail" className="mb-3">
              <Form.Control type="email" id="email" placeholder="Votre adresse e-mail" />
          </Form.Group>
          <Form.Group>
            <Form.Control as="select" name="services" id="services" className="mb-3">
                  <option value=""> Votre service</option>
                {options.map((option, index) => (
                  <option value={option} key={index}>
                    {option}
                  </option>
                ))}
            </Form.Control>
          </Form.Group>
          <CustomButtonContainer>
            <CustomButton>Envoyer</CustomButton>
          </CustomButtonContainer>
      </Form>
    </FormContainer>
  );
};

export default CustomForm;