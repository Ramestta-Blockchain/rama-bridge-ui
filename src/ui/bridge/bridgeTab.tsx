"use client"
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, Chip, CircularProgress, Grid, InputBase, StepContent, styled, useTheme } from '@mui/material';
import { ColorModeContext } from '@/context';
import { makeStyles } from '@mui/styles';
import Empty from '../asset/empty';
import Headingcmp from '@/theme/components/headingcmp';
import Buttonwithcolor from '@/theme/components/buttonwithcolor';
import Link from 'next/link';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Image from 'next/image';
import readarrow from '../../icons/readarrow.svg'
import { useConnectModal } from '@rainbow-me/rainbowkit';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { useAccount } from 'wagmi';
import HoverTool from '@/theme/components/hoverTool';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import tipd from '../../icons/asset/tipd.svg';
import tipl from '../../icons/asset/tipl.svg';
import transferArrow from '../../icons/asset/transferArrow.svg';
import infod from '../../icons/asset/infod.svg';
import infol from '../../icons/asset/infol.svg';
import Selector from '@/theme/components/selector';
import PercentageBtn from '@/theme/components/percentageBtn';
import { useState } from 'react';
import HoverToolTwo from '@/theme/components/hoverToolTwo';
import ButtonText from '@/theme/components/buttonText';
import Modal from '@/theme/components/modal';
import ModalItem from './modalItem';
import DropdownThree from '@/theme/components/dropdownThree';
import DropdownTwo from '@/theme/components/dropdownTwo';
import usdtbsc from '../../icons/asset/usdtbsc.svg';
import usdtrx from '../../icons/asset/usdtrx.svg';
import rama from '../../icons/asset/lgsheild.svg';
import { Stepper, Step, StepLabel, } from '@mui/material';
import TransactionDetails from './transactionDetails';
import AddressCopy from '@/theme/components/addressCopy';
import CheckIcon from '@mui/icons-material/Check';
import TextCopy from '@/theme/components/textCopy';
import Faqs from './faqs';
import VerticalStepper from './verticalStepper';
import Transfer from './transfer';
import SelectDrop from './selectDrop';
import { useMutation, useQuery } from '@tanstack/react-query';
import { txDetailById } from '@/lib/api/rest/thirdParty/txDetailById';
import { createTx } from '@/lib/api/rest/thirdParty/createTx';
import { formatEther, formatUnits, parseEther, parseUnits } from 'viem';



interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

const StyledBox = styled(Box)(({ theme }) => ({
    marginTop: '2.2rem'
}));
function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <Box
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </Box>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


const useStyles = makeStyles({
    hide: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        justifyContent: 'end',
    },
    flex_box: {
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
    },
    flex_box2: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    connectBridge: {
        backgroundColor: '#3DC1F2 !important',
        textDecoration: 'none',
        color: '#000 !important',
        padding: '10px 16px !important',
        borderRadius: '6px !important',
        transition: '0.5s',
        width: '100%',
        marginTop: '1rem !important',
        '&:hover': {
            backgroundColor: '#3DC1F2',
        },
    },
    save: {
        backgroundColor: '#3DC1F2 !important',
        textDecoration: 'none',
        padding: '10px 16px !important',
        borderRadius: '6px !important',
        transition: '0.5s',
        marginTop: '8px !important',
        '&:hover': {
            backgroundColor: '#3DC1F2',
        },
    },
    connectBridgeOutline: {

        textDecoration: 'none',
        padding: '10px 16px !important',
        borderRadius: '6px !important',
        transition: '0.5s',
        width: '100%',
        color: '#fff !important',
        marginTop: '1rem !important',
        border: '1px solid #1D1D20 !important',
        '&:hover': {
            backgroundColor: 'transparent',
        },
    },
    rotateArrow: {
        transition: 'transform 0.5s ease',
    },
    rotated: {
        transform: 'rotate(180deg)',
    },
    thirdparty: {
        textAlign: 'center',
        display: 'block',
        marginTop: '10px',
        textDecoration: 'none',
        color: '#3dc1f2'
    }
});

const steps = [
    {
        title: 'Exchange pair',
        description: 'Set the preferred exchange pair.'
    },
    {
        title: 'Wallet Address',
        description: 'Fill in the crypto wallet address details'
    },
    {
        title: 'Payment',
        description: 'Deposit the amount require for the exchange.'
    },
    {
        title: 'Exchange',
        description: 'Wait for your transaction to be completed'
    },
];







export const initialLocationsData = [
    {
        id: 1,
        symbol: 'USDT',
        name: 'BEP20',
        decimal: 18,
        icon: usdtbsc,
        description: 'Tether Binance Smart Chain',
        contractAddress: '0x55d398326f99059fF775485246999027B3197955',
        Short: 'BSC',
        Long: "binance_smart_chain",
        chain: 'bsc',
        explorer:"https://bscscan.com"
    },
    {
        id: 2,
        symbol: 'RUSD',
        name: 'RAMA20',
        decimal: 18,
        icon: rama,
        description: 'Ramestta Chain',
        contractAddress: '0x2A32e2102467135E22Ca015277E397E9f3B85AF2',
        Short: 'Ramestta',
        Long: 'ramestta',
        chain: 'ramestta',
        explorer:"https://ramascan.com"
    },
    // {
    //     id: 3,
    //     symbol: 'USDT',
    //     name: 'TRC20',
    //     decimal: 6,
    //     icon: usdtrx,
    //     description: 'Tether Tron Chain',
    //     contractAddress: 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t',
    //     Short: 'TRX',
    //     Long: 'tron',
    //     chain: 'tron'
    //     explorer: https://tronscan.org
    // },
];

