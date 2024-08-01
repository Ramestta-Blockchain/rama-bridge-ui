import axios from "axios";
import ApiConfigs from "..";


export const overview = async () => {
    try {
        const { data } = await axios({
            method: 'GET',
            url: ApiConfigs.overview
        })
        
        return data
    } catch (error) {

    }
}