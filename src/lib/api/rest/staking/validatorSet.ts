
import axios from "axios";
import ApiConfigs from "..";

export const validatorSet = async () => {
    try {
        const { data } = await axios({
            method: 'GET',
            url: ApiConfigs.validatorSet
        })
        return data
    } catch (error) {

    }
}