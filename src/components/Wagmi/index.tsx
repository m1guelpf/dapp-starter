import { useRouter } from 'next/navigation'
import { ReactNode } from 'react'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { mainnet } from 'wagmi/chains'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'

const WagmiProvider = ({ children }: { children: ReactNode }) => {
	const router = useRouter()

	const { chains, publicClient, webSocketPublicClient } = configureChains(
		[mainnet],
		[alchemyProvider({ apiKey: process.env.ALCHEMY_API_KEY }), publicProvider()]
	)

	const config = createConfig({
		autoConnect: true,
		connectors: [new MetaMaskConnector({ chains })],
		publicClient,
		webSocketPublicClient,
	})

	return <WagmiConfig config={config}>{children}</WagmiConfig>
}

export { WagmiProvider }
