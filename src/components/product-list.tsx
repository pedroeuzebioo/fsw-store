import ProductItem from "@/components/product-item";
import { computeProductTotalPrice } from "@/helpers/product";
import { Product } from "@prisma/client";

interface ProductListProps {
  products: Product[];
}

const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className="flex w-full gap-4 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden">
      {products.map((product) => (
        <div key={product.id} className="w-[170px] max-w-[170px]">
          <ProductItem
            key={product.id}
            product={computeProductTotalPrice(product)}
            className="w-[156px]"
          />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
