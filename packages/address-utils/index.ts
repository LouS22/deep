import { ethers } from 'ethers';

export function stringToId(input: string): string {
  const hash = ethers.keccak256(ethers.toUtf8Bytes(input.toLowerCase()));

  return BigInt(hash).toString();
}

//did:asset:deep:hh.asset:african-elephant-mask
export function parseAddress(address: string) {
  const [prefix, assetAddress] = address.split('.');

  const [scheme, didMethod, chainNamespace, chainReference] = prefix.split(':');

  const [assetNamespace, assetReference, tokenId] = assetAddress.split(':');

  return {
    scheme,
    didMethod,
    chain: {
      namespace: chainNamespace,
      reference: chainReference,
    },
    asset: {
      namespace: assetNamespace,
      reference: assetReference,
      identifier: Number(tokenId),
    },
  };
}

//did:asset:standard:vendorId.assetType:assetID
//did:asset:deep:hh.asset:african-elephant-mask
export function getOffChainAssetAddress(
  vendorId: string,
  assetName: string
): string {
  return `did:asset:deep:${vendorId}.asset:${assetName
    .toLowerCase()
    .replace(' ', '-')}`;
}

export function getOffChainAssetId(
  vendorId: string,
  assetName: string
): string {
  return stringToId(getOffChainAssetAddress(vendorId, assetName));
}

//'did:asset:eip155:1.erc721:0x06012c8cf97bead5deae237070f9587f8e7a266d:634446'
export function getEVMAssetAddress(
  chainId: number,
  tokenStandard: string,
  contractAddress: string,
  tokenId: number
) {
  return `did:asset:eip155:${chainId}.${tokenStandard}:${contractAddress}:${tokenId}`;
}

export function getEVMAssetId(
  chainId: number,
  tokenStandard: string,
  contractAddress: string,
  tokenId: number
): string {
  return stringToId(
    getEVMAssetAddress(chainId, tokenStandard, contractAddress, tokenId)
  );
}

//did:asset:deep:kusama.asset-hub:91:10
export function getPolkadotAssetHubAddress(
  chainId: string,
  collectionId: string,
  tokenId: number
) {
  return `did:asset:deep:${chainId}.asset-hub:${collectionId}:${tokenId}`;
}
export function getPolkadotAssetId(
  chainId: string,
  collectionId: string,
  tokenId: number
): string {
  return stringToId(getPolkadotAssetHubAddress(chainId, collectionId, tokenId));
}

type ChainNameToId = {
  [key: string]: number;
};

const chainNameToId: ChainNameToId = {
  mainnet: 1,
  ropsten: 3,
  rinkeby: 4,
  goerli: 5,
  kovan: 42,
  sepolia: 11155111,
  matic: 137,
  mumbai: 80001,
  xdai: 100,
  bsc: 56,
  bsctest: 97,
  avalanche: 43114,
  fuji: 43113,
  fantom: 250,
  fantomtest: 4002,
  heco: 128,
  hecotest: 256,
  harmony: 1666600000,
  harmonytest: 1666700000,
  okex: 66,
  okextest: 65,
  arbitrum: 42161,
  arbitrumtest: 421611,
};

export function getChainId(chainName: string): number {
  if (typeof chainName === 'string') {
    return chainNameToId[chainName.toLowerCase()] || 0;
  }
  return 0;
}

export function getChainName(chainId: number): string {
  const idToChainName: { [key: number]: string } = {};

  // Reverse the chainNameToId mapping
  for (const chainName in chainNameToId) {
    const id = chainNameToId[chainName];
    idToChainName[id] = chainName;
  }

  return idToChainName[chainId] || '';
}
