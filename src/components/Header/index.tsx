import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { providers } from 'ethers'

import CustomButton from '../CustomButton'
import { HeaderStyle } from './index.style'
import { ellipseAddress } from "../../utils/utilities"
import { web3Modal } from '../../utils/web3Modal'
import { resetWalletInfo, setAddress, setWalletInfo } from '../../store/walletSlice'
import { RootState } from '../../store/index';


const Header: React.FC = () => {
  const dispatch = useDispatch();
  const { provider, web3Provider, address, chainId } = useSelector((state: RootState) => state.wallet)

  const connect = useCallback(async function () {
    // This is the initial `provider` that is returned when
    // using web3Modal to connect. Can be MetaMask or WalletConnect.
    const provider = await web3Modal.connect()

    // We plug the initial `provider` into ethers.js and get back
    // a Web3Provider. This will add on methods from ethers.js and
    // event listeners such as `.on()` will be different.
    const web3Provider = new providers.Web3Provider(provider)

    const signer = web3Provider.getSigner()
    const address = await signer.getAddress()

    const network = await web3Provider.getNetwork()

    dispatch(setWalletInfo({
      provider,
      web3Provider,
      address,
      chainId: network.chainId,
    }))
  }, [])

  const disconnect = useCallback(
    async function () {
      await web3Modal.clearCachedProvider()
      if (provider?.disconnect && typeof provider.disconnect === 'function') {
        await provider.disconnect()
      }
      dispatch(resetWalletInfo())
    },
    [provider]
  )

  // Auto connect to the cached provider
  useEffect(() => {
    if (web3Modal.cachedProvider) {
      connect()
    }
  }, [connect])

  // A `provider` should come with EIP-1193 events. We'll listen for those events
  // here so that when a user switches accounts or networks, we can update the
  // local React state with that new information.
  useEffect(() => {
    if (provider?.on) {
      const handleAccountsChanged = (accounts: string[]) => {
        // eslint-disable-next-line no-console
        console.log('accountsChanged', accounts)
        dispatch(setAddress(accounts[0]))
      }

      // https://docs.ethers.io/v5/concepts/best-practices/#best-practices--network-changes
      const handleChainChanged = (_hexChainId: string) => {
        window.location.reload()
      }

      const handleDisconnect = (error: { code: number; message: string }) => {
        // eslint-disable-next-line no-console
        console.log('disconnect', error)
        disconnect()
      }

      provider.on('accountsChanged', handleAccountsChanged)
      provider.on('chainChanged', handleChainChanged)
      provider.on('disconnect', handleDisconnect)

      // Subscription Cleanup
      return () => {
        if (provider.removeListener) {
          provider.removeListener('accountsChanged', handleAccountsChanged)
          provider.removeListener('chainChanged', handleChainChanged)
          provider.removeListener('disconnect', handleDisconnect)
        }
      }
    }
  }, [provider, disconnect])
  
  useEffect(() => {
  }, [chainId])

  return (
    <HeaderStyle>
      {web3Provider ?
        <CustomButton
          caption={ellipseAddress(address)}
          onClick={disconnect}
        /> : <CustomButton
        caption="Connect"
        onClick={connect}
        />
      }
    </HeaderStyle>
  )
}

export default Header  