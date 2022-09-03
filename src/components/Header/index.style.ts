import styled from '@emotion/styled'

export const HeaderStyle = styled('div')(({ theme }: any) => {
  return {
    display: 'flex',
    padding: '2rem 0rem',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    borderRadius: '0.5rem',
    background: theme.bg.lightGray,

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
})
