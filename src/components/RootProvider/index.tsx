'use client'

import { ReactNode } from 'react'
import { WagmiProvider } from '@/components/Wagmi'
import { ConnectKitProvider } from 'connectkit'

// Root Provider
const RootProvider = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<WagmiProvider>
				<ConnectKitProvider>{children}</ConnectKitProvider>
			</WagmiProvider>
		</>
	)
}

// Exports
export { RootProvider }
