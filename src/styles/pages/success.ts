import { styled } from "..";

export const SuccessContainer = styled("div", {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto",
    height: 400,

    h1:{
        fontSize: "$2xl",
        color: "$gray100",

    },

    p:{
        fontSize: "$xl !important",
        color: "$gray300",
        maxWidth: 560,
        textAlign: "center",
        margin: "2rem 0 0 0",

        strong: {
            fontSize: "$xl",
        }
    },

    a:{
        margin: "5rem 0 0 0",
        display: "block",
        fontSize: "$lg",
        color: "$green500",
        textDecoration: "none",
        fontWeight: "bold",

        "&:hover": {
            color: "green300",
        }
    },
})

export const ImageContainer = styled("div", {
    width: "100%",
    maxWidth: 130,
    height: 145,
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,
    padding: "0.25rem",
    margin: "4rem 0 0 0",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    img:{
        objectFit: "cover",
    }
})