import styled from '@emotion/styled'

export const NftCardStyle = styled('div')(({ theme, dimension, mobileDimension }: any) => {
  return {
    width: '100%',
    maxWidth: `calc(${mobileDimension} + 2.25rem)`,

    [theme.breakpoints.up('sm')]: {
      maxWidth: `calc(${dimension} + 2.25rem)`
    },

    a: {
      textDecoration: 'none'
    },

    '&:hover': {
      '.nft-card-box': {
        backgroundColor: theme.bg.hoverCard,

        '.nft-card-img': {
          backgroundColor: theme.bg.hoverImage,
          boxShadow: '-4px -4px 10px rgb(151 133 253 / 25%), 10px 10px 20px rgb(17 19 27 / 25%)'
        }
      }
    },

    '.nft-card-box': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
      margin: 0,
      minWidth: 0,
      borderRadius: '1rem',
      padding: '1rem 0',
      backgroundColor: theme.bg.containerCard,
      transition: 'all 0.3s ease 0s',

      [theme.breakpoints.up('sm')]: {
        padding: '1.125rem 0 1.5rem',
        borderRadius: '1.25rem'
      },

      '&.is-preview': {
        padding: '0.75rem 0.5rem',

        '.nft-card-info': {
          display: 'flex',
          alignItems: 'center',

          [theme.breakpoints.down('sm')]: {
            width: mobileDimension
          },

          h5: {
            fontSize: '0.75rem',
            margin: 0
          },

          '.nft-like': {
            svg: {
              fontSize: '1.125rem'
            }
          }
        },

        '.nft-card-img': {
          padding: '0.375rem',
          borderRadius: '0.5rem',

          [theme.breakpoints.down('sm')]: {
            width: mobileDimension,
            height: mobileDimension
          }
        }
      },

      '.nft-card-img': {
        width: mobileDimension,
        height: mobileDimension,
        padding: '0.625rem',
        borderRadius: '0.875rem',
        overflow: 'hidden',
        cursor: 'pointer',
        background: theme.bg.containerImage,
        boxShadow: '-4px -4px 10px rgb(74 59 159 / 25%), 6px 6px 40px rgb(15 17 26 / 15%)',

        [theme.breakpoints.up('sm')]: {
          width: dimension,
          height: dimension
        },

        '.nft-card-img-inside': {
          position: 'relative',
          width: '100%',
          height: '100%',
          borderRadius: '0.5rem',
          overflow: 'hidden'
        }
      },

      '.nft-card-info': {
        display: 'flex',
        alignItems: 'center',
        width: mobileDimension,
        padding: '0 0.75rem',
        marginTop: '0.75rem',

        [theme.breakpoints.up('sm')]: {
          width: dimension
        },

        h5: {
          flex: '1 1 0%',
          width: dimension,
          margin: '0.75rem 0 0',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          fontSize: '0.875rem',
          fontWeight: 600,
          color: theme.text.primary,

          [theme.breakpoints.up('sm')]: {
            fontSize: '1rem'
          }
        },

        p: {
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          fontSize: '0.875rem',
          fontWeight: 500,
          lineHeight: '1.25rem',
          whiteSpace: 'nowrap',
          wordBreak: 'keep-all',
          color: theme.text.primary,
          margin: '0.75rem 0 0 0.75rem',
          padding: '0 0 0 8px',
          overflow: 'hidden',
          textOverflow: 'ellipsis',

          '&.amount': {
            color: theme.text.lightBlue,
            fontSize: '0.75rem',
            lineHeight: '0.875rem',
            margin: '0.75rem 0 0 0.5rem',

            [theme.breakpoints.up('sm')]: {
              fontSize: '0.875rem',
              margin: '0.625rem 0 0 0.75rem'
            }
          },

          b: {
            fontSize: '0.75rem',
            fontWeight: 600,
            color: theme.text.primary,

            [theme.breakpoints.up('sm')]: {
              fontSize: '1rem'
            }
          }
        }
      },

      '.nft-card-text': {
        display: 'flex',
        alignItems: 'center',
        width: mobileDimension,
        padding: '0 0.75rem',

        [theme.breakpoints.up('sm')]: {
          width: dimension
        },

        h5: {
          flex: '1 1 0%',
          width: dimension,
          margin: 0,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          fontSize: '0.75rem',
          lineHeight: '1.25rem',
          fontWeight: 300,
          color: theme.text.lightBlue,

          [theme.breakpoints.up('md')]: {
            fontSize: '0.875rem',
            lineHeight: '1.375rem'
          }
        },

        p: {
          textAlign: 'left',
          fontSize: '0.75rem',
          lineHeight: '1.25rem',
          fontWeight: 300,
          color: theme.text.lightBlue
        }
      },

      '.nft-card-divider': {
        width: `calc(${mobileDimension} - 0.5rem)`,
        height: '0.5px',
        backgroundColor: theme.text.primary,
        opacity: 0.5,
        margin: '0.5rem 0',

        [theme.breakpoints.up('sm')]: {
          width: `calc(${dimension} - 1.5rem)`
        }
      },

      '.nft-card-data': {
        display: 'flex',
        alignItems: 'center',
        width: mobileDimension,
        padding: '0 0.75rem',

        [theme.breakpoints.up('sm')]: {
          width: dimension
        },

        h5: {
          flex: '1 1 0%',
          width: dimension,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          fontSize: '0.875rem',
          fontWeight: 600,
          color: theme.text.primary,

          [theme.breakpoints.up('sm')]: {
            fontSize: '1.25rem'
          }
        },

        p: {
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          fontSize: '0.625rem',
          fontWeight: 500,
          lineHeight: '20px',
          whiteSpace: 'nowrap',
          wordBreak: 'keep-all',
          color: theme.text.primary,
          padding: '0 0 0 8px',
          overflow: 'hidden',
          textOverflow: 'ellipsis',

          [theme.breakpoints.up('sm')]: {
            fontSize: '0.875rem'
          }
        }
      },

      '.nft-card-action': {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        width: mobileDimension,
        padding: '0 0.75rem',
        marginTop: '1rem',

        [theme.breakpoints.up('sm')]: {
          width: dimension
        },

        '.card-btn': {
          width: 'auto%',
          background: theme.button.lavender,
          padding: '0.4rem 0.75rem',
          fontSize: '0.625rem',
          color: theme.text.primary,
          borderRadius: '1.5rem',

          [theme.breakpoints.up('sm')]: {
            padding: '0.4rem 1.7rem',
            fontSize: '0.75rem'
          },

          '&:hover': {
            background: theme.button.purple2
          }
        }
      },

      '.nft-like': {
        '&.liked': {
          color: theme.danger.primary
        },

        svg: {
          fontSize: '1.375rem',
          cursor: 'pointer',

          '&:hover': {
            color: theme.danger.primary
          }
        }
      }
    }
  }
})
