import React from "react";
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
  styled,
} from "@mui/material";
export interface ButtonProps extends MuiButtonProps {}
const CustomizedButton = styled(MuiButton)(() => ({
  "&:focusVisible": {
    boxShadow: "none",
  },
  textTransform: "none"
}));

const Button: React.FC<ButtonProps> = (props) => {
  const { children } = props;
  return (
    <>
      <CustomizedButton 
      disableRipple {...props}>
        {children}
      </CustomizedButton>
    </>
  );
};

export default Button;
