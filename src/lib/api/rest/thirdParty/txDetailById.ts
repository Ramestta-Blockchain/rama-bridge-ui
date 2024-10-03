import axios from "axios";
import ApiConfigs from "..";


export const txDetailById = async (id:string) => {
    try {
        const { data } = await axios({
            method: 'GET',
            url: ApiConfigs.txById,
            params: {
                id: id
            }
        })
        
        return data
    } catch (error) {
console.log(error);

    }
}