\*Basic wallet implementation using wallet connect

\*\* Additional information and documentation on the WagmiConfig can be found here: https://wagmi.sh/react/WagmiConfig
The wagmi config is a framework agnostic (Vanilla JS) config that manages wallet connection state and configuration, such as: auto-connection, connectors, and viem clients.

\*\* Additional information and documentation on wagmi chains can be found here: https://wagmi.sh/react/chains
The wagmi/chains entrypoint proxies the viem/chains entrypoint, which contains references to popular EVM-compatible chains such as: Polygon, Optimism, Avalanche, and more.
viem/chains documentation: https://viem.sh/docs/clients/chains.html#chains

\*\* Additional information and documentation on the wagmi useAccount hook can be found here: https://wagmi.sh/react/hooks/useAccount
The hook is used for accessing account data and connection status

\*\*Please review https://docs.walletconnect.com/web3modal/react/theming for options on theming and further customization of the component

\*\*Basic component is currently setup for the user to select from Ethereum mainnet or arbitrum. This is customizable for a variety of chains as detailed here: https://docs.walletconnect.com/advanced/multichain/chain-list

\*\*Default options are detailed here and can be used to establish defaults: https://docs.walletconnect.com/web3modal/react/options
