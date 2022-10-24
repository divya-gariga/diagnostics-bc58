import { Checkbox, CheckboxProps, styled } from "@mui/material";
import React from "react";
import theme from "../../../theme";

const StyledCheckbox = styled(Checkbox)({
    '&:hover': {
        backgroundColor: "transparent",
    },

    color: theme.palette.grey[300],

    '&.Mui-checked': {
        color: theme.palette.secondary.main,
    }
});

const CheckBox = ({sx, ...remProps}: CheckboxProps) => {
    return (
        <StyledCheckbox 
        data-testid="checkbox"
        {...remProps}></StyledCheckbox>
    );
};

export default CheckBox;