import { Divider, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Logo from "../../components/molecules/logo";
import logo from "../../assets/icons/logo.svg";
import theme from "../../theme";
import OrderInfo from "../../components/organisms/OrderInfo";
import TrackingStepper from "../../components/molecules/TrackingStepper";
import Button from "../../components/atoms/Button";
import { useNavigate } from "react-router-dom";
import { stepperData } from "./stepperData";
import { getPatientsandTests } from "../../services/helperFunctions";

const style = {
    root: {
        px: "5.625rem",
        display: "flex",
        flexDirection: "column",
        gap: theme.spacing(21),
    },

    innerGrid: {
        display: "flex",
        flexDirection: "row",
        gap: theme.spacing(36),
        backgroundColor: theme.palette.gammaWhite.main,
    },

    image: {
        boxShadow: "0px 0px 26px rgba(233, 232, 237, 0.5)",
        padding: theme.spacing(10),
        display: "flexbox",
    },

    logo: {
        mt: theme.spacing(6),
    },

    innerFrame: {
        boxShadow: "0px 0px 26px rgba(233, 232, 237, 0.5)",
        borderRadius: theme.spacing(2),
        padding: theme.spacing(8),
    },

    divider: {
        border: `1px solid ${theme.palette.grey[100]}`,
    },

    footer: {
        px: theme.spacing(22.5),
        py: theme.spacing(6),
        height: "10%",
        boxShadow: "0px -4px 6px 0px #0000000F",
        bgcolor: "white",
        position: "fixed",
        bottom: 0,
        alignItems: "center",
        justifyContent: "flex-end",
    },

    button: {
        px: theme.spacing(14.375),
        py: theme.spacing(2.75),
        borderRadius: theme.spacing(2),
    }
}

const TrackOrderPage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  }
  const [selectedAddress, setSelectedAddress] = useState('')
  const [patientDetails,setPatientDetails]=useState<any>([])
  const [total,setTotal]=useState(0)
  useEffect(() => {
    let address = JSON.parse(localStorage.getItem('selectedAddress') as string)
    const fullAddress = `${address.houseNumber} ${address.area} ${address.city} ${address.zipcode}`
    setSelectedAddress(fullAddress)

    let selectedPatients = JSON.parse(localStorage.getItem('selectedPatients') as string)
    setPatientDetails(getPatientsandTests(selectedPatients))
    setTotal((getPatientsandTests(selectedPatients).length*2000)-200)
  }, [])
    return(
        <>
        <Grid container sx={style.root}>
            <Grid item sx={style.logo}>
                <Logo img={logo} text={"Zemoso Diagnostics"}></Logo>
            </Grid>
            <Grid item sx={style.innerGrid} xs={12}>
                <Grid item sx={style.image} xs={5} data-testid="order-info">
                    <OrderInfo patientDetails={patientDetails} labAddress={selectedAddress} totalAmountPaid={total}></OrderInfo>
                </Grid>
                <Divider sx={style.divider}></Divider>
                <Grid item sx={style.innerFrame} xs={5} data-testid="tracking-stepper">
                        <TrackingStepper 
                            data={stepperData} 
                            currentIndex={1}></TrackingStepper>
                </Grid>
            </Grid>
        </Grid>
        <Grid container sx={style.footer}>
          <Grid item data-testid="footer">
            <Button variant="contained" sx={style.button}>
              <Typography variant="body" onClick={handleClick}>Back to Home</Typography>
            </Button>
          </Grid>
        </Grid>
        </>
    );
};

export default TrackOrderPage;