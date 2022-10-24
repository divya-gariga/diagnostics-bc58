import { Grid, Typography } from "@mui/material";
import React from "react";
import theme from "../../../theme";
import Avatar from "../../atoms/Avatar";

type Props = {
    avatar: string;
    name: string;
    location: string;
    comment: string;
}

const style = {
    root: {
        backgroundColor: theme.palette.gammaWhite.main,
        borderRadius: theme.spacing(2),
        height: "100%",
        width: "100%",
    },

    innerGrid: {
        display: "flex",
        flexDirection: "column",
        padding: theme.spacing(5),
        gap: theme.spacing(2.5),
    },

    frame: {
        display: "flex",
        flexDirection: "row",
        gap: theme.spacing(2.5),
    },

    comment: {
        color: theme.palette.gammaMedium.main,
        fontWeight: 400,
        paddingLeft: theme.spacing(13),
    },

    name: {
        color: theme.palette.gammaMedium.main,
    },

    location: {
        color: theme.palette.gammaLow.main,
    }
};

const Testimonial: React.FC<Props> = (props: Props) => {
    return (
        <Grid sx={style.root}>
            <Grid item container sx={style.innerGrid}>
                <Grid item sx={style.frame}>
                    <Grid item>
                        <Avatar src={props.avatar} alt="avatar"></Avatar>
                    </Grid>
                    <Grid item>
                        <Grid item>
                            <Typography variant="caption2" sx={style.name}>{props.name}</Typography><br></br>
                            <Typography variant="overline" sx={style.location}>{props.location}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item sx={style.comment}>
                    <Typography variant="caption2">&ldquo;{props.comment}&rdquo;</Typography>
                 </Grid>
            </Grid>
        </Grid>
    );
};

export default Testimonial;