import styled from '@emotion/styled'

export const CustomButtonStyle = styled('div')(({ theme }: any) => {
  return {
    button: {
      padding: '0.5rem 2rem',
      backgroundColor: theme.text.purple,
      borderRadius: '3rem',
      marginBottom: '2rem',
      '&:hover': {
        backgroundColor: theme.button.purple2
      },
      p: {
        fontSize: '0.875rem',
        fontWeight: 600,
        textTransform: 'none',
        background: theme.text.primary,
        backgroundClip: 'text',
        textFillColor: 'transparent'
      },
    }
  }
})