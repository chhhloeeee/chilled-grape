import ProductCard from "./ProductCard/ProductCard";
import { ProductGridWrapper } from "./ProductGridWrapper";
import { useEffect, useState } from "react";

const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  const [loadedProducts, setLoadedProducts] = useState(6);

  async function getProducts() {
    var requestOptions = {
      method: "GET",
      redirect: "follow" as RequestRedirect,
    };

    fetch(
      "https://my-json-server.typicode.com/TomSearle/cb-devtest-api/products",
      requestOptions
    )
      .then((response) => response.json())
      .then((products) => {
        setProducts(products[0]);

        return;
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  useEffect(() => {
    getProducts();
  }, []);

  const loadMore = () => {
    setLoadedProducts(loadedProducts + 6);
  };

  return (
    <ProductGridWrapper>
      {products.slice(0, loadedProducts).map((product: any) => (
        <ProductCard
          image={product.image}
          imageAlt={product.image}
          title={product.product_name}
          price={"£" + product.price}
        />
      ))}

      {products.length > 6 && <button onClick={loadMore}>Load More</button>}
    </ProductGridWrapper>
  );
};

export default ProductGrid;
