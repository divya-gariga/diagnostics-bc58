import React from "react";
import { Grid, Typography } from "@mui/material";
import FaqCard from "../FaqCard";
const stylings = {
  container: {
    width: "100%",
    height: "19.75rem",
    backgroundColor: "#FFFFFF",
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
  }
};

const FAQs = () => {
  return (
    <>
      <Grid container sx={stylings.container}>
        <Typography variant="h1" >Frequently Asked Questions</Typography>
        <Grid>
          <FaqCard text="How Soon Can I get The Report?" />
          <FaqCard text="Who needs Full Body Check up?" />
          <FaqCard text="Can Children take this test?" />
          <FaqCard text="How many persons can book appointement through one account?" />
        </Grid>
      </Grid>
    </>
  );
};

export default FAQs;
