import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import Stripe from "stripe";
import { stripe } from "../../lib/stripe";
import { ContainerProduct, ProductDetails, ProductImage } from "../../styles/pages/product";

interface ProductProps {
    product:{
        id: string,
        name: string,
        imgUrl: string,
        price: string,
        description: string,
        priceID: string,
    }
}

export default function ({ product }: ProductProps) {
    const [isCreatingCheckoutSession, SetIsCreatingCheckoutSession] = useState(false)
    const { isFallback } = useRouter()

    if(isFallback){
        return (
            <h1>
                Carregando...
            </h1>
        )
    }

    const handleBuyProduct = async () => {    
        try {
            SetIsCreatingCheckoutSession(true)

            const response = await axios.post('/api/checkout', {
                priceID: product.priceID,
            })

            const { checkoutUrl } = response.data

            window.location.href = checkoutUrl

        } catch (err) {
            SetIsCreatingCheckoutSession(false)
            alert(`Falha ao direcionar ao checkout`)
            console.log(err)
        }
    }

    return (
        <>
            <Head>
                <title> {product.name}| Ignite Shop</title>
            </Head>

            <ContainerProduct key={product.id}>
                <ProductImage>
                    <Image src={product.imgUrl} width={520} height={480} alt=""/>
                </ProductImage>
                <ProductDetails>
                    <h1>{product.name}</h1>
                    <span>{product.price}</span>

                    <p>{product.description}</p>

                    <button onClick={handleBuyProduct} disabled={isCreatingCheckoutSession}>
                        Comprar Agora
                    </button>
                </ProductDetails>
            </ContainerProduct>
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () =>{
    return {
        paths: [
            {params: { id: 'prod_MdEWNbjhkJtVHA' }},
        ],
        fallback: true,
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const productId = params.id as string

    const product = await stripe.products.retrieve(productId,{
        expand: ["default_price"]
      })
      
      const price = product.default_price as Stripe.Price


    return {
        props: {
            product: {
                id: product.id,
                name: product.name,
                imgUrl: product.images[0],
                price: new Intl.NumberFormat('pt-BR',{
                  style: "currency",
                  currency: "BRL",
                }).format(price.unit_amount / 100),
                description: product.description,
                priceID: price.id,
            }
        },
        revalidate: 60 * 60 * 3 // 3 hours
    }
}