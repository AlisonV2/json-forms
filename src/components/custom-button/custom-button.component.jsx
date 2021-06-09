import React from 'react';
import { CustomButtonContainer, CustomStyledButton } from "./custom-button.styles";

const CustomButton = ({ children, ...props }) => (
    <CustomButtonContainer>
            <CustomStyledButton {...props}>{children}</CustomStyledButton>
    </CustomButtonContainer>
  );
  
  export default CustomButton;