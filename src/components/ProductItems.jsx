import { useEffect, useState } from "react";
import axios from "axios";
import { HiStar } from "react-icons/hi2";


function ProductItems() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const url = "https://dummyjson.com/products";
    axios.get(url).then((res) => {
      setProducts(res.data.products);
    });
  }, []);

  return (
    <div className="@container grid grid-cols-6 mt-20">
      {products.map((product) => (
        <div key={product.id}>
          <div className="flex justify-center flex-col items-center border-gray-200 border-r-1 border-b  p-4">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-40 object-cover rounded"
            />
            <p className="line-clamp-1 text-base font-semibold text-center pb-8">
              {product.title}
            </p>
            <p className="flex justify-center items-center"><HiStar className="text-amber-600"/>{product.rating.toFixed(1)}</p>
            <p className="mb-2 font-medium">${product.price}</p>
            <button className="p-[4px_16px] bg-green-800 text-white rounded text-sm">Add to cart</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductItems;
