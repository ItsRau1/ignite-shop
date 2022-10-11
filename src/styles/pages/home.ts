import { styled } from "..";

export const HomeContainer = styled('main',{
    display: 'flex',
    minHeight: '656px',
    width: '100%',
    maxWidth: 'calc(100vw - ((100vw - 1180px) / 2 ))',
    margin: '0 0 0 auto',
})

export const Product = styled('a',{
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: '8px',
    cursor: 'pointer',
    position: 'relative',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    overflow: 'hidden',

    footer:{
        position: 'absolute',
        bottom: '0.25rem',
        left: '0.25rem',
        right: '0.25rem',
        padding: '2rem',

        borderRadius: '6px',

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',

        background: 'rgba(0, 0, 0, 0.6)',

        transform: 'translateY(110%)',
        opacity: '0',
        transition: 'all 0.2s ease-in-out', 

        strong:{
            fontSize: '1.25rem',
        },

        span:{
            fontSize: '1.5rem',   
            fontWeight: 'bold',
            color: '$green300',
        }
    },

    '&:hover':{
        footer:{
            transform: 'translateY(0%)',
            opacity: '1',
        }
    }
})