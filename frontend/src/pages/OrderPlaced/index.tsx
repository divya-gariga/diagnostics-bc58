import { Grid } from "@mui/material";
import React from "react";
import OrderPlaced from "../../components/organisms/orderPlaced";
import paymentSuccess from "../../assets/illustrations/paymentSuccess.svg";
import Logo from "../../components/molecules/logo";
import logo from "../../assets/icons/logo.svg";
import theme from "../../theme";
import { useNavigate } from "react-router-dom";

const style = {
    root: {
        px: "5.625rem",
        display: "flex",
        flexDirection: "column",
        gap: theme.spacing(21),
        width: "100%"
    },

    innerGrid: {
        display: "flex",
        flexDirection: "row",
        gap: theme.spacing(36),
        width: "100%"
    },

    image: {
        ml: theme.spacing(31),
    },

    logo: {
        mt: theme.spacing(6),
    }
}

const OrderPlacedPage = () => {
    const navigate = useNavigate();
    
    const onClickHome = () => {
        navigate("/");
    }

    const onClickTrack = () => {
        navigate("/trackOrderPage");
    }

    return(
        <Grid sx={style.root}>
            <Grid item sx={style.logo}>
                <Logo img={logo} text={"Zemoso Diagnostics"}></Logo>
            </Grid>
            <Grid item sx={style.innerGrid}>
                <Grid item sx={style.image}>
                    <img src={paymentSuccess} alt="payment-success" height="650rem"/>
                </Grid>
                <Grid item sx={{height: "45rem"}} data-testid="order-placed">
                    <OrderPlaced 
                        instructions={"Please don't eat or drink anything other than water for 8 -10 hours prior to the appointment."}
                        onClickHome={onClickHome}
                        onClickTrack={onClickTrack}></OrderPlaced>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default OrderPlacedPage;