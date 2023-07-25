import ProductCard from "./ProductCard/ProductCard";
import Car from "../Images/car.png";

const ProductGrid = () => {
  return (
    <div>
      <ProductCard
        image={Car}
        imageAlt="Car"
        title="consectetur Elit"
        price="£12.99"
      />
    </div>
  );
};

export default ProductGrid;
