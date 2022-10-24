import { Radio, RadioProps, styled } from '@mui/material';
import React from 'react';
import theme from '../../../theme';

const StyledRadio = styled(Radio)({
    '&:hover': {
        backgroundColor: "transparent",
    },

    color: theme.palette.grey[300],

    '&.Mui-checked': {
        color: theme.palette.secondary.main,
    }
})

const RadioButton = ({sx, ...remProps}: RadioProps) => {
    return (
        <StyledRadio
        data-testid="radioButton"
        {...remProps}></StyledRadio>
    );
};

export default RadioButton;