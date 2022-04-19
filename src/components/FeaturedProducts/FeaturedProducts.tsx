import { useSelector } from "react-redux";
import { Product } from "../../store/modules/products/products.types";
import { AppState } from "../../store/store.type";

const FeaturedProducts = () => {
  const products: Array<Product> = useSelector(({ products }: AppState) => products);
  const filtered: Array<Product> = products.filter((product: Product) => product.feature);

  const map = filtered.map((product: Product) => {
    return <li key={product.id}>{product.name}</li>;
  });

  return (
    <div>
      <ul>
        {map}
      </ul>
    </div>
  );
};

export default FeaturedProducts;
