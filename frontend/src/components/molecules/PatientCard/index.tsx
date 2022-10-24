import { Grid, Typography } from "@mui/material";
import React from "react";
import theme from "../../../theme";
import Button from "../../atoms/Button";

export type PatientDetails = {
  name: React.ReactNode;
  gender: React.ReactNode;
  age: React.ReactNode;
  relation: React.ReactNode;
  onEdit?: () => void;
};
const PatientCard = ({
  age,
  gender,
  name,
  relation,
  onEdit,
}: PatientDetails) => {
  return (
    <Grid container width="100%" paddingY={2} justifyContent="space-between">
      <Grid item xs>
        <Grid container direction="column">
          <Grid item xs data-testid="patientName">
            <Typography
              width="inherit"
              textOverflow={"ellipsis"}
              variant="captionRegular"
              color={theme.palette.gammaHigh.main}
            >
              {name}
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="overline"
              color={theme.palette.gammaLow.main}
            >{`${relation=="Myself"?"Self":relation}, ${gender}, ${age} years`}</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={1}>
        <Button onClick={onEdit}>
          <Typography variant="caption2">Edit</Typography>
        </Button>
      </Grid>
    </Grid>
  );
};
export default PatientCard;
