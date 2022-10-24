import React from "react";
import { Avatar as IAvatar, AvatarProps } from "@mui/material";

interface IAvatarProps extends AvatarProps {
  src?: any;
}

const Avatar = (props: IAvatarProps) => {
  return (
    <>
      <IAvatar {...props} variant="circular" src={props.src} />
    </>
  );
};

export default Avatar;
