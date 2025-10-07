import { useEffect, useState } from "react";
import axios from "axios";
import { HiStar } from "react-icons/hi2";

function ProductItems() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const urlProducts = "https://dummyjson.com/products";
      const res = await axios.get(urlProducts);
      setProducts(res.data.products);
    };
    fetchProducts();
  }, []);

  return (
    <div className="@container grid grid-cols-6 mt-20">
      {products.map((product) => (
        <div key={product.id}>
          <div className=" border-gray-200 border-r-1 border-b  p-4">
            <p className="flex justify-end items-center">
              <HiStar className="text-amber-600" />
              {product.rating.toFixed(1)}
            </p>
            <div className="flex justify-center flex-col items-center pb-3">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-40 object-cover rounded"
              />
              <p className="line-clamp-1 text-base font-semibold text-center pb-8">
                {product.title}
              </p>

              <p className="mb-2 font-medium">${product.price}</p>
              <div className="pb-4">
                <form className="border-gray-200 border rounded">
                  <select name="quantity">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </form>
              </div>

              <button className="p-[8px_34px] bg-green-800 text-white rounded text-sm text-center cursor-pointer">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductItems;
