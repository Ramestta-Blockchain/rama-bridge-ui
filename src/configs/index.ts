import {
  createConfig,
  http,
  cookieStorage,
  createStorage
} from 'wagmi'


import { Address, type Chain } from 'viem'

export const ramestta = {
  id: 1370,
  name: 'Ramestta',
  nativeCurrency: { name: 'RAMA', symbol: 'RAMA', decimals: 18 },
  rpcUrls: {
    default: { http: ['https://blockchain.ramestta.com'] },
  },
  blockExplorers: {
    default: { name: 'Ramascan', url: 'https://ramascan.com' },
  },
  contracts: {
    // ensRegistry: {
    //   address: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
    // },
    // ensUniversalResolver: {
    //   address: '0xE4Acdd618deED4e6d2f03b9bf62dc6118FC9A4da',
    //   blockCreated: 16773775,
    // },
    multicall3: {
      address: '0xE4fA850Bd3abBC63e07E688c27eF9a334992283d',
      blockCreated: 7334177,
    },
  },
} as const satisfies Chain

export const pingaksha = {
  id: 1377,
  name: 'Pingaksha Testnet',
  nativeCurrency: { name: 'RAMA', symbol: 'RAMA', decimals: 18 },
  rpcUrls: {
    default: { http: ['https://testnet.ramestta.com'] },
  },
  blockExplorers: {
    default: { name: 'Ramascan', url: 'https://pingaksha.ramascan.com' },
  },
  contracts: {
    // ensRegistry: {
    //   address: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
    // },
    // ensUniversalResolver: {
    //   address: '0xE4Acdd618deED4e6d2f03b9bf62dc6118FC9A4da',
    //   blockCreated: 16773775,
    // },
    multicall3: {
      address: '0xE4fA850Bd3abBC63e07E688c27eF9a334992283d',
      blockCreated: 2451020,
    },
  },
} as const satisfies Chain

export const config = createConfig({
  chains: [ramestta,pingaksha],
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
  transports: {
    [ramestta.id]: http('https://blockchain.ramestta.com'),
    [pingaksha.id]: http('https://testnet.ramestta.com')
  },
})

 



 