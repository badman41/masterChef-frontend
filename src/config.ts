import { Configuration } from './diamondhand/config';
import deploymentLocal from './diamondhand/deployments/deployments.localhost.json';
import deploymentTestnet from './diamondhand/deployments/deployments.testnet.json';
import deploymentMainnet from './diamondhand/deployments/deployments.mainnet.json';
import { AllFarms } from './farms';

const configurations: { [env: string]: Configuration } = {
  development: {
    chainId: 42,
    etherscanUrl: 'https://kovan.etherscan.io/',
    defaultProvider: 'https://kovan.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
    deployments: deploymentLocal,
    pollingInterval: 5 * 1000,
    refreshInterval: 10 * 1000,
    defaultSlippageTolerance: 0.001,
    gasLimitMultiplier: 1.1,
    maxBalanceRefresh: 1000000,
    maxUnclaimedRefresh: 5,
    backendDisabled: false,
    farms: AllFarms,
    abis: {
      SERC20: deploymentLocal.TATU.abi,
      MasterChef: deploymentLocal.MasterChef.abi,
    },
    addresses: {
      SERC20: deploymentLocal.TATU.address,
      MasterChef: deploymentLocal.MasterChef.address,
      Multicall: deploymentLocal.Multicall.address,
    },
    admins: [
      '0x03DbFDC27697b311B38C1934c38bD97905C46Ed0',
      '0x62cA555de2D65f8e9D45a9B3d5C1b92aC1a64ecc',
      '0xfDde60b51F8b16f2549850741015324Da346Db46',
      '0x5AeBdE597752d689132Dc64D093ff4b09067e9e6',
      '0xa3A502569BF1bfBF7b361964d61335a7530D39e8',
      '0xD1d075DB389919a6985dDc9B32b5f3Ad6f0869cd',
    ],
  },
  testnet: {
    chainId: 42,
    etherscanUrl: 'https://kovan.etherscan.io/',
    defaultProvider: 'https://kovan.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
    deployments: deploymentTestnet,
    pollingInterval: 5 * 1000,
    refreshInterval: 10 * 1000,
    defaultSlippageTolerance: 0.001,
    gasLimitMultiplier: 1.1,
    maxBalanceRefresh: 1000000,
    maxUnclaimedRefresh: 5,
    backendUrl: 'https://api.diamondhand.fi',
    backendDisabled: false,
    farms: AllFarms,
    abis: {
      SERC20: deploymentLocal.TATU.abi,
      MasterChef: deploymentLocal.MasterChef.abi,
    },
    addresses: {
      SERC20: deploymentLocal.TATU.address,
      MasterChef: deploymentLocal.MasterChef.address,
    },
    admins: [
      '0x03DbFDC27697b311B38C1934c38bD97905C46Ed0',
      '0x62cA555de2D65f8e9D45a9B3d5C1b92aC1a64ecc',
      '0xfDde60b51F8b16f2549850741015324Da346Db46',
      '0x5AeBdE597752d689132Dc64D093ff4b09067e9e6',
      '0xa3A502569BF1bfBF7b361964d61335a7530D39e8',
      '0xD1d075DB389919a6985dDc9B32b5f3Ad6f0869cd',
    ],
  },
  mainnet: {
    chainId: 137,
    etherscanUrl: 'https://polygonscan.com/',
    defaultProvider: 'https://rpc-mainnet.maticvigil.com',
    deployments: deploymentMainnet,
    pollingInterval: 5 * 1000,
    refreshInterval: 10 * 1000,
    defaultSlippageTolerance: 0.001,
    gasLimitMultiplier: 1.1,
    maxBalanceRefresh: 1000000,
    farms: AllFarms,
    abis: {
      SERC20: deploymentLocal.TATU.abi,
      MasterChef: deploymentLocal.MasterChef.abi,
    },
    addresses: {
      SERC20: deploymentLocal.TATU.address,
      MasterChef: deploymentLocal.MasterChef.address,
    },
    admins: [
      '0x03DbFDC27697b311B38C1934c38bD97905C46Ed0',
      '0x62cA555de2D65f8e9D45a9B3d5C1b92aC1a64ecc',
      '0xfDde60b51F8b16f2549850741015324Da346Db46',
      '0x5AeBdE597752d689132Dc64D093ff4b09067e9e6',
      '0xa3A502569BF1bfBF7b361964d61335a7530D39e8',
      '0xD1d075DB389919a6985dDc9B32b5f3Ad6f0869cd',
    ],
  },
};

export const ExternalLinks = {
  twitter: 'https://twitter.com/IronFinance',
  documentations: 'https://docs.diamondhand.fi',
  codes: 'https://github.com/ironfinance',
  discord: 'https://discord.gg/HuekxzYj3p',
  medium: 'https://medium.com/@ironfinance',
  telegram: 'https://t.me/ironfinance',
  buyIron:
    'https://bsc.valuedefi.io/#/vswap?inputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56&outputCurrency=0x7b65b489fe53fce1f6548db886c08ad73111ddd8',
  mintIron:
    'https://app.iron.finance/bank?action=mint&pool=0xFE6F0534079507De1Ed5632E3a2D4aFC2423ead2',
  rules: 'https://docs.iron.finance/products/dragonball-lottery',
};

const env: string = process.env.REACT_APP_ENV || process.env.NODE_ENV || 'development';

const GATrackingCodes: Record<string, string> = {
  deployment: 'G-1WCVVE43MG',
  kovan: 'G-1WCVVE43MG',
  production: 'G-F9BRXKJ1CP',
  mainnet: 'G-F9BRXKJ1CP',
};

export const GATrackingCode = GATrackingCodes[env];

export const getDefaultConfiguration = () => {
  // config used when no ethereum detected
  return configurations[env];
};
