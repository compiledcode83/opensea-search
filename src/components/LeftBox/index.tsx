import React, { useCallback, useEffect, useReducer, useState } from 'react'
import WalletConnectProvider from '@walletconnect/web3-provider'
import { providers } from 'ethers'
import WalletLink from 'walletlink'
import Web3Modal from 'web3modal'
import Web3 from 'web3'
import Image from 'next/image'

import {
  Box, Grid, Typography, IconButton
} from '@mui/material'
import ChevronLeft from '@mui/icons-material/ChevronLeft'
import ChevronRight from '@mui/icons-material/ChevronRight'

import { ellipseAddress, getChainData } from '../../utils/utilities'
import CustomButton from '../CustomButton'
import { LeftBoxStyle } from './index.style'
import CustomInput from '../CustomInput'
import { nftRequest } from '../../store/nftSlice'
import { useDispatch } from 'react-redux'

const usdcTokenAbi = require('../../contracts/abi/usdc.json')

const INFURA_ID = 'cee807039b5a4f25b41fa4e8920eb273'
const USDC_ADDRESS = '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48'

export const formatAmount = (amount: any, min = 2, max = 4) => {
  return parseFloat(amount ? amount.toString() : '0').toLocaleString('en-US', {
    minimumFractionDigits: min,
    maximumFractionDigits: max
  })
}

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      infuraId: INFURA_ID, // required
    },
  }
}

let web3Modal: Web3Modal
if (typeof window !== 'undefined') {
  web3Modal = new Web3Modal({
    network: 'mainnet', // optional
    cacheProvider: true,
    providerOptions, // required
  })
}

type StateType = {
  provider?: any
  web3Provider?: any
  address?: string
  chainId?: number
}

type ActionType =
  | {
      type: 'SET_WEB3_PROVIDER'
      provider?: StateType['provider']
      web3Provider?: StateType['web3Provider']
      address?: StateType['address']
      chainId?: StateType['chainId']
    }
  | {
      type: 'SET_ADDRESS'
      address?: StateType['address']
    }
  | {
      type: 'SET_CHAIN_ID'
      chainId?: StateType['chainId']
    }
  | {
      type: 'RESET_WEB3_PROVIDER'
    }

const initialState: StateType = {
  provider: null,
  web3Provider: null,
  address: '',
  chainId: 0,
}

const reducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case 'SET_WEB3_PROVIDER':
      return {
        ...state,
        provider: action.provider,
        web3Provider: action.web3Provider,
        address: action.address,
        chainId: action.chainId,
      }
    case 'SET_ADDRESS':
      return {
        ...state,
        address: action.address,
      }
    case 'SET_CHAIN_ID':
      return {
        ...state,
        chainId: action.chainId,
      }
    case 'RESET_WEB3_PROVIDER':
      return initialState
    default:
      throw new Error()
  }
}

