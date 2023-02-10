import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import Stripe from "stripe";
import { stripe } from "../../lib/stripe";
import { ContainerProduct, ProductDetails, ProductImage } from "../../styles/pages/product";

export default function ({ product }) {
    const query = useRouter()
    console.log(product)

    return (
        <ContainerProduct>
            <ProductImage>

            </ProductImage>
            <ProductDetails>
                <h1>Camiseta XX</h1>
                <span>R$ 99,99</span>

                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid incidunt reprehenderit repudiandae maxime odit iste est nemo quo soluta? Voluptas, eligendi sit! Dignissimos tempore enim veritatis unde totam. Harum, rerum!
                </p>

                <button>Comprar Agora</button>
            </ProductDetails>
        </ContainerProduct>
    )
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