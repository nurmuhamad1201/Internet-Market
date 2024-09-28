import { useGetCartProductsQuery, useGetProductsQuery } from '../services/api';
import ReactStars from 'react-rating-stars-component';
import { axiosRequest } from '../utils/axiosRequest';
import { Link, useNavigate } from 'react-router-dom';
import eye from '../assets/icons/icons8-eye-50.png';

const imageApi = 'http://135.181.152.249:8072/images/';

const ForProduct = () => {
  const { data, error, isLoading, refetch } = useGetProductsQuery();
  const navigate = useNavigate();
  const { data: cartData } = useGetCartProductsQuery();

  const handleAddToCart = async (productId) => {
    try {
      await axiosRequest({
        url: `/Cart/add-product-to-cart?id=${productId}`,
        method: 'POST',
      });
      refetch();
      navigate('/cart');
    } catch (error) {
      console.error('Error adding product to cart:', error);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error occurred: {error.data}</div>;

  const products = data?.data?.products || [];

  return (
    <div className="grid grid-cols-4 xs:grid-cols-1 pg:grid-cols-2 md:grid-cols-2  gap-4 dark:bg-neutral-950 py-7 px-3 rounded-2xl dark:text-white">
      {products.slice(0, 4).map((product) => (
        <div key={product.id} className="bg-white p-4 dark:bg-[#161616] rounded-lg shadow-md relative">
          <div className="relative group">
            <img
              src={`${imageApi}/${product.image}`}
              alt={product.productName}
              className="w-full h-40 object-contain rounded-md mb-4"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
              <button
                onClick={() => handleAddToCart(product.id)}
                className="bg-black w-[80%] m-auto text-white py-2 rounded hover:bg-white hover:text-black transition-colors"
              >
                Add To Cart
              </button>
              <Link to={`/products/${product.id}`} className="absolute top-2 right-2">
                <img src={eye} alt="View Product" className="w-6 h-6" />
              </Link>
            </div>
          </div>
          <h3 className="text-lg font-bold">{product.productName}</h3>
          <p className="dark:text-white">{product.color}</p>
          <ReactStars
            count={5}
            value={product.rating || 0}
            size={24}
            edit={true}
            activeColor="#ffd700"
            classNames="mb-2"
          />
          <p className="text-gray-900 dark:text-white font-bold">
            {product.hasDiscount ? `${product.discountPrice}$` : `${product.price}$`}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ForProduct;