const LeftBox: React.FC = () => {
  const makeDispatch = useDispatch()
  const [state, dispatch] = useReducer(reducer, initialState)
  const [eth, setEth] = useState(0)
  const [usdc, setUsdc] = useState(0)
  const [offset, setOffset] = useState<number>(0)

  const [tokenIds, setTokenIds] = useState<string>('')
  const [owner, setOwner] = useState<string>('')
  const [collection, setCollection] = useState<string>('')
  const [collectionSlug, setCollectionSlug] = useState<string>('')
  const [collectionEditor, setCollectionEditor] = useState<string>('')
  const [assetContractAddress, setAssetContractAddress] = useState<string>('')
  const { provider, web3Provider, address, chainId } = state

  const web3 = new Web3(Web3.givenProvider)

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

    dispatch({
      type: 'SET_WEB3_PROVIDER',
      provider,
      web3Provider,
      address,
      chainId: network.chainId,
    })
  }, [])

  const disconnect = useCallback(
    async function () {
      await web3Modal.clearCachedProvider()
      if (provider?.disconnect && typeof provider.disconnect === 'function') {
        await provider.disconnect()
      }
      dispatch({
        type: 'RESET_WEB3_PROVIDER',
      })
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
        dispatch({
          type: 'SET_ADDRESS',
          address: accounts[0],
        })
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

  async function getBalance(contract: any, account: any) {
    let balance = await contract.methods.balanceOf(account).call();
    let decimals = await contract.methods.decimals();
    balance /= Math.pow(10, decimals)
    return balance;
  }

  useEffect(() => {
    if(address) {
      web3.eth.getBalance(address).then((result: any) => {
        setEth(result / Math.pow(10, 18))
      })
      .catch((error) => {
        console.log(error)
      })
 
      const setUsdcBalance = async () => {
        let contract = new web3.eth.Contract(usdcTokenAbi, USDC_ADDRESS);
        let balance = await getBalance(contract, address);
        setUsdc(balance)
      }

      setUsdcBalance()
    }
  }, [address])

  const chainData = getChainData(chainId)

  const handleOwnerChange = (e: any) => {
    setOwner(e.target.value)
  }
  
  const handleTokenIdsChange = (e: any) => {
    setTokenIds(e.target.value)
  }

  const handleCollectionChange = (e: any) => {
    setCollection(e.target.value)
  }

  const handleCollectionSlugChange = (e: any) => {
    setCollectionSlug(e.target.value)
  }

  const handleCollectionEditorChange = (e: any) => {
    setCollectionEditor(e.target.value)
  }

  const handleAssetContractAddressChange = (e: any) => {
    setAssetContractAddress(e.target.value)
  }
  
  const handlePrevPage = () => {
    if(offset > 0)
      setOffset(offset - 20)
  }

  const handleNextPage = () => {
    setOffset(offset + 20)
  }  

  const handleSearch = () => {
    setOffset(0)
    makeDispatch(nftRequest({
      owner,
      token_ids: tokenIds,
      collection,
      collection_slug: collectionSlug,
      collection_editor: collectionEditor,
      asset_contract_address: assetContractAddress,
      offset
    }))
  }

  useEffect(() => {
    makeDispatch(nftRequest({
      owner,
      token_ids: tokenIds,
      collection,
      collection_slug: collectionSlug,
      collection_editor: collectionEditor,
      asset_contract_address: assetContractAddress,
    }))
  }, [offset])

  return (
    <LeftBoxStyle>
      {web3Provider ? <CustomButton
        caption={ellipseAddress(address)}
        onClick={disconnect}
        /> : <CustomButton
        caption="Connect"
        onClick={connect}
        />
      }
      {web3Provider && 
      <Box className="box-balance">
        <Box className="box-balance-item">
          <Image
            src="/coin/ETH.svg"
            alt="currency"
            width={24}
            height={24}
            objectFit="contain"
          />
          <Typography>{formatAmount(eth)} ETH</Typography>
        </Box>
        <Box className="box-balance-item">
          <Image
            src="/coin/USDC.svg"
            alt="currency"
            width={24}
            height={24}
            objectFit="contain"
          />
          <Typography>{formatAmount(usdc)} USDC</Typography>
        </Box>
      </Box>}
      <CustomInput
        placeholder="owner"
        value={owner}
        onChange={handleOwnerChange}
      />
      <CustomInput
        placeholder="token_ids"
        value={tokenIds}
        onChange={handleTokenIdsChange}
      />
      <CustomInput
        placeholder="collection"
        value={collection}
        onChange={handleCollectionChange}
      />
      <CustomInput
        placeholder="collection_slug"
        value={collectionSlug}
        onChange={handleCollectionSlugChange}
      />
      <CustomInput
        placeholder="collection_editor"
        value={collectionEditor}
        onChange={handleCollectionEditorChange}
      />
      <CustomInput
        placeholder="asset_contract_addresses"
        value={assetContractAddress}
        onChange={handleAssetContractAddressChange}
      />
      <CustomButton
        onClick={handleSearch}
        caption="Search"
      />
      <Box className="pager">
        <IconButton className="button-prev" aria-label="left" onClick={handlePrevPage}>
          <ChevronLeft/>
        </IconButton>
        <IconButton className="button-next" aria-label="right" onClick={handleNextPage}>
          <ChevronRight />
        </IconButton>
      </Box>
    </LeftBoxStyle>
  )
}

export default LeftBox  