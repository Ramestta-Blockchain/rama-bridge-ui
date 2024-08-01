import { Box } from "@mui/material";
import { useState } from "react";
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const Favorite = () => {
    const [isToggled, setIsToggled] = useState(false);

    const handleToggle = () => {
        setIsToggled(!isToggled);
    };
    return (
        <Box onClick={handleToggle}  >{isToggled ? <StarIcon sx={{ color: '#FFD600' }} /> : <StarBorderIcon sx={{ color: '#FFD600' }} />}</Box>
    )
}

export default Favorite;