import ProductCard from "./ProductCard/ProductCard";
import Car from "../Images/car.png";
import { ProductGridWrapper } from "./ProductGridWrapper";
import { ProductGridContainerWrapper } from "./ProductGridContainerWrapper";

const ProductGrid = () => {
  return (
    <ProductGridContainerWrapper>
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
    </ProductGridContainerWrapper>
  );
};

export default ProductGrid;
