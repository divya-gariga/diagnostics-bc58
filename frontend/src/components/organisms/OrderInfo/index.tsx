import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material'
import { Box, Divider, Grid, IconButton, Typography } from '@mui/material'
import React, { useState } from 'react'
import User from '../../../assets/icons/userActive.svg'
import Info from '../../../assets/icons/Info.svg'
import theme from '../../../theme'
import Image from '../../atoms/ImageAtom'

type OrderInfoProps = {
  patientDetails: { name: React.ReactNode; test: React.ReactNode }[]
  labAddress: React.ReactNode
  totalAmountPaid: React.ReactNode
}
const OrderInfo = ({
  labAddress,
  patientDetails,
  totalAmountPaid,
}: OrderInfoProps) => {
  let [click, setClick] = useState<boolean>(false)
  return (
    <Grid
      container
      padding={4}
      direction="column"
      boxShadow={theme.shadows[1]}
    >
      <Grid
        container
        border={`1px solid ${theme.palette.grey['50']}`}
        padding={1}
        spacing={1}
        boxShadow={theme.shadows[1]}
        direction="column"
      >
        <Grid item>
          {patientDetails.map((value) => {
            return (
              <Grid container>
                <Grid item paddingY={3} paddingX={3}>
                  <Image imgSrc={User} imgAlt={'user_avatar'} />
                </Grid>
                <Grid item>
                  <Typography
                    display="block"
                    variant="caption2"
                    color={theme.palette.gammaHigh.main}
                  >
                    {value.name}
                  </Typography>
                  <Typography
                    display="block"
                    variant="caption2"
                    color={theme.palette.gammaLow.main}
                  >
                    {value.test}
                  </Typography>
                </Grid>
              </Grid>
            )
          })}
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item width="85%">
          <Typography
            variant="caption"
            display="block"
            noWrap={true}
            color={theme.palette.gammaMedium.main}
            textOverflow="ellipsis"
          >
            {labAddress}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="caption2" color={theme.palette.gammaMedium.main}>
            {`Total Amount Paid - $${totalAmountPaid}`}
          </Typography>
        </Grid>
      </Grid>
      <Grid
        marginTop={5}
        padding={1}
        display={'inline-flex'}
        alignItems="center"
        bgcolor={theme.palette.grey['100']}
        xs={12}
      >
        <Image imgSrc={Info} imgAlt="info" />
        <Box
          width="100%"
          marginLeft={2}
          display="inline-flex"
          alignItems={'center'}
          justifyContent="space-between"
        >
          <Typography variant="overline2" color={theme.palette.primary['800']}>
            Instructions
          </Typography>
          <IconButton
            onClick={() => {
              setClick((prev) => !prev)
            }}
          >
            {click ? (
              <KeyboardArrowUp htmlColor={theme.palette.grey['300']} />
            ) : (
              <KeyboardArrowDown htmlColor={theme.palette.grey['300']} />
            )}
          </IconButton>
        </Box>
      </Grid>
      {click ? (
        <Grid
          padding={1}
          alignItems="center"
          bgcolor={theme.palette.grey['100']}
          xs={12}
        >
          <Typography
            variant="captionRegular"
            color={theme.palette.gammaMedium.main}
          >
            Please don't eat or drink anything other than water for 8 -10 hours
            prior to the appointment.
          </Typography>
        </Grid>
      ) : (
        <></>
      )}
    </Grid>
  )
}
export default OrderInfo
