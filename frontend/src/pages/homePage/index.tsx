import { Grid, Typography } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import SearchField from '../../components/molecules/searchField'
import theme from '../../theme'
import searchIcon from '../../assets/icons/search.svg'
import Banner from '../../components/molecules/Banner'
import {
  BANNER_BUTTON_TEXT,
  BANNER_CAPTION,
  BANNER_HEADLINE,
  testimonials,
  testList1,
  testList2,
  UserContext,
} from '../../components/utils/Constant'
import WhyChooseUs from '../../components/molecules/WhyChooseUs'
import TestDetailMolecule from '../../components/molecules/TestsAvailable'
import FAQs from '../../components/molecules/FAQs'
import Footer from '../../components/molecules/Footer'
import Testimonial from '../../components/molecules/testimonial'
import LabTextIcon from '../../components/molecules/LabTestIcon'
import Header from '../../components/organisms/Header'
import { useNavigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

const style = {
  root: {
    display: 'flex',
    flexDirection: 'column',
  },

  testimonials: {
    display: 'flex',
    flexDirection: 'row',
    gap: '1.5rem',
  },

    testimonialGrid: {
        display: "flex", 
        flexDirection: "column", 
        gap: `${theme.spacing(8)}`, 
        backgroundColor: `${theme.palette.primary[800]}`, 
        px: "5.625rem",
        py: "5rem",
        width: "100%",
        alignContent: "center"
    },

  searchGrid: {
    px: '5.625rem',
    mb: `${theme.spacing(8)}`,
  },

  bannerGrid: {
    px: '5.625rem',
  },

  testGrid: {
    px: '5.625rem',
    py: '5rem',
    width: '100%',
  },

  innerTestGrid: {
    mb: `${theme.spacing(8)}`,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  list1Grid: {
    display: 'flex',
    flexDirection: 'row',
    gap: `${theme.spacing(4.5)}`,
    mb: `${theme.spacing(4.5)}`,
  },

  list2Grid: {
    display: 'flex',
    flexDirection: 'row',
    gap: `${theme.spacing(4.5)}`,
  },

  testFrame: {
    padding: `${theme.spacing(4)} ${theme.spacing(22)}`,
    borderRadius: `${theme.spacing(2)}`,
    boxShadow: '0px 0px 8px rgba(233, 232, 237, 0.5)',
    width: '100%',
  },

  innerGrid: {
    px: '5.625rem',
    py: '5rem',
  },
}

const HomePage = () => {
  const navigate = useNavigate()
  const onClickCovidTest = () => {
    navigate('/covid-test')
  }
  let [userID,setUserID]=useContext(UserContext);
  useEffect(() => {
    userID!=undefined && userID.length>0 ? navigate('/') : navigate('/auth')
    console.log(userID)
  }, [userID])

    return (
        <Grid sx={style.root}>
            <Grid item sx={style.searchGrid}>
                <Header></Header>
            </Grid>
            <Grid item sx={style.searchGrid}>
                <SearchField 
                    border={`1px solid ${theme.palette.grey[100]}`}
                    borderBottom={`1px solid ${theme.palette.grey[100]}`}
                    startIcon={searchIcon}
                    borderRadius= "8px"
                    padding="10px 0px"
                    width="100%"
                    placeholder="Search for lab test, packages">
                </SearchField>
            </Grid>
            <Grid item sx={style.bannerGrid}>
                <Banner 
                    headline={BANNER_HEADLINE} 
                    caption={BANNER_CAPTION} 
                    buttonText={BANNER_BUTTON_TEXT}></Banner>
            </Grid>
            <Grid item sx={style.testGrid}>
                <Grid item sx={style.innerTestGrid}>
                    <Typography color={theme.palette.gammaHigh.main} variant="h1">Commonly Booked Test</Typography>
                    <Typography variant="caption2" color={theme.palette.primary["500"]}>{'See more>>'}</Typography>
                </Grid>
                <Grid item>
                    <Grid item sx={style.list1Grid}>
                        {testList1.map((item: any, index: any) => {
                            return (
                                <Grid item sx={style.testFrame}>
                                    <LabTextIcon data-testid="test-icon" logo={item.logo} testName={item.testName} clickable={item.clickable} onClick={item.clickable ? onClickCovidTest : item.onClick}></LabTextIcon>
                                </Grid>
                            )
                        })}
                    </Grid>
                    <Grid item sx={style.list2Grid}>
                        {testList2.map((item: any, index: any) => {
                            return (
                                <Grid item sx={style.testFrame}>
                                    <LabTextIcon logo={item.logo} testName={item.testName} clickable={item.clickable} onClick={item.onClick}></LabTextIcon>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Grid>
            </Grid>
            <Grid item width="100%" data-testid="choose-us">
                <WhyChooseUs></WhyChooseUs>
            </Grid>
            <Grid item sx={style.innerGrid} data-testid="test-detail">
                <TestDetailMolecule></TestDetailMolecule>
            </Grid>
            <Grid item sx={style.testimonialGrid}>
                <Grid item>
                    <Typography color={theme.palette.gammaWhite.main} variant="h1" alignSelf={"left"}>Customer Testimonials</Typography>
                </Grid>
                <Grid item sx={style.testimonials}>
                    {testimonials.map((item: any, index: any) => {
                    return (
                        <Grid item width="23.875rem">
                            <Testimonial avatar={item.avatar} name={item.name} location={item.location} comment={item.comment} />
                        </Grid>
                    )
                    })}
                </Grid>    
            </Grid>
            <Grid item sx={style.innerGrid} data-testid="faq">
                <FAQs></FAQs>
            </Grid>
            <Grid item data-testid="footer">
                <Footer></Footer>
            </Grid>
        </Grid>
    );
};
export default HomePage