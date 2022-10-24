import { Grid, styled, Typography } from '@mui/material'
import React from 'react'
import theme from '../../../theme'
import FamilySVG from '../../../assets/illustrations/family.svg'
import CustomButton from '../../atoms/Button'
type BannerProps = {
  onClick?: () => void
  headline: React.ReactNode
  caption: React.ReactNode
  buttonText: React.ReactNode
}
const Button = styled(CustomButton)({
  color: theme.palette.primary['800'],
  backgroundColor: 'white',
})
const Banner = ({ onClick, buttonText, caption, headline }: BannerProps) => {
  return (
    <Grid
      container
      justifyContent={'space-between'}
      bgcolor={theme.palette.primary['800']}
      borderRadius={4}
    >
      <Grid item margin={1} padding={8}>
        <Grid
          container
          justifyContent="space-between"
          direction="column"
          height="100%"
        >
          <Grid item>
            <Typography color={theme.palette.gammaWhite.main} variant="h1">
              {headline}
            </Typography>
            <Typography
              variant="caption2"
              color={theme.palette.gammaWhite.main}
              marginY={2}
            >
              {caption}
            </Typography>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              style={{ backgroundColor: 'white' }}
              onClick={onClick ?? (() => {})}
            >
              <Typography>{buttonText}</Typography>
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item marginRight={20} marginY={1.5} justifySelf="center">
        <img src={FamilySVG} />
      </Grid>
    </Grid>
  )
}

export default Banner
