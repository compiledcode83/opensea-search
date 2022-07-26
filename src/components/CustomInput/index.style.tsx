import styled from '@emotion/styled'

export const CustomInputStyle = styled('div')(({ theme }: any) => {
  return {
    position: 'relative',
    marginBottom: '1rem',
    [theme.breakpoints.up('md')]: {
      '.MuiInput-root': {
        minWidth: '17.5rem',
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
        borderColor: '#96a0bb'
      },

      '&:focus-within': {
        borderColor: '#96a0bb'
      },

      input: {
        flex: 1,
        fontSize: '1rem',
        fontWeight: 300,
        color: '#8690ab',
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
