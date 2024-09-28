import { useGetCartProductsQuery, useGetProductsQuery } from '../services/api';
import ReactStars from 'react-rating-stars-component';
import { axiosRequest } from '../utils/axiosRequest';
import { Link, useNavigate } from 'react-router-dom';
import eye from '../../src/assets/icons/icons8-eye-50.png';

const imageApi = 'http://135.181.152.249:8072/images/';

const ProductList = () => {
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
    <section className="grid grid-cols-4 ld:grid-cols-2 pg:grid-cols-1 justify-center gap-4 py-7 bg-gray-100 dark:bg-neutral-950 rounded-2xl dark:text-white">
      {products.map((product) => (
        <article
          key={product.id}
          className="bg-white dark:bg-[#161616] rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105"
        >
          <header className="relative group">
            <img
              src={`${imageApi}${product.image}`}
              alt={product.productName}
              className="w-full h-40 object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
              <button
                onClick={() => handleAddToCart(product.id)}
                className="bg-black w-3/4 text-white py-2 rounded hover:bg-white hover:text-black transition-colors"
              >
                Add To Cart
              </button>
              <div className="absolute top-0 right-0 bg-[#e2e2e2] bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
    <Link to={`/products/${product.id}`} className="p-2">
      <img src={eye} alt="View" className="w-8 h-8" />
    </Link>
  </div>
            </div>
          </header>
          <div className="p-4">
            <h3 className="text-lg font-bold mb-2">{product.productName}</h3>
            <p className="dark:text-gray-400 text-gray-600 mb-2">{product.color}</p>
            <ReactStars
              count={5}
              value={product.rating || 0}
              size={24}
              edit={false}
              activeColor="#ffd700"
              classNames="mb-2"
            />
            <p className="text-gray-900 dark:text-white font-bold">
              {product.hasDiscount ? (
                <span className="text-red-500 line-through mr-2">{product.price}$</span>
              ) : (
                `${product.price}$`
              )}
              {product.hasDiscount && <span className="text-green-500">{product.discountPrice}$</span>}
            </p>
          </div>
        </article>
      ))}
    </section>
  );
};

export default ProductList;
