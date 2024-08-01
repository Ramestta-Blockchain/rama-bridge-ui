import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { makeStyles } from '@mui/styles';
import Image from "next/image";
import s1 from '../../icons/s1.svg'
import s2 from '../../icons/s2.svg'
import sl1 from '../../icons/sl1.svg'
import sl2 from '../../icons/sl2.svg'


const useStyles = makeStyles({
    box_text: {
        backgroundColor: '#fff',
        width: '12px',
        height: '12px',
        borderRadius: '30px',
    },
    box_text_wrap: {
        display: 'flex',
        alignItems: 'baseline',
        gap: '6px',

    }

})

const Roadmap__item = [
    {
        id: 1,
        Imaged: s1,
        Imagedl: sl1,
    },
    {
        id: 2,
        Imaged: s2,
        Imagedl: sl2,
    },
    {
        id: 3,
        Imaged: s1,
        Imagedl: sl1,
    },
    {
        id: 4,
        Imaged: s2,
        Imagedl: sl2,
    },

];

function SliderBox() {
    const classes = useStyles();
    const theme = useTheme();
    const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));
    const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "0px",
        slidesToShow: isMdUp ? 2 : isSmUp ? 2 : 1,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,




        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    centerPadding: "0px",
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerPadding: "0px",
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: "0px",
                }
            },
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: "0px",
                }
            }
        ]
    };

    return (
        <Box className="slider-container" sx={{ padding: '0 20px' }}>

            <Slider {...settings}>
                {Roadmap__item.map((item, index) => (
                    <Box key={index}>
                        <Image src={theme.palette.mode === "dark" ? item.Imaged : item.Imagedl} alt={""} style={{ width: '100%', }} />
                    </Box>
                ))}
            </Slider>
        </Box>
    );
}

export default SliderBox;
