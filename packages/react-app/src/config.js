import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0x15EE5E921B915166dD04385DfE026b54bdD3ef22";

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]:
      "https://eth-goerli.g.alchemy.com/v2/q4rh3JvEKearMPIF0UtCphwu6-1SU9bv",
  },
};
