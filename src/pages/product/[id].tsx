import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import Stripe from "stripe";
import { stripe } from "../../lib/stripe";
import { ContainerProduct, ProductDetails, ProductImage } from "../../styles/pages/product";

export default function ({ product }) {
    const { isFallback } = useRouter()

    if(isFallback){
        return (
            <h1>
                Carregando
            </h1>
        )
    }

    return (
        <ContainerProduct key={product.id}>
            <ProductImage>
                <Image src={product.imgUrl} width={520} height={480} alt=""/>
            </ProductImage>
            <ProductDetails>
                <h1>{product.name}</h1>
                <span>{product.price}</span>

                <p>{product.description}</p>

                <button>Comprar Agora</button>
            </ProductDetails>
        </ContainerProduct>
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
            }
        },
        revalidate: 60 * 60 * 3 // 3 hours
    }
}