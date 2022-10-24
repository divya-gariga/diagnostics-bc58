import { InputAdornment, styled, TextField, TextFieldProps } from "@mui/material";
import React from "react";
import theme from "../../../theme";

type Props = {
    height?: string | number;
    width?: string | number;
    border?: string;
    borderBottom?: string;
    borderRadius?: string;
    startIcon?: string;
    endIcon?: string;
    padding?: string;
  } & TextFieldProps;
  
  const StyledTextField = styled((props: Props) => {
    const { height, width, border, borderBottom, borderRadius, startIcon, endIcon, padding, ...other } =
      props;
    return <TextField {...other} />;
  })(
    ({
      height,
      width,
      border,
      borderBottom,
      borderRadius,
      padding,
    }) => ({
      height: height,
      width: width,
      "&.MuiTextField-root": {
        "& .MuiOutlinedInput-input": {
          padding: padding,
          fontWeight: 400,
          lineHeight: "20px",
          fontSize: "16px",
          "&::placeholder": {
            color: theme.palette.gammaLow.main,
          },
        },
      },
      "& .MuiOutlinedInput-notchedOutline": {
        borderRadius: borderRadius,
        border: border,
        borderBottom: borderBottom,
      },
    })
  );
  const SearchField: React.FC<Props> = ({
    height,
    width,
    border,
    borderBottom,
    borderRadius,
    startIcon,
    endIcon,
    padding,
    ...remProps
  }: Props) => {
    return (
      <StyledTextField
        height={height}
        width={width}
        border={border}
        borderBottom={borderBottom}
        borderRadius={borderRadius}
        padding={padding}
        InputProps={{
                      startAdornment: <InputAdornment position="start" sx={{mr:1}}>
                          <img src={startIcon} />
                      </InputAdornment>,
          
                      endAdornment: <InputAdornment position="end">
                          <img src={endIcon} />
                      </InputAdornment>
                    }}
        {...remProps}
      />
    );
  };
  
  export default SearchField;
  