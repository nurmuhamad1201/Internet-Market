// cards.jsx
import { useGetProductsQuery } from '../services/api';
import ReactStars from 'react-rating-stars-component';

const imageApi = 'http://65.108.148.136:8072/images/';

const ProductList = () => {
  const { data, error, isLoading } = useGetProductsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error occurred: {error.data}</div>;

  const products = data?.data?.products || [];

  return (
    <div className="flex flex-wrap gap-4">
      {products.map((product) => (
        <div key={product.id} className="bg-white p-4 rounded-lg shadow-md relative w-full sm:w-[48%] md:w-[32%] lg:w-[24%]">
          <div className="relative group">
            <img src={`${imageApi}${product.image}`} alt={product.productName} className="w-full h-40 object-contain rounded-md mb-4" />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
              <button onClick={() => console.log(product)} className="bg-black w-[80%] m-auto text-white py-2 rounded hover:bg-white hover:text-black transition-colors">
                Add To Cart
              </button>
            </div>
          </div>
          <h3 className="text-lg font-bold">{product.productName}</h3>
          <p className="text-gray-600">{product.color}</p>
          <ReactStars
            count={5}
            value={product.rating || 0}
            size={24}
            edit={true}
            activeColor="#ffd700"
            classNames="mb-2"
          />
          <p className="text-gray-900 font-bold">{product.hasDiscount ? product.discountPrice : product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
