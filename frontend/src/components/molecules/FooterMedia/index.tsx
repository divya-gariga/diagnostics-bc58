import React from 'react'
import GooglePlay from '../../../assets/socialmediaIcons/playstore.svg'
import AppStore from '../../../assets/socialmediaIcons/appstore.svg'
import Facebook from '../../../assets/socialmediaIcons/facebook.svg'
import Twitter from '../../../assets/socialmediaIcons/twitter.svg'
import { Grid } from '@mui/material'
import Image from '../../atoms/ImageAtom'

let FooterMedia = () => {
  return (
    <Grid container direction="column" rowGap="1.288rem">
      <Grid item>
        <Image imgSrc={GooglePlay} imgAlt="Google play" />
      </Grid>
      <Grid item>
        <Image imgSrc={AppStore} imgAlt="App Store" />
      </Grid>
      <Grid item>
        <Grid container  columnGap="1.125rem" flexDirection="row-reverse">
          <Grid item>
            <Image imgSrc={Twitter} imgAlt="Twitter" />
          </Grid>
          <Grid item>
            <Image imgSrc={Facebook} imgAlt="FaceBook" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default FooterMedia
