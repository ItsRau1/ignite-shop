import { useRouter } from "next/router";
import { ContainerProduct, ProductDetails, ProductImage } from "../../styles/pages/product";

export default function () {
    const query = useRouter()

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