import { styled } from "..";

export const ContainerProduct = styled('div',{
    display: "flex",
    gap: "4rem",
    margin: "0 auto",
    alignItems: "stretch",

    maxWidth: 1180,


})

export const ProductImage = styled('div', {
    width: "100%",
    maxWidth: 576,
    height: 500,
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,
    padding: "0.25rem",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    img:{
        objectFit: "cover",
    }
})

export const ProductDetails = styled('div', {
    display: "flex",
    flexDirection: "column",

    h1:{
        fontSize: "$2xl",
        color: "$gray300"
    },

    span:{
        marginTop: "1rem",
        display: "block",
        fontSize: "$2xl",
        color: "$green300",
    },

    p:{
        marginTop: "2.5rem",
        fontSize: "$md",
        lineHeight: 1.6,
        color: "$gray300",
    },

    button:{
        marginTop: 'auto',
        backgroundColor: '$green500',
        border: 0,
        color: '$white',
        borderRadius: 8,
        padding: '1.25rem',
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: '$md',

        '&:not(:disabled):hover':{
            backgroundColor: "$green300"
        },
        '&:disabled':{
            opacity: 0.7,
            cursor: "not-allowed"
        }
    }
})