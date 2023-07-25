import ProductCard from "./ProductCard/ProductCard";
import Car from "../Images/car.png";
import { ProductGridWrapper } from "./ProductGridWrapper";

const ProductGrid = () => {
  return (
    <ProductGridWrapper>
      <ProductCard
        image={Car}
        imageAlt="Car"
        title="consectetur Elit"
        price="£12.99"
      />
      <ProductCard
        image={Car}
        imageAlt="Car"
        title="consectetur Elit"
        price="£12.99"
      />
      <ProductCard
        image={Car}
        imageAlt="Car"
        title="consectetur Elit"
        price="£12.99"
      />
      <ProductCard
        image={Car}
        imageAlt="Car"
        title="consectetur Elit"
        price="£12.99"
      />
      <button>Load More</button>
    </ProductGridWrapper>
  );
};

export default ProductGrid;
