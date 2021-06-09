import React from "react";
import Form from 'react-bootstrap/Form';

import {CustomButton, CustomButtonContainer} from "../styles/custom-button.styles";
import {FormContainer} from "../styles/custom-form.styles";

const CustomForm = ({ email, options }) => {
  return (
    <FormContainer>
      <Form action="/form" method="post" className="col-5">
          <Form.Group className="mb-3">
              <Form.Control type="email" name={email} id={email} placeholder="Votre adresse e-mail" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control as="select" name="services" id="services">
                  <option value="" disabled selected hidden> Votre service</option>
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