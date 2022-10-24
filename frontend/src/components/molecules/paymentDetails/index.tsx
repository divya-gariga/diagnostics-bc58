import { Grid, Typography } from "@mui/material";
import React from "react";
import Button from "../../atoms/Button";
import AddIcon from "@mui/icons-material/Add";
import theme from "../../../theme/index";
import cardIcon from "../../../assets/icons/debitCard.svg";
import RadioButton from "../../atoms/radioButton";

type Props = {
    cardNumber: string;
    cardHolder: string;
    expiryDate: string;
    paymentOptions: any[];
}

const style = {
    root: {
        backgroundColor: theme.palette.gammaWhite.main,
        borderRadius: theme.spacing(2),
        boxShadow: theme.shadows[1],
        padding: `${theme.spacing(8)} ${theme.spacing(6)}`,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        width: "100%",
    },

    top: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width:"100%"
    },

    middle: {
        backgroundColor: theme.palette.gammaWhite.main,
        borderRadius: theme.spacing(2),
        boxShadow: theme.shadows[1],
        padding: theme.spacing(7.5),
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: theme.spacing(2.75),
        mt: theme.spacing(7),
    },

    innerMiddle: {
        display: "flex",
        flexDirection: "row",
        gap: theme.spacing(15)
    },

    middleFrame: {
        display: "flex",
        justifyContent: "space-between",
        mb: theme.spacing(10.5),
    },

    bottom: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        width:"100%",
        mt: theme.spacing(2),
        gap: theme.spacing(3),
    },

    bottomFrame: {
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        width: "100%"
    },

    bottomGrid: {
        width: "100%",
        mt: theme.spacing(4),
    },

    listItem: {
        display: "flex",
        alignItems: "center",
        gap: theme.spacing(2),
    },

    subtitle1: {
        color: theme.palette.gammaMedium.main,
    },

    body: {
        color: theme.palette.gammaHigh.main,
        fontWeight: 600
    },

    payment: {
        color: theme.palette.gammaHigh.main,
        fontWeight: 400
    },

    cardText: {
        color: theme.palette.gammaLow.main,
    },

    sample: {
        color: "rgba(18, 18, 29, 0.3)",
    },

    button: {
        fontWeight: 600,
    }

};

const PaymentDetails: React.FC<Props> = (props: Props) => {
    return (
        <Grid sx={style.root}>
            <Grid item sx={style.top}>
                <Grid item>
                    <Typography variant="subtitle1" sx={style.subtitle1}>Card Details</Typography>
                </Grid>
                <Grid item>
                    <Button variant="text" children="Add Card" startIcon={<AddIcon />} sx={style.button}></Button>
                </Grid>
            </Grid>
            <Grid item sx={style.middle} borderRadius={"2rem"}>
                <Grid item sx={style.middleFrame}>
                    <img src={cardIcon} alt="card-icon" />
                    <Typography variant="body" sx={style.sample}>Sample</Typography>
                </Grid>
                <Typography variant="body" sx={style.body}>{props.cardNumber}</Typography>
                <Grid item sx={style.innerMiddle}>
                    <Grid item>
                        <Typography variant="overline" sx={style.cardText}>Card Holder</Typography><br></br>
                        <Typography variant="overline" sx={style.subtitle1}>{props.cardHolder}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="overline" sx={style.cardText}>Expires</Typography><br></br>
                        <Typography variant="overline" sx={style.subtitle1}>{props.expiryDate}</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item sx={style.bottomGrid}>
                <Typography variant="body" sx={style.body}>Other Payment Options</Typography>
                <Grid item container  sx={style.bottom}>
                    {props.paymentOptions.map((item: any) => {
                        return (
                            <Grid item sx={style.bottomFrame}>
                                <Grid item sx={style.listItem}>
                                    <img src={item.icon} alt="payment-option" />
                                    <Typography variant="body2" sx={style.payment}>{item.name}</Typography>
                                </Grid>
                                <Grid item>
                                    <RadioButton checked={item.selected}></RadioButton>
                                </Grid>
                            </Grid>
                        );
                    })}
                </Grid>
            </Grid>
        </Grid>
    );
};

export default PaymentDetails;