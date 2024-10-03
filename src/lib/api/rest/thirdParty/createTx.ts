
import axios from "axios";
import ApiConfigs from "..";

export const createTx = async (body:any) => {
    console.log({body});
    
    try {
        const { data } = await axios({
            method: 'POST',
            url: ApiConfigs.create,
            data: body
        })
        console.log(data);
        
        return data
    } catch (error) {
        console.log(error);
        
    }
}