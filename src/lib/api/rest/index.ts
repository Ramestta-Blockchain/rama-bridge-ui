 

const url = "https://latest-heimdall-api.ramestta.com";
export const ramestta_rpc_url = "https://blockchain2.ramestta.com"
export const ramaCoinGeckoPrice = "https://api.coingecko.com/api/v3/coins"
 

const ApiConfigs = {
    overview: `${url}/overview`,
    latest:`${url}/checkpoints/latest`,
    validatorSet:`${url}/staking/validator-set`,
    bankBalance:`${url}/bank/balances`,
    validatorStaking:`${url}/staking/validator`,
    ramaCoinGeckoPrice:`${ramaCoinGeckoPrice}/ramestta`,
    
}

 


export default ApiConfigs