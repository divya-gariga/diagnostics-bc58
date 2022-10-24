import React, { useEffect, useState } from "react";
export const useOTP=()=>{
    let [otp,setOtp]=useState<string>();
    let [enable,setEnable]=useState<boolean>();
    useEffect(()=>{
        if(otp?.length!==4){
            setEnable(true)
        }else{
            setEnable(false)
        }
    },[otp])
    return {enable,otp,setOtp};
}