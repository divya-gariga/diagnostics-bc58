import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import theme from "../../../theme";

export type Props = {
  logo: string;
  testName: string;
  onClick?: () => void;
  clickable: boolean;
};

const LabTextIcon: React.FC<Props> = (props) => {
  const { logo, testName, onClick, clickable } = props;
  const useStyles: any = makeStyles({
    root: {
      height: "100%",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      flexDirection: "column",
      cursor: clickable ? "pointer" : "default",
    },
    img: {
      width: "50px",
      height: "50px",
      borderRadius: "8px",
      background: "#F2F5FF",
      alignItems: "center",
      justifyContent: "center",
      display: "flex",
    },
    text: {
      paddingTop: "14px",
      color: theme.palette.gammaMedium.main,
    },
  });
  const classes = useStyles();
  return (
    <Box className={classes.root} onClick={onClick} data-testid="testIcon">
      <div className={classes.img}>
        <img src={logo} alt="lab test" />
      </div>
      <div className={classes.text}>
        <Typography variant="caption2" data-testid="testName">
          {testName}
        </Typography>
      </div>
    </Box>
  );
};

export default LabTextIcon;
