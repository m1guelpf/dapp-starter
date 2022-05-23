import { FC } from 'react'
import { useAccount } from 'wagmi'
import { ConnectButton } from '@rainbow-me/rainbowkit'

type Visibility = 'always' | 'connected' | 'not_connected'

const ConnectWallet: FC<{ show?: Visibility }> = ({ show = 'always' }) => {
	const { data: account } = useAccount()

	if ((show == 'connected' && !account?.address) || (show == 'not_connected' && account?.address)) return null

	return <ConnectButton />
}

export default ConnectWallet
