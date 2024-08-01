import { IconButton, Tooltip } from "@mui/material";
import Image from "next/image";

 interface props{
    ImageItem:any;
    Title:any;
 }

 const HoverTool = ({ImageItem,Title}:props)=>{
    return(
        <>
        <Tooltip placement="right-start" title={Title}>
                <IconButton sx={{ padding: '0' }}>
                    <Image src={ImageItem} alt="" />
                </IconButton>
            </Tooltip>
        </>
    )
 }

 export default HoverTool;