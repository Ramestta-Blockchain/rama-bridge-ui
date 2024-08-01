
import axios from "axios";
import ApiConfigs from "..";
 

export const validatorStaking = async (validatorId:string) => {
    try {
        const { data } = await axios({
            method: 'GET',
            url: `${ApiConfigs.validatorStaking}/${validatorId}`
        })
        return data
    } catch (error) {

    }
}