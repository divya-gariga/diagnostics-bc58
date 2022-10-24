import { Grid, Typography } from "@mui/material";
import React from "react";
import theme from "../../../theme";
import Button from "../../atoms/Button";
import infoIcon from "../../../assets/icons/Info.svg";

type Props = {
    instructions: string;
    onClickTrack?: any;
    onClickHome?: any;
}

const style = {
    root: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        backgroundColor: theme.palette.gammaWhite.main,
        boxShadow: theme.shadows[1],
        width: "100%",
        padding: theme.spacing(6),
        height: "100%"
    },

    trackGrid: {
        mt: theme.spacing(7),
        width: "100%",
    },

    homeGrid: {
        mt: theme.spacing(5.5),
        width: "100%",
    },

    button: {
        width: "100%",
        borderRadius: theme.spacing(2),
        padding: `${theme.spacing(4)} ${theme.spacing(2)}`,
    },

    middle: {
        mt: theme.spacing(7.5),
        display:"flex",
        flexDirection: "column",
        gap: theme.spacing(2),
    },

    buttonText: {
        fontWeight: 600,
    },

    instruction: {
        fontWeight: 400,
        color: theme.palette.gammaMedium.main,
    },

    frame: {
        display: "flex",
        flexDirection: "row",
        gap: theme.spacing(2),
    },

    text: {
        color: theme.palette.primary[800],
        fontWeight: 600,
    }
};

const OrderPlaced: React.FC<Props> = (props: Props) => {
    return (
        <Grid sx={style.root}>
            <Grid item>
                <Typography variant="subtitle1">Your order has been placed</Typography>
            </Grid>
            <Grid item sx={style.middle}>
                <Grid item sx={style.frame}>
                    <img src={infoIcon} alt="info-icon" />
                    <Typography variant="body" sx={style.text}>Instructions</Typography>
                </Grid>
                <Grid item>
                    <Typography variant="caption2" sx={style.instruction}>{props.instructions}</Typography>
                </Grid>
            </Grid>
            <Grid item sx={style.trackGrid}>
                <Button variant="contained" sx={style.button} onClick={props.onClickTrack}><Typography variant="body" sx={style.buttonText}>Track Your Order</Typography></Button>
            </Grid>
            <Grid item sx={style.homeGrid}>
                <Button variant="outlined" sx={style.button} onClick={props.onClickHome}><Typography variant="body" sx={style.buttonText}>Back to Home</Typography></Button>
            </Grid>
        </Grid>
    );
};

export default OrderPlaced;