export default function BridgeTab() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    const colorMode = React.useContext(ColorModeContext);
    const theme = useTheme();
    const { openConnectModal } = useConnectModal();
    const { address } = useAccount();

    const [dropdownOneValue, setDropdownOneValue] = useState<string>('MATIC');
    const [dropdownTwoValue, setDropdownTwoValue] = useState<string>('RAMA');
    const [recipientAddress, setRecipientAddress] = useState('')

    // State for arrow rotation
    const [isRotated, setIsRotated] = useState(false);

    // Function to handle swapping of dropdown values and arrow rotation
    const handleSwap = () => {
        const temp = dropdownOneValue;
        setDropdownOneValue(dropdownTwoValue);
        setDropdownTwoValue(temp);
        setIsRotated(!isRotated);
    };



    const [activeStep, setActiveStep] = useState(0);
    const [open, setOpen] = useState(false);


    const handleNext = async () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };


    const handleOpen = () => {

        setOpen(true);

    };

    // const [locationsData, setLocationsData] = useState(initialLocationsData);
    // const [locationsData2, setLocationsData2] = useState(initialLocationsData2);
    const [isRotated2, setIsRotated2] = useState(false);

    // from and to value 3rd party (transfer component)
    const [fromValue, setFromValue] = useState('');
    const [toValue, setToValue] = useState('');
    const [selected1, setSelected1] = useState<number>(1); // Default to id 1
    const [selected2, setSelected2] = useState<number>(2); // Default to id 2
    // end

    const handleReset = () => {
        setActiveStep(0);
        setFromValue('');
        setToValue('')
        setRecipientAddress('')
    };


    // const handleSwap2 = () => {
    //     // Swap the data between locationsData and locationsData2
    //     const temp = locationsData;
    //     setLocationsData(locationsData2);
    //     setLocationsData2(temp);

    //     // Optionally toggle the rotated state for animation or UI feedback
    //     setIsRotated2(!isRotated2);
    // };

    const getSelectInfo = (selected: number) => {
        return initialLocationsData.find((item) => item.id == selected);
    }


    const { data:mutateData,mutateAsync,isPending,isSuccess } = useMutation({
        mutationFn:  (body:any) => {
            return  createTx(body)
        }
        ,
        onSuccess(data, variables, context) {
            handleNext()
        },
        onError(error, variables, context) {
            if(error.name==='AxiosError'){
                handleBack()
            }
        },
    })



    const { data: txDetail } = useQuery({
        queryKey: ['txDetailById',mutateData?.data._id],
        queryFn: () => {
            return txDetailById(mutateData?.data._id)
        }
        ,
    })



    React.useEffect(()=>{
        
        if(activeStep ===2 && txDetail?.data?.txStatus==='completed'){
            
            handleNext()
        }
    },[activeStep,txDetail])

    React.useEffect(()=>{
        
        if(activeStep===3 && txDetail?.data?.settlementStatus==='completed'){
            console.log(txDetail?.data?.settlementStatus==='completed');
            
            
            handleNext()
        }
    },[activeStep,txDetail])

    const List = [
        {
            title: "You send",
            data: `${fromValue} ${getSelectInfo(selected1)?.symbol}${getSelectInfo(selected1)?.Short}`
        },
        {
            title: "Exchange rate",
            data: `1 ${getSelectInfo(selected1)?.symbol}${getSelectInfo(selected1)?.Short} ~ 1 ${getSelectInfo(selected2)?.symbol}${getSelectInfo(selected2)?.Short}`
        },
        {
            title: "Service fee 0.25%",
            data: `${(Number(toValue) * 0.0025).toFixed(2)} ${getSelectInfo(selected2)?.symbol}${getSelectInfo(selected2)?.Short}`
        },
        {
            title: "Network fee",
            data: `0 ${getSelectInfo(selected2)?.symbol}${getSelectInfo(selected2)?.Short}`
        },
        {
            title: "You get",
            data: `~${(Number(toValue) * 0.9975).toFixed(2)} ${getSelectInfo(selected2)?.symbol}${getSelectInfo(selected2)?.Short}`
        },
    ];

    const checkoutBox = [
        {
            title: "You send",
            data: `${fromValue} ${getSelectInfo(selected1)?.symbol}${getSelectInfo(selected1)?.Short}`,
            blockchain: `${getSelectInfo(selected1)?.Long}`,
            color: '#17AF09',
        },
        {
            title: "You get",
            data: `~${(Number(toValue) * 0.9975).toFixed(2)} ${getSelectInfo(selected2)?.symbol}${getSelectInfo(selected2)?.Short}`,
            blockchain: `${getSelectInfo(selected2)?.Long}`,
            color: '#17AF09',
        },
        {
            title: "Exchange fee",
            data: `${(Number(toValue) * 0.0025).toFixed(2)} ${getSelectInfo(selected2)?.symbol}${getSelectInfo(selected2)?.Short}`,
            blockchain: "The exchange fee already Included in the displayed amount you’ll get",
            color: '#999',
        },
        {
            title: "Network fee",
            data: `0 ${getSelectInfo(selected2)?.symbol}${getSelectInfo(selected2)?.Short}`,
            blockchain: "The network fee already Included in the displayed amount you’ll get",
            color: '#999',
        },
        {
            title: "Recipient address",
            data: recipientAddress,
            color: '#17AF09',
        },
        {
            title: "Exchange rate",
            data: `1 ${getSelectInfo(selected1)?.symbol}${getSelectInfo(selected1)?.Short} ~ 1 ${getSelectInfo(selected2)?.symbol}${getSelectInfo(selected2)?.Short}`,
            color: '#17AF09',
        },


    ];

    const Completed = [
        {
            title: "Amount from",
            data: `${formatUnits(BigInt(txDetail?txDetail?.data?.fromAmountInWei:0),Number(getSelectInfo(selected1)?.decimal))} ${getSelectInfo(selected1)?.symbol}${getSelectInfo(selected1)?.Short}`,
            grid: 6,
        },
        {
            title: "Amount to",
            data: `${formatUnits(BigInt(txDetail?txDetail?.data?.toAmountInWei:0),Number(getSelectInfo(selected2)?.decimal))} ${getSelectInfo(selected2)?.symbol}${getSelectInfo(selected2)?.Short}`,
            grid: 6,
        },
        {
            title: "Amount received",
            data:  `${txDetail?.data?.amountReceivedAt}`,
            grid: 6,
        },
        {
            title: "Amount sent",
            data:  `${txDetail?.data?.amountSentAt}`,
            grid: 6,
        },
        {
            title: "Exchange rate",
            data: `1 ${getSelectInfo(selected1)?.symbol}${getSelectInfo(selected1)?.Short} ~ 1 ${getSelectInfo(selected2)?.symbol}${getSelectInfo(selected2)?.Short}`,
            grid: 6,
        },
        {
            title: "Network fee",
            data: `0 ${getSelectInfo(selected2)?.symbol}${getSelectInfo(selected2)?.Short}`,
            grid: 6,
        },
        {
            title: "Recipient address",
            data: txDetail?.data?.receiverAddress,
            grid: 12,
        },
    
    
    ];


    const renderStepContent = (step: number) => {
        switch (step) {
            case 0:
                return (
                    <>
                        <Box>
                            <Grid container spacing={2}>
                                <Grid item lg={7.6} md={7.6} sm={12} xs={12}>
                                    <Transfer
                                        fromValue={fromValue}
                                        setFromValue={setFromValue}
                                        toValue={toValue}
                                        setToValue={setToValue}
                                        selected1={selected1}
                                        selected2={selected2}
                                        setSelected1={setSelected1}
                                        setSelected2={setSelected2}
                                        open={open}
                                        onClick={handleOpen}
                                    />
                                    <Box mt={2}>
                                        <Link style={{ color: theme.palette.primary.contrastText, textDecoration: 'none' }} href={''}                                    >
                                            <Box sx={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center',
                                                border: '1px solid #3DC1F2',
                                                padding: '0.8rem 1rem',
                                                borderRadius: '4px'
                                            }}>
                                                <Box sx={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: 1
                                                }}>
                                                    <LockOpenIcon />
                                                    <Typography>Floating rate</Typography>
                                                </Box>
                                                <Box>
                                                    <Typography>~1</Typography>
                                                </Box>
                                            </Box>
                                        </Link>
                                        <Box sx={{
                                            display: 'flex',
                                            alignItems: 'flex-start',
                                            gap: 1,
                                            marginTop: 1.5,
                                        }}>
                                            <HoverTool ImageItem={theme.palette.mode === "dark" ? tipd : tipl} Title={"xyz"} />
                                            <Typography fontSize={14} component={'span'}>The floating rate can change at any point due to market conditions, so you might receive more or less crypto than expected.</Typography>
                                        </Box>

                                        <Box sx={{
                                            backgroundColor: theme.palette.secondary.contrastText,
                                            border: `1px solid ${theme.palette.primary.light}`,
                                            borderRadius: '4px',
                                            padding: '1rem',
                                            marginTop: '1rem'
                                        }}>
                                            <Typography variant='h6'>Wallet address</Typography>
                                            <Box sx={{
                                                border: `1px solid ${theme.palette.secondary.light}`,
                                                padding: '8px 10px',
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center',
                                                borderRadius: '4px',
                                                marginTop: '1rem'
                                            }}>
                                                <Box>
                                                    <Typography>Recipient address</Typography>
                                                    <InputBase
                                                        onChange={(e) => setRecipientAddress(e.target.value)}
                                                        value={recipientAddress}
                                                        sx={{
                                                            flex: 1, color: theme.palette.primary.contrastText,
                                                            width: '100%',
                                                            fontSize: 14,
                                                            '& input': {
                                                                '-moz-appearance': 'textfield', // Firefox
                                                                '&::-webkit-outer-spin-button': {
                                                                    '-webkit-appearance': 'none', // Chrome, Safari, Edge
                                                                    margin: 0,
                                                                },
                                                                '&::-webkit-inner-spin-button': {
                                                                    '-webkit-appearance': 'none', // Chrome, Safari, Edge
                                                                    margin: 0,
                                                                },
                                                            },
                                                        }}
                                                        placeholder={`Enter your ${getSelectInfo(selected2)?.symbol}${getSelectInfo(selected2)?.Short} Recipient address`}
                                                        type="text"

                                                        inputProps={{ 'aria-label': 'search google maps' }}
                                                    />
                                                </Box>
                                                <Box>
                                                    <Link href={''} style={{ color: theme.palette.primary.contrastText }}>
                                                        <QrCodeScannerIcon />
                                                    </Link>
                                                </Box>
                                            </Box>
                                            <FormControlLabel sx={{
                                                '.MuiFormControlLabel-label': {
                                                    fontSize: '14px', // Set your custom font size here
                                                },
                                            }} control={<Checkbox sx={{
                                                color: '#1D1D20', // Default color (unchecked)
                                                '&.Mui-checked': {
                                                    color: '#3DC1F2', // Custom color when checked
                                                },
                                            }} defaultChecked />} label="I agree to the Terms of Use, Privacy Policy and AML/KYC" />

                                        </Box>

                                        <ButtonAll />

                                    </Box>
                                </Grid>
                                <Grid item lg={4.4} md={4.4} sm={12} xs={12}>
                                    <TransactionDetails items={List} />
                                </Grid>
                            </Grid>
                        </Box>
                    </>
                )
            case 1:
                return (
                    <>

                        <Box>
                            <Grid container spacing={2}>
                                <Grid item lg={7.6} md={7.6} sm={12} xs={12}>

                                    <Box>



                                        <Box sx={{
                                            backgroundColor: theme.palette.secondary.contrastText,
                                            border: `1px solid ${theme.palette.primary.light}`,
                                            borderRadius: '4px',
                                            padding: '1rem',
                                        }}>
                                            <Typography variant='h6'>Checkout</Typography>

                                            <Grid container spacing={2} mt={0.5}>
                                                {checkoutBox.map((item, index) => (
                                                    <Grid key={index} item lg={6} md={6} sm={6} xs={12}>
                                                        <Box sx={{
                                                            backgroundColor: theme.palette.secondary.contrastText,
                                                            border: `1px solid ${theme.palette.primary.light}`,
                                                            borderRadius: '4px',
                                                            padding: '10px',
                                                            height: '100%'
                                                        }}>
                                                            <Typography color={'#999'}>{item.title}</Typography>
                                                            <Typography sx={{ wordBreak: 'break-all' }} fontSize={14}>{item.data}</Typography>
                                                            {item.blockchain && <Typography fontSize={14} color={item.color}>blockchain: {item.blockchain}</Typography>}
                                                        </Box>
                                                    </Grid>
                                                ))}

                                            </Grid>

                                        </Box>
                                        <ButtonAll />
                                    </Box>
                                </Grid>
                                <Grid item lg={4.4} md={4.4} sm={12} xs={12}>
                                    <TransactionDetails items={List} />
                                </Grid>
                            </Grid>
                        </Box>

                    </>
                )
            case 2:
                return (
                    <>

                        <Box>
                            <Grid container spacing={2}>
                                <Grid item lg={7.6} md={7.6} sm={12} xs={12}>

                                    <Box mt={0}>



                                        <Box sx={{
                                            backgroundColor: theme.palette.secondary.contrastText,
                                            border: `1px solid ${theme.palette.primary.light}`,
                                            borderRadius: '4px',
                                            padding: '1rem',
                                        }}>
                                            <Box sx={{
                                                backgroundColor: theme.palette.secondary.contrastText,
                                                border: `1px solid ${theme.palette.primary.light}`,
                                                borderRadius: '4px',

                                            }}>
                                                <Typography sx={{
                                                    borderBottom: `1px solid ${theme.palette.primary.light}`,
                                                    padding: '1rem 1rem',
                                                }} variant='h6'>Send funds to the address below</Typography>

                                                <Box sx={{
                                                    padding: '1rem'
                                                }}>

                                                    <Box sx={{
                                                        display: 'flex',
                                                        justifyContent: 'space-between',
                                                        alignItems: 'flex-start',
                                                        '@media(max-width : 1200px)': {
                                                            display: 'inherit'
                                                        }
                                                    }}>
                                                        <Box  >
                                                            <Typography color={'#999999'}>Amount</Typography>

                                                        </Box>
                                                        <Box  >

                                                            <Typography fontSize={15} sx={{ wordBreak: 'break-all' }}>
                                                                {
                                                                    `${fromValue} ${getSelectInfo(selected1)?.symbol}${getSelectInfo(selected1)?.Short}`
                                                                }
                                                            </Typography>

                                                        </Box>
                                                    </Box>
                                                    <Box sx={{
                                                        display: 'flex',
                                                        justifyContent: 'space-between',
                                                        alignItems: 'flex-start',
                                                        '@media(max-width : 1200px)': {
                                                            display: 'inherit'
                                                        }
                                                    }}>
                                                        <Box  >
                                                            <Typography color={'#999999'}>Portal address ({getSelectInfo(selected1)?.symbol}{getSelectInfo(selected1)?.Short})</Typography>

                                                        </Box>
                                                        <Box  >

                                                            <Typography fontSize={15} sx={{
                                                                wordBreak: 'break-all', textAlign: 'end', '@media(max-width : 1200px)': {
                                                                    textAlign: 'left'
                                                                }
                                                            }}>{mutateData?.data.depositAddress}</Typography>
                                                            <Box sx={{
                                                                display: 'flex',
                                                                gap: '10px',
                                                                mt: 1,
                                                                justifyContent: 'end',
                                                                '@media(max-width : 1200px)': {
                                                                    justifyContent: 'left',
                                                                }
                                                            }}>
                                                                <Typography sx={{
                                                                    backgroundColor: '#999999',
                                                                    height:'24px',
                                                                    padding: '2px 5px',
                                                                    borderRadius: '4px'
                                                                }} fontSize={14} color={'#000'}>{getSelectInfo(selected1)?.name}</Typography>
                                                                <Typography fontSize={14} color={'#17AF09'}>blockchain: {getSelectInfo(selected1)?.Long}</Typography>
                                                            </Box>
                                                        </Box>
                                                    </Box>

                                                    <Box mt={2}>
                                                        <AddressCopy text={mutateData?.data.depositAddress} address={"Copy Address"} />
                                                    </Box>
                                                    <Box sx={{
                                                        display: 'flex',
                                                        alignItems: 'flex-start',
                                                        gap: 1,
                                                        marginTop: 1.5,
                                                    }}>
                                                        <HoverTool ImageItem={theme.palette.mode === "dark" ? tipd : tipl} Title={"xyz"} />
                                                        <Typography fontSize={14} component={'span'}>Please note that you can send funds to the address above only once.</Typography>
                                                    </Box>
                                                </Box>

                                            </Box>



                                        </Box>
                                  
                                    </Box>
                                </Grid>
                                <Grid item lg={4.4} md={4.4} sm={12} xs={12}>
                                    <Box sx={{
                                        backgroundColor: theme.palette.secondary.contrastText,
                                        border: `1px solid ${theme.palette.primary.light}`,
                                        borderRadius: '4px',
                                        padding: '1rem',
                                        marginBottom: '10px',
                                    }}>
                                        <Typography variant="h6">00:14:59</Typography>
                                        <Typography color={'#999'} fontSize={14}>Time left to send
                                            {" "}{
                                                `${fromValue} ${getSelectInfo(selected1)?.symbol}${getSelectInfo(selected1)?.Short}`
                                            }
                                        </Typography>
                                        <Box>
                                            <TextCopy text={address} address={`${mutateData?.data._id}`} />
                                            <Typography color={'#999'} fontSize={14} mt={-1.5}>Transaction ID</Typography>
                                        </Box>
                                    </Box>
                                    <TransactionDetails items={List} />

                                </Grid>
                            </Grid>
                        </Box>

                    </>
                )
            case 3:
                return (
                    <>

                        <Box>
                            <Grid container spacing={2}>
                                <Grid item lg={7.6} md={7.6} sm={12} xs={12}>
                                    {/* <Box sx={{
                                        backgroundColor: theme.palette.secondary.contrastText,
                                        border: `1px solid ${theme.palette.primary.light}`,
                                        borderRadius: '4px',
                                        padding: '1rem',
                                        marginTop: '1rem'
                                    }}>

                                        <Box sx={{
                                            border: `1px solid ${theme.palette.secondary.light}`,
                                            padding: '8px 10px',

                                            borderRadius: '4px',
                                            marginTop: '1rem'
                                        }}>
                                            <Box>

                                                <InputBase
                                                    fullWidth
                                                    sx={{
                                                        flex: 1, color: theme.palette.primary.contrastText,
                                                        width: '100%',
                                                        fontSize: 14,
                                                        '& input': {
                                                            '-moz-appearance': 'textfield', // Firefox
                                                            '&::-webkit-outer-spin-button': {
                                                                '-webkit-appearance': 'none', // Chrome, Safari, Edge
                                                                margin: 0,
                                                            },
                                                            '&::-webkit-inner-spin-button': {
                                                                '-webkit-appearance': 'none', // Chrome, Safari, Edge
                                                                margin: 0,
                                                            },
                                                        },
                                                    }}
                                                    placeholder={'Email'}
                                                    type="text"

                                                    inputProps={{ 'aria-label': 'search google maps' }}
                                                />
                                            </Box>

                                        </Box>
                                        <FormControlLabel sx={{
                                            marginTop: '10px',
                                            '.MuiFormControlLabel-label': {
                                                fontSize: '14px', // Set your custom font size here
                                            },
                                        }} control={<Checkbox sx={{
                                            color: '#1D1D20', // Default color (unchecked)
                                            '&.Mui-checked': {
                                                color: '#3DC1F2', // Custom color when checked
                                            },
                                        }} defaultChecked />} label="Send me promos, market news and product updates" />
                                        <Button
                                            sx={{ textTransform: 'capitalize' }}
                                            className={classes.save}

                                        >
                                            Save
                                        </Button>
                                    </Box> */}
                                    <Box mt={2}>
                                        <Box sx={{
                                            backgroundColor: theme.palette.secondary.contrastText,
                                            border: `1px solid ${theme.palette.primary.light}`,
                                            borderRadius: '4px',
                                            padding: '1rem',
                                        }}>
                                            <Typography variant='h6'>Exchanging... wait <CircularProgress color='success' size={20}/></Typography>

                                            {/* <VerticalStepper /> */}

                                        </Box>

                                    </Box>

                                    <Box mt={2}>



                                        <Box sx={{
                                            backgroundColor: theme.palette.secondary.contrastText,
                                            border: `1px solid ${theme.palette.primary.light}`,
                                            borderRadius: '4px',
                                            padding: '1rem',
                                        }}>
                                            <Typography variant='h6'>Faq</Typography>

                                            <Faqs />

                                        </Box>
                                    </Box>
                                    {/* <ButtonAll /> */}
                                </Grid>
                                <Grid item lg={4.4} md={4.4} sm={12} xs={12}>
                                    <TransactionDetails items={List} />
                                </Grid>
                            </Grid>
                        </Box>

                    </>
                )
            default:
                return (
                    <>

                        <Box>
                            <Grid container spacing={2}>
                                <Grid item lg={7.6} md={7.6} sm={12} xs={12}>

                                    <Box mt={0}>



                                        <Box sx={{
                                            backgroundColor: theme.palette.secondary.contrastText,
                                            border: `1px solid ${theme.palette.primary.light}`,
                                            borderRadius: '4px',
                                            padding: '1rem',
                                        }}>
                                            <Box sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '5px'
                                            }}>
                                                <CheckIcon sx={{ color: '#3CBE31', border: '1px solid #1D1D20', padding: '4px', borderRadius: '30px', display: 'inline-block', }} />
                                                <Typography variant='h6' color={'#3CBE31'}>Complete</Typography>
                                            </Box>


                                            <Grid container spacing={2} mt={0.5}>
                                                {Completed.map((item, index) => (
                                                    <Grid key={index} item lg={item.grid} md={item.grid} sm={6} xs={12}>
                                                        <Box sx={{

                                                            height: '100%'
                                                        }}>
                                                            <Typography color={'#999'}>{item.title}</Typography>
                                                            <Typography sx={{ wordBreak: 'break-all' }} fontSize={14}>{item.data}</Typography>
                                                        </Box>
                                                    </Grid>
                                                ))}

                                            </Grid>

                                            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, pt: 1, '@media(max-width : 600px)': { flexWrap: 'wrap', gap: 0.5, } }}>
                                                <Link
                                                  href={`${getSelectInfo(selected1)?.explorer}/tx/${txDetail?.data?.inTxHash}`}
                                                  target='_blank'
                                            
                                                    className={classes.connectBridgeOutline}
                                                    color="inherit"
                                                >
                                                    Input Hash
                                                </Link>
                                                <Link
                                                  href={`${getSelectInfo(selected2)?.explorer}/tx/${txDetail?.data?.outTxHash}`}
                                                  target='_blank'
                                                    className={classes.connectBridgeOutline}
                                                    color="inherit"
                                                >
                                                    Output Hash
                                                </Link>

                                            </Box>
                                            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, pt: 0.5, '@media(max-width : 600px)': { flexWrap: 'wrap', gap: 0.5, } }}>
                                                {/* <Button
                                                    variant='outlined'
                                                    sx={{ textTransform: 'capitalize', }}
                                                    className={classes.connectBridgeOutline}
                                                    color="inherit"

                                                >
                                                    Open History
                                                </Button> */}
                                                <Button
                                                    sx={{ textTransform: 'capitalize' }}
                                                    className={classes.connectBridge}
                                                    onClick={()=>{
                                                        handleReset()
                                                    }}

                                                >
                                                    New Transaction
                                                </Button>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item lg={4.4} md={4.4} sm={12} xs={12}>

                                </Grid>
                            </Grid>
                        </Box>

                    </>
                )
        }
    };



    const SideElement = () => {
        return (
            <Box sx={{
                width: '100%',
                backgroundColor: theme.palette.secondary.contrastText,
                border: `1px solid ${theme.palette.primary.light}`,
                borderRadius: '4px',
                padding: '1rem',
                marginTop: 2,
            }}>
                {open && (
                    <>
                        <Typography mb={2} fontSize={16} fontWeight={700}>Provide address information to create a transaction</Typography>
                        <Stepper sx={{
                            '.MuiStepLabel-root .Mui-active': {
                                color: '#3DC1F2', // Customize active step color
                            },
                            '.MuiStepLabel-root .Mui-completed': {
                                color: 'green', // Customize completed step color
                            },
                            '.MuiStepLabel-root .MuiStepLabel-label': {
                                color: '#999', // Customize inactive step color
                            },

                        }} activeStep={activeStep} orientation="vertical">
                            {steps.map((item, index) => (
                                <Step key={index}>
                                    <StepLabel sx={{ fontSize: '18px !important' }}>{item.title}</StepLabel>
                                    <StepContent sx={{ fontSize: '14px' }}>{item.description}</StepContent>
                                </Step>
                            ))}
                        </Stepper>

                    </>
                )}
            </Box>
        )
    }


    const ButtonAll = () => {
        return (
            <>
                <Grid container spacing={2}>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, pt: 1, '@media(max-width : 600px)': { flexWrap: 'wrap', gap: 0.5, } }}>
                            <Button
                                variant='outlined'
                                sx={{ textTransform: 'capitalize', }}
                                className={classes.connectBridgeOutline}
                                color="inherit"
                                disabled={activeStep === 0}
                                onClick={handleBack}

                            >
                                Back
                            </Button>
                            {
                                activeStep ===  1 ? (
                                    <Button
                                    sx={{
                                        textTransform: 'capitalize',
                                        opacity: !(
                                            !recipientAddress || isPending
                                        )
                                            ? "1" : '0.3'
                                    }}
                                    disabled={!recipientAddress||isPending}
                                    className={classes.connectBridge}
                                    onClick={async()=>{
                                        try {
                                            await mutateAsync({
                                                fromChain: getSelectInfo(selected1)?.chain,
                                                toChain: getSelectInfo(selected2)?.chain,
                                                fromToken: `${getSelectInfo(selected1)?.symbol}:${getSelectInfo(selected1)?.contractAddress}`,
                                                toToken: `${getSelectInfo(selected2)?.symbol}:${getSelectInfo(selected2)?.contractAddress}`,
                                                receiverAddress: recipientAddress,
                                                amountInWei: parseUnits(
                                                    fromValue,
                                                    getSelectInfo(selected1)?.decimal as number
                                                ).toString()
                                            })
                                        } catch (error) {
                                            console.log(error);
                                            
                                        }
                                    }}
                                >
                                    Continue { isPending && <CircularProgress color='inherit' size={15}/>}
                                </Button>
                                ):(
                                    <Button
                                    sx={{
                                        textTransform: 'capitalize',
                                        opacity: !(
                                            !recipientAddress || (toValue)==='' || Number(toValue)<25
                                        )
                                            ? "1" : '0.3'
                                    }}
                                    disabled={!recipientAddress || (toValue)==='' || Number(toValue)<25 }
                                    className={classes.connectBridge}
                                    onClick={activeStep === steps.length - 0 ? handleReset : handleNext}
                                >
                                    {activeStep === steps.length - 1 ? 'Reset' : `${activeStep !== 1 && "Next Step"}`}
                                </Button>
                                )
                            }
            
                        </Box>
                    </Grid>

                </Grid>
            </>
        )
    }




    return (
        <Box>


            <Box sx={{ width: '100%', }}>

                <Grid container spacing={2}>
                    <Grid item lg={2.5} md={2.5} sm={12} xs={12}></Grid>
                    <Grid item lg={6} md={7} sm={12} xs={12}>
                        <Box sx={{ textTransform: 'capitalize', }}>
                            <Tabs
                                variant="scrollable"
                                sx={{
                                    backgroundColor: theme.palette.background.default,
                                    border: `1px solid ${theme.palette.secondary.light}`,
                                    borderRadius: '6px',
                                    padding: '4px 6px 6px 6px',
                                    '.MuiTabs-indicator': {
                                        height: 46,
                                        color: '#000',
                                        background: `linear-gradient(0deg, ${theme.palette.primary.main},${theme.palette.primary.main})`,
                                        border: `1px solid ${theme.palette.secondary.light}`,
                                        borderRadius: '8px',
                                        backgroundColor: 'transparent',
                                    },
                                    '.Mui-selected': {
                                        color: `${theme.palette.primary.contrastText} !important`,
                                        textTransform: 'capitalize',
                                        zIndex: '1',
                                    }
                                }} value={value} onChange={handleChange} aria-label="basic tabs example">
                                <Tab sx={{ textTransform: 'capitalize', color: "#999", borderRadius: '6px','@media(max-width : 600px)':{width:'175px'} }} label="Ramestta Bridge" {...a11yProps(0)} />
                                <Tab sx={{ textTransform: 'capitalize', color: "#999", borderRadius: '6px','@media(max-width : 600px)':{width:'175px'} }} label="Cross-chain Bridge" {...a11yProps(1)} />
                                <Tab sx={{ textTransform: 'capitalize', color: "#999", borderRadius: '6px','@media(max-width : 600px)':{width:'175px'} }} label="Third-Party Bridges" {...a11yProps(2)} />
                            </Tabs>
                        </Box>
                    </Grid>
                    <Grid item lg={3.5} md={2.5} sm={12} xs={12}>


                    </Grid>
                </Grid>


                <CustomTabPanel value={value} index={0}>
                    <Box mt={1.5}>
                        {/* <Grid container spacing={2}>
                            <Grid item lg={2.5} md={2.5} sm={12} xs={12}></Grid>
                            <Grid item lg={6} md={7} sm={12} xs={12}>
                                <Box
                                    sx={{
                                        backgroundColor: theme.palette.secondary.contrastText,
                                        border: `1px solid ${theme.palette.primary.light}`,
                                        borderRadius: '4px',
                                    }}
                                >
                                    <Box
                                        sx={{
                                            backgroundColor: theme.palette.background.default,
                                            borderRadius: '4px',
                                            padding: '10px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '10px',
                                        }}
                                    >
                                        <Typography>Bridge</Typography>
                                        <HoverTool
                                            ImageItem={theme.palette.mode === 'dark' ? tipd : tipl}
                                            Title={
                                                'The Ramestta Native Bridge is a decentralized bridge for asset transfers between Polygon and RAMA networks.'
                                            }
                                        />
                                    </Box>

                                    <Box sx={{ padding: '10px' }}>
                                        <Typography>Transfer from</Typography>
                                        <Box
                                            sx={{
                                                backgroundColor: theme.palette.secondary.light,
                                                marginTop: '10px',
                                                padding: '10px',
                                                borderRadius: '8px',
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                }}
                                            >
                                                <Selector value={dropdownOneValue} onChange={setDropdownOneValue} />
                                                <Typography color={'#999'}>
                                                    Balance:{' '}
                                                    <Typography component={'span'} color={theme.palette.primary.contrastText}>
                                                        0
                                                    </Typography>
                                                </Typography>
                                            </Box>

                                            <Box
                                                className={classes.flex_box2}
                                                sx={{
                                                    backgroundColor: theme.palette.secondary.contrastText,
                                                    padding: '10px',
                                                    borderRadius: '6px',
                                                    marginTop: '10px',
                                                    '@media(max-width : 600px)': {
                                                        flexWrap: 'wrap',
                                                        justifyContent: 'center'
                                                    }

                                                }}
                                            >
                                                <Box>
                                                    <InputBase
                                                        sx={{
                                                            flex: 1, color: theme.palette.primary.contrastText,
                                                            width: '100%',
                                                            fontSize: 20,
                                                            '& input': {
                                                                '-moz-appearance': 'textfield', // Firefox
                                                                '&::-webkit-outer-spin-button': {
                                                                    '-webkit-appearance': 'none', // Chrome, Safari, Edge
                                                                    margin: 0,
                                                                },
                                                                '&::-webkit-inner-spin-button': {
                                                                    '-webkit-appearance': 'none', // Chrome, Safari, Edge
                                                                    margin: 0,
                                                                },
                                                            },
                                                        }}
                                                        placeholder={'0'}
                                                        type="number"

                                                        inputProps={{ 'aria-label': 'search google maps' }}
                                                    />
                                                </Box>

                                                <Box className={classes.flex_box}
                                                    sx={{
                                                        '@media(max-width : 600px)': {
                                                            flexWrap: 'wrap',
                                                            justifyContent: 'center',
                                                            gap: '5px'
                                                        }
                                                    }}
                                                >
                                                    <Box className={classes.flex_box}>
                                                        <PercentageBtn Text={'25%'} />
                                                        <PercentageBtn Text={'50%'} />
                                                        <PercentageBtn Text={'Max'} />
                                                    </Box>
                                                    <Box
                                                        sx={{
                                                            backgroundColor: theme.palette.secondary.light,
                                                            width: '1px',
                                                            height: '50px',
                                                            '@media(max-width : 600px)': {
                                                                display: 'none'
                                                            }
                                                        }}
                                                    />
                                                    <DropdownTwo />
                                                </Box>
                                            </Box>
                                        </Box>

                                        <Box textAlign={'center'} my={2}>
                                            <Box
                                                sx={{
                                                    display: 'inline-block',
                                                    backgroundColor: theme.palette.primary.main,
                                                    border: `1px solid ${theme.palette.secondary.light}`,
                                                    borderRadius: '40px',
                                                    padding: '4px',
                                                    cursor: 'pointer',
                                                }}
                                                onClick={handleSwap}
                                                className={`${classes.rotateArrow} ${isRotated ? classes.rotated : ''}`}
                                            >
                                                <Image src={transferArrow} alt={''} style={{ display: 'block' }} />
                                            </Box>
                                        </Box>

                                        <Box className={classes.flex_box2}
                                            sx={{
                                                '@media(max-width : 600px)': {
                                                    flexWrap: 'wrap',
                                                    justifyContent: 'center',
                                                    gap: '5px'
                                                }
                                            }}
                                        >
                                            <Box>
                                                <Typography>Transfer To</Typography>
                                            </Box>
                                            <Box className={classes.flex_box}>
                                                <Typography color={'#999'}>
                                                    + Transfer to different address
                                                </Typography>
                                                <HoverToolTwo
                                                    ImageItem={theme.palette.mode === 'dark' ? infod : infol}
                                                    Title={
                                                        'You can also transfer the requested amount to a different wallet address Than the connected wallet.'
                                                    }
                                                />
                                            </Box>
                                        </Box>

                                        <Box
                                            sx={{
                                                backgroundColor: theme.palette.secondary.light,
                                                marginTop: '10px',
                                                padding: '10px',
                                                borderRadius: '8px',
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                }}
                                            >
                                                <Selector value={dropdownTwoValue} onChange={setDropdownTwoValue} />
                                                <Typography color={'#999'}>
                                                    Balance:{' '}
                                                    <Typography component={'span'} color={theme.palette.primary.contrastText}>
                                                        0
                                                    </Typography>
                                                </Typography>
                                            </Box>
                                        </Box>

                                        <Box
                                            className={classes.flex_box2}
                                            sx={{
                                                border: `1px solid ${theme.palette.secondary.light}`,
                                                padding: '10px',
                                                borderRadius: '6px',
                                                marginTop: '1rem',
                                            }}
                                        >
                                            <Box className={classes.flex_box}>
                                                <Typography>Refuel Gas</Typography>
                                                <HoverTool
                                                    ImageItem={theme.palette.mode === 'dark' ? tipd : tipl}
                                                    Title={'Access tools and resources for the Polygon network.'}
                                                />
                                            </Box>
                                            <Box className={classes.flex_box}>
                                                <Typography>Not Supported</Typography>
                                                <HoverTool
                                                    ImageItem={theme.palette.mode === 'dark' ? tipd : tipl}
                                                    Title={'This feature is currently not supported.'}
                                                />
                                            </Box>
                                        </Box>
                                        {address ? (
                                            <>
                                                <Box mt={1.5}>
                                                    <ButtonText
                                                        ButtonText={'Enter Amount'} url={'#'} />
                                                </Box>
                                                <Link className={classes.thirdparty} href={''}>Bridge using Third-Party Bridges What does → </Link>
                                            </>
                                        ) : (
                                            <Button
                                                sx={{ textTransform: 'capitalize' }}
                                                onClick={openConnectModal}
                                                className={classes.connectBridge}
                                            >
                                                Connect Wallet and Bridge
                                            </Button>
                                        )}
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item lg={3.5} md={2.5} sm={12} xs={12}>

                                <Box>
                                    <Box sx={{
                                        '@media(max-width : 900px)': {
                                            display: 'none'
                                        }
                                    }}>
                                        <Modal />
                                        <Box
                                            sx={{ position: 'relative' }}
                                        >
                                            <Typography
                                                sx={{

                                                    backgroundColor: theme.palette.background.default,
                                                    border: `1px solid ${theme.palette.secondary.light}`,
                                                    color: theme.palette.primary.contrastText,
                                                    padding: '0.8rem 1rem',
                                                    borderRadius: '8px',
                                                    rotate: '90deg',
                                                    display: 'inline-block',
                                                    position: 'absolute',
                                                    top: '6rem',
                                                    right: '-5rem'

                                                }}
                                            >0 pending transaction</Typography>
                                        </Box>
                                    </Box>
                                    <Box sx={{
                                        display: 'none',
                                        '@media(max-width : 900px)': {
                                            display: 'block'
                                        }
                                    }}>
                                        <ModalItem />
                                    </Box>

                                </Box>
                            </Grid>
                        </Grid> */}
                        <SelectDrop />
                    </Box>
                </CustomTabPanel>

                <CustomTabPanel value={value} index={1}>
                    <Box mt={1.5}>
                        <Grid container spacing={2}>
                            <Grid item lg={2.5} md={2.5} sm={12} xs={12}></Grid>
                            <Grid item lg={6} md={7} sm={12} xs={12}>
                                <Box
                                    sx={{
                                        backgroundColor: theme.palette.secondary.contrastText,
                                        border: `1px solid ${theme.palette.primary.light}`,
                                        borderRadius: '4px',
                                        padding: '10px',
                                    }}
                                >
                                    <Box
                                        sx={{
                                            backgroundColor: theme.palette.secondary.contrastText,
                                            border: `1px solid ${theme.palette.primary.light}`,
                                            borderRadius: '4px',
                                            height: '400px',
                                            textAlign: "center",
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}
                                    >

                                        <Typography fontSize={20} color={'#3DC1F2'}>Coming Soon</Typography>

                                    </Box>

                                </Box>
                            </Grid>
                            <Grid item lg={3.5} md={2.5} sm={12} xs={12}>


                            </Grid>
                        </Grid>
                    </Box>
                </CustomTabPanel>

                <CustomTabPanel value={value} index={2}>

                    {open ?
                        <Grid container spacing={2}>
                            <Grid item lg={2.5} md={2.5} sm={12} xs={12}>
                                {activeStep === steps.length - 0 ?
                                    "" :
                                    <SideElement />
                                }

                            </Grid>
                            <Grid item lg={9.5} md={9.5} sm={12} xs={12}>
                                <Box sx={{ mt: 2, mb: 1 }}>
                                    {renderStepContent(activeStep)}
                                </Box>
                            </Grid>
                        </Grid>
                        :
                        <Box mt={1.5}>
                            <Grid container spacing={2}>
                                <Grid item lg={2.5} md={2.5} sm={12} xs={12}></Grid>
                                <Grid item lg={6} md={7} sm={12} xs={12}>
                                    <Transfer
                                        fromValue={fromValue}
                                        setFromValue={setFromValue}
                                        toValue={toValue}
                                        setToValue={setToValue}
                                        selected1={selected1}
                                        selected2={selected2}
                                        setSelected1={setSelected1}
                                        setSelected2={setSelected2}
                                        onClick={handleOpen}
                                    />
                                </Grid>
                                <Grid item lg={3.5} md={2.5} sm={12} xs={12}>
                                </Grid>
                            </Grid>
                        </Box>
                    }



                </CustomTabPanel>
            </Box>
        </Box>
    );
}
