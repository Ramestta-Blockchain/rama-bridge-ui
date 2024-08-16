import { ColorModeContext } from "@/context";
import { IconButton, Tooltip, useTheme } from "@mui/material";
import Image from "next/image";
import { useContext } from "react";

 interface props{
    ImageItem:any;
    Title:any;
 }

 const HoverToolTwo = ({ImageItem,Title}:props)=>{
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();
    return(
        <>
        <Tooltip placement="bottom" title={Title}>
                <IconButton sx={{ padding: '0' }}>
                    <Image src={ImageItem} alt="" />
                </IconButton>
            </Tooltip>
        </>
    )
 }

 export default HoverToolTwo;