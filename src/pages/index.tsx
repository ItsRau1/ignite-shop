import Image from "next/image"
import { styled } from "../styles"
import { HomeContainer, Product } from "../styles/pages/home"
import { useKeenSlider } from 'keen-slider/react'

import c1 from '../assets/camiseta-1.png'

import 'keen-slider/keen-slider.min.css'
import Stripe from "stripe"
import { stripe } from "../lib/stripe"
import { GetServerSideProps } from "next"

interface HomeProps {
    products: {
      id: string,
      name: string,
      imgUrl: string,
      price: number,
    }[]
}

export default function Home({ products }:HomeProps) {

  const [sliderRef] = useKeenSlider({
    slides:{
      perView: 3,
      spacing: 48,
    }
  })



  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      {products.map(product => {
        return (
          <Product className="keen-slider__slide" id={product.id}>
            <Image src={product.imgUrl} alt="" width={520} height={480}/>

            <footer>
              <strong>{product.name}</strong>
              <span>R$ {product.price}0</span>
            </footer>
          </Product>
        )
      })}
    </HomeContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"]
  })
  
  const products = response.data.map(product=>{
    const price = product.default_price as Stripe.Price

    return{
      id: product.id,
      name: product.name,
      imgUrl: product.images[0],
      price: price.unit_amount / 100,

    }
  })

  console.log(products)
  return {
    props: {
      products: products,
    }
  }
}
