import styled from '@emotion/styled'

export const LeftBoxStyle = styled('div')(({ theme }: any) => {
  return {
    display: 'flex',
    paddingTop: '2rem',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    borderRadius: '0.5rem',
    background: theme.bg.lightGray,

    '.box-balance': {
      width: '100%',
      marginBottom: '2rem',
      display: 'flex',
      justifyContent: 'center',
      '.box-balance-item': {
        display: 'fex',
        padding: '2rem 2rem',
        backgroundColor: theme.bg.containerCard,
        borderRadius: '1rem',
        margin: '1rem',
        '&:hover': {
          backgroundColor: theme.bg.hoverCard,
        },
        p: {
          fontSize: '1.125rem',
          fontWeight: 600,
          textTransform: 'none',
          background: theme.text.primary,
          backgroundClip: 'text',
          textFillColor: 'transparent'
        },
      },
    },
    '.pager': {
      display: 'flex',
      '.button-prev': {
        background: theme.bg.containerImage,
        [theme.breakpoints.up('sm')]: {
          marginRight: '1rem',
          width: '40px',
          height: '40px',
        },
        width: '30px',
        height: '30px',
        marginLeft: '0.5rem',
        '&:hover': {
          background: '#454E83'
        }
      },
      '.button-next': {
        background: theme.bg.containerImage,
        [theme.breakpoints.up('sm')]: {
          marginRight: '1rem',
          width: '40px',
          height: '40px',
        },
        width: '30px',
        height: '30px',
        marginLeft: '0.5rem',
        '&:hover': {
          background: '#454E83'
        }
      },
    }
  }
})
