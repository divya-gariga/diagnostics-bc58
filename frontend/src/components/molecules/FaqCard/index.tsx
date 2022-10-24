import { Grid, Typography } from "@mui/material";
import React from "react";
import downArrow from "../../../assets/icons/downArrow.svg";
import theme from "../../../theme";
export type FaqCardProps = {
  text: string;
};
const stylings = {
  box: {
    width: "100%",
    height: "4rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: "1.25rem",
    boxShadow: "0px 0px 26px rgba(233, 232, 237, 0.5)",
  },
  color: `${theme.palette.gammaMedium.main}`,
};
const FaqCard: React.FC<FaqCardProps> = (props) => {
  const { text } = props;
  return (
    <Grid sx={stylings.box}>
      <Typography variant="body" fontWeight="400" color={stylings.color}>
        {text}
      </Typography>
      <img src={downArrow} alt="DownArrow" />
    </Grid>
  );
};

export default FaqCard;
