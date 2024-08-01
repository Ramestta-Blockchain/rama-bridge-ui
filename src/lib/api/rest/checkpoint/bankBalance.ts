import axios from "axios";
import ApiConfigs from "..";


export const bankBalance = async (address:string) => {
    try {
        const { data } = await axios({
            method: 'GET',
            url: `${ApiConfigs.bankBalance}/${address}`
        })
        
        return data
    } catch (error) {

    }
}