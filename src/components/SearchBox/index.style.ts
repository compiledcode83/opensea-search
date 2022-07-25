import styled from '@emotion/styled'

export const SearchBoxStyle = styled('div')(({ theme }: any) => {
  return {
    position: 'relative',
    [theme.breakpoints.up('sm')]: {
      '.MuiInput-root': {
        minWidth: '22.5rem',
      }
    },
    '.MuiInput-root': {
      border: '1px solid rgba(198, 208, 235, 0.5)',
      borderRadius: '3.125rem',

      '&::before': {
        content: 'none'
      },

      '&::after': {
        content: 'none'
      },

      '&:hover': {
        borderColor: '#c6d0eb'
      },

      '&:focus-within': {
        borderColor: '#c6d0eb'
      },

      input: {
        flex: 1,
        fontSize: '1rem',
        fontWeight: 300,
        color: '#c6d0eb',
        padding: '0.375rem 1.25rem',
        transformOrigin: 'center left',
        transform: 'scale(0.875)',

        '&::placeholder': {
          opacity: 0.5
        }
      },

      '.MuiInputAdornment-root': {
        padding: '0.75rem',

        button: {
          background: 'transparent'
        },

        svg: {
          fontSize: '1rem'
        },

        '.MuiTouchRipple-root': {
          display: 'none'
        }
      }
    },

    '.suggestions': {
      position: 'absolute',
      maxHeight: 'calc(100vh - 5rem)',
      width: '100%',
      padding: '0.25rem 0.5rem',
      background: theme.bg.containerCard,
      boxShadow: '0 6px 6px rgba(0, 0, 0, 0.25)',
      backdropFilter: 'blur(1rem)',
      borderRadius: '1.25rem',
      overflow: 'auto',

      '.heading': {
        fontSize: '0.75rem',
        textAlign: 'left',
        fontWeight: 500,
        marginTop: '1rem',
        marginBottom: '0.5rem',
        padding: '0 1.625rem'
      },

      '.box-suggestion-user': {
        marginTop: '2rem'
      },

      ul: {
        padding: 0,

        li: {
          padding: '0.375rem 1.625rem',
          borderRadius: '0.75rem',

          '&:hover': {
            background: 'rgba(198, 208, 235, 0.2)'
          },

          '.result-image': {
            borderRadius: '0.625rem'
          },

          '.result-avatar': {
            borderRadius: '50%'
          },

          '.result-info': {
            padding: '0 1.25rem',

            h5: {
              fontSize: '0.75rem',
              fontWeight: 500
            },

            p: {
              fontSize: '0.625rem',
              fontWeight: 300
            }
          }
        }
      },

      hr: {
        margin: '0.5rem 0'
      },

      '.view-all': {
        display: 'block',
        marginTop: '1.25rem',
        marginBottom: '1rem',
        padding: '0 1.625rem',
        fontSize: '0.625rem',
        fontWeight: 300,
        textDecoration: 'underline',
        textAlign: 'left'
      }
    }
  }
})
