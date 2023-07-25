import { ProductCardWrapper } from "./ProductCardWrapper";

interface ProductCardProps {
  image: string;
  imageAlt: string;
  title: string;
  price: string;
}

const ProductCard = ({ image, title, price, imageAlt }: ProductCardProps) => {
  return (
    <ProductCardWrapper>
      <div>
        <img src={image} alt={imageAlt}></img>
        <div>
          <p>{title}</p>
          <p>{price}</p>
        </div>
      </div>
    </ProductCardWrapper>
  );
};

export default ProductCard;
