
import axios from "axios";
import ApiConfigs from "..";

export const latest = async () => {
    try {
        const { data } = await axios({
            method: 'GET',
            url: ApiConfigs.latest
        })
        return data
    } catch (error) {

    }
}