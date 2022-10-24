import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import theme from "../../../theme";

interface LogoProps {
    img: string;
    text: string;
}

const Logo: React.FC<LogoProps> = (props: LogoProps) => {
    const useStyles: any = makeStyles({
        text: {
          color: theme.palette.primary.main,
        },

        root: {
            display: "flex",
            gap: theme.spacing(1.5),
            height: "1.25rem",
        },
    });

    const classes = useStyles();

    return(
        <Grid className={classes.root}>
            <Grid item>
                <img src={props.img} alt="logo-image"/>
            </Grid>
            <Grid item className={classes.text}>
                <Typography variant="caption1">{props.text}</Typography>
            </Grid>
        </Grid>
    );
};

export default Logo;