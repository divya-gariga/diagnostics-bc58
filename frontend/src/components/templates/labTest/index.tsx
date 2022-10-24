import { Grid, GridProps } from "@mui/material";
import React from "react";
import theme from "../../../theme";
import Header from "../../organisms/Header";

const style = {
    header: {
        backgroundColor: theme.palette.gammaWhite.main,
        width: "100%",
        px: "5.625rem",
    },

    root: {
        width: "100%",
    },
};

const LabTest : React.FC<GridProps> = (props: GridProps) => {
    return (
        <Grid container sx={style.root}>
            <Grid item sx={style.header}>
                <Header></Header>
            </Grid>
            <Grid item>
                {props.children}
            </Grid>
        </Grid>
    );
};

export default LabTest;