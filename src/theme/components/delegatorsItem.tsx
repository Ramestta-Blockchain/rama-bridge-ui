import { useContext, useState } from "react";
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogProps,
    DialogTitle,
    Divider,
    Typography,
    styled,
    useTheme,
} from "@mui/material";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import CloseIcon from '@mui/icons-material/Close';
import approved from '../../icons/approved.svg'
import approvel from '../../icons/approvel.svg'
import Image from "next/image";
import TextFieldCustome from "./textFieldCustome";
import profile from '../../icons/profile.svg'
import GradientButtonText from "./gradientButtonText";
import Link from "next/link";
import { display, padding } from "@mui/system";
import delegated from '../../icons/delegated.svg'
import delegatel from '../../icons/delegated.svg'
import successicon from '../../icons/successicon.svg'
import compd from '../../icons/compd.svg'
import compl from '../../icons/compl.svg'
import { ColorModeContext } from "@/context";

const StyledBox = styled(Box)(({ theme }) => ({
    'img': {
        width: '100%',
        height: 'auto',
        marginTop: '1rem',
        '@media(max-width : 600px)': {
            width: '100%',
        }
    }

}));


const StyledLinkTwo = styled(Link)(({ theme }) => ({
    padding:'1rem',
    display:'block',
    'a': {
        width: '100%',
        justifyContent: 'center',
        marginTop: '2rem',
        padding: '1rem',

    }

}));
const BoxTwo = styled(Box)(({ theme }) => ({
    marginTop: '3rem',
    textAlign: 'center',
    'img': {
        width: '120px',
        height: 'auto',
        border: theme.palette.common.black,
        padding: '1rem',
        borderRadius: '100px',
    }

}));


// Define your steps
const steps = ['Delegate', 'Confirm Delegation', 'Transaction Done'];

interface props{
    profileName:string;
}

const DelegatorsItem = ({profileName}:props) => {
    const [activeStep, setActiveStep] = useState(0);
    const [close, setClose] = useState(true);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1); // Corrected
    };

    const handleDelegate = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1); // Corrected
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleClose = () => {
        setClose(false)
    };



    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();

    return (
        <>


            <Box  >

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem' }}>
                    <Typography variant="h5">{steps[activeStep]}</Typography>
                    <Box onClick={handleClose}><CloseIcon sx={{ color: theme.palette.primary.contrastText }} /></Box>
                </Box>
                <Box>
                    {/* Content for each step */}
                    {activeStep === 0 && (
                        <Box sx={{ padding: '1rem' }}>
                            <Divider sx={{ borderColor: '#606060', margin: '0rem 0rem 10px 0rem' }} />

                            <StyledBox>
                                <Image src={theme.palette.mode === "dark" ? approvel : approved} alt={""} />
                            </StyledBox>

                            <Box textAlign={'center'} mt={2}>
                                <Image src={profile} alt={""} />
                                <Typography variant="h6">{profileName}</Typography>
                                <Typography fontWeight={300}>100% Performance • 98% Commission</Typography>
                            </Box>

                            <Box position={'relative'} >
                                <Box sx={{
                                    border: theme.palette.common.black,
                                    borderRadius: '6px',
                                    marginTop: '2rem'
                                }}>
                                    <TextFieldCustome placeholder_Text={'0.00'} textType={'text'} onChange={undefined} value={undefined} />
                                    <Box sx={{ position: 'absolute', right: '4px', top: '4px' }}>
                                        <GradientButtonText Gradient__button={'Max'} url={'#'} />
                                    </Box>
                                </Box>
                                <Box sx={
                                    {
                                        display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap'
                                    }
                                }>
                                    <Typography color={'#999'} mt={1}></Typography>
                                    <Typography color={'#999'} mt={1}>Available Balance 0 RAMA</Typography>
                                </Box>
                            </Box>


                        </Box>
                    )}
                    {activeStep === 1 && (
                        <Box sx={{ padding: '1rem' }}>


                            <Divider sx={{ borderColor: '#606060', margin: '0rem 0rem 10px 0rem' }} />

                            <StyledBox>
                                <Image src={theme.palette.mode === "dark" ? delegatel : delegated} alt={""} />
                            </StyledBox>

                            <BoxTwo >
                                <Image src={profile} alt={""} />

                                <Typography mt={2} fontWeight={300}>Completing this transaction will stake RAMA tokens and you will start earning rewards for the upcoming checkpoints.</Typography>
                            </BoxTwo>


                        </Box>
                    )}
                    {activeStep === 2 && (
                        <Box sx={{ padding: '1rem' }}>


                            <Divider sx={{ borderColor: '#606060', margin: '0rem 0rem 10px 0rem' }} />

                            <StyledBox>
                                <Image src={theme.palette.mode === "dark" ? compl : compd} alt={""} />
                            </StyledBox>

                            <BoxTwo >
                                <Image src={successicon} alt={""} />
                                <Typography variant="h6">Delegation Submitted</Typography>
                                <Typography fontWeight={300}>Your tokens are staked successfully on validator. your delegation will take 4-5 minutes to reflect in your account.</Typography>
                            </BoxTwo>


                        </Box>
                    )}
                </Box>
                <Box>
                    {/* Button controls for navigation */}
                    {/* <Button onClick={handleBack} disabled={activeStep === 0}>
                        Back
                    </Button> */}
                    {activeStep === 0 && (

                        <StyledLinkTwo onClick={handleNext} href={"#"}>
                            <GradientButtonText Gradient__button={'Continue'} url={'#'} />
                        </StyledLinkTwo>

                    )}
                    {activeStep === 1 && (

                        <StyledLinkTwo onClick={handleDelegate} href={"#"}>
                            <GradientButtonText Gradient__button={'Delegate'} url={'#'} />
                        </StyledLinkTwo>

                    )}
                    {activeStep === 2 &&(
                        <StyledLinkTwo onClick={handleClose} href={"#"}>
                            <GradientButtonText Gradient__button={'View on Block Exploreer'} url={'#'} />
                        </StyledLinkTwo>
                    )}
                </Box>
            </Box>
        </>
    );
};

export default DelegatorsItem;
