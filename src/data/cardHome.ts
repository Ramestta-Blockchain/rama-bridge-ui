
import tooltipd from '../icons/tooltipd.svg'
import tooltipl from '../icons/tooltipl.svg'
import cardarrow from '../icons/cardarrow.svg';


export const cardHome = [
    {
        CardTitle: 'TOTAL VALIDATORS',
        CardData: '105',
        TooltipForLight: tooltipl,
        TooltipForDark: tooltipd,
        msgTitle:'Total Validators',
        msgpara:'The total number of validators who verify transactions, add new blocks and submit checkpoints on Ethereum.'
        
    },
    {
        CardTitle: 'Total Stake',
        CardData: '3,600,306,912 RAMA',
        CardSmall: '$0.00',
        TooltipForLight: tooltipl,
        TooltipForDark: tooltipd,
        msgTitle:'Total Stake',
        msgpara:'The total MATIC staked on the network by validators and delegators to validate the network and earn rewards.'
    },
    {
        CardTitle: 'Total Rewards Distributed',
        CardData: '896,701,310 RAMA',
        TooltipForLight: tooltipl,
        TooltipForDark: tooltipd,
        msgTitle:'Total Rewards Distributed',
        msgpara:'Calculated earnings distributed to anyone staking their tokens on the Polygon network.'
    },
    {
        CardTitle: 'BOR BLOCK HEIGHT',
        CardData: '52,915,827',
        TooltipForLight: tooltipl,
        TooltipForDark: tooltipd,
        arrow:cardarrow,
        url:'/bor',
        msgTitle:'Bor Block Height',
        msgpara:'The number of blocks that have been created on the blockchain prior to this block.'
        
    },
    {
        CardTitle: 'HEIMDALL BLOCK HEIGHT',
        CardData: '17,368,093',
        TooltipForLight: tooltipl,
        TooltipForDark: tooltipd,
        arrow:cardarrow,
        url:'/heimdall',
        msgTitle:'Heimdall Block Height',
        msgpara:'The number of blocks on the Heimdall layer that have been created on the blockchain prior to this block.'
    },
    {
        CardTitle: 'LAST CHECKPOINT',
        CardData: '57,112',
        CardSmall: '45 minutes ago',
        TooltipForLight: tooltipl,
        TooltipForDark: tooltipd,
        arrow:cardarrow,
        url:'/checkpoints',
        msgTitle:'Last Checkpoint',
        msgpara:'The number of times Polygon transactions were saved to the Ethereum mainnet.'
    },
    {
        CardTitle: 'CHECKPOINT INTERVAL',
        CardData: '22 Minutes',
        TooltipForLight: tooltipl,
        TooltipForDark: tooltipd,
        msgTitle:'Checkpoint Interval',
        msgpara:'The time interval between two checkpoints.'
    },
    {
        CardTitle: 'PERFORMANCE BENCHMARK',
        CardData: '94.73',
        TooltipForLight: tooltipl,
        TooltipForDark: tooltipd,
        msgTitle:'Performance Benchmark',
        msgpara:`The network's performance measurement index. Its calculation is based on the percentage of checkpoints signed by the validators in the last 700 checkpoints.`
    },

]

