import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import Link from 'next/link'
import { NftCardStyle } from './index.style'

export const formatAmount = (amount: any, min = 2, max = 4) => {
  return parseFloat(amount ? amount.toString() : '0').toLocaleString('en-US', {
    minimumFractionDigits: min,
    maximumFractionDigits: max
  })
}

const formatDate = (date: string) => {
  const nDate = new Date(date)
  const YYYY = nDate.getFullYear()
  const MM = nDate.getMonth() + 1
  const DD = nDate.getDate()
  const HH = nDate.getHours()
  const mm = nDate.getMinutes()
  return `${YYYY}-${MM}-${DD} ${HH}:${mm}`
}

const NftCard: React.FC<any> = (props: any) => {
  const {
    url,
    image,
    name,
    price,
    date
  } = props
  const dimension = '176px'
  const mobileDimension = '144px'

  return (
    <NftCardStyle dimension={dimension} mobileDimension={mobileDimension}>
      <Box className={`nft-card-box`}>
        <Link href={url || '#'} passHref target="_blank">
          <a>
            <Box className="nft-card-img">
              <Box className="nft-card-img-inside">
                {image && (
                  <Image
                    loader={() => image}
                    src={image}
                    placeholder="blur"
                    blurDataURL={image}
                    alt="nft-image"
                    layout="fill"
                    objectFit="cover"
                  />
                )}
              </Box>
            </Box>
          </a>
        </Link>

        <Box className="nft-card-info">
          {name && <Typography variant="h5">{name}</Typography>}
          {!!price && (
            <Typography>
              <Image
                src="/coin/ETH.svg"
                alt="currency"
                width={14}
                height={14}
                objectFit="contain"
              />
              {formatAmount(price)} ETH
            </Typography>
          )}
        </Box>
        {date && <Box className="nft-card-text">
          <Typography variant="h5">{formatDate(date)}</Typography>
          </Box>}
      </Box>
    </NftCardStyle>
  )
}

export default NftCard
