import styled from '@emotion/styled'

export const LeftBoxStyle = styled('div')(({ theme }: any) => {
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
    },
  }
})
