import  { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { axiosRequest } from '../../utils/axiosRequest';
import StarRating from '../../components/starRiting';
import dostavka from '../../assets/images/dostavka.png'; // Import your dostavka image

const GetProductById = () => {
  const { id } = useParams(); // Extracts the id parameter from the URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1); 
  const [totalPrice, setTotalPrice] = useState(0);  
  const imageApi = 'http://65.108.148.136:8072/images';
  const navigate = useNavigate();
  const [productRating, setProductRating] = useState(3);  

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const response = await axiosRequest.get(`/Product/get-product-by-id?id=${id}`);
        const responseData = response.data.data;
        setProduct(responseData);
        // Initialize total price based on default quantity and product price
        setTotalPrice(responseData.price * quantity);
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id, quantity]);

  const handleAddToCart = async (productId) => {
    try {
      await axiosRequest({
        url: `/Cart/add-product-to-cart?id=${productId}&quantity=${quantity}`,
        method: 'POST',
      });

      navigate('/cart');
    } catch (error) {
      console.error('Error adding product to cart:', error);
    }
  };

  const handleQuantityChange = (newQuantity) => {
    // Update quantity state and calculate new total price
    setQuantity(newQuantity);
    setTotalPrice(product.price * newQuantity);
  };

  const incrementQuantity = () => {
    const newQuantity = quantity + 1;
    handleQuantityChange(newQuantity);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      handleQuantityChange(newQuantity);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>No product found.</div>;
  }

  return (
    <div className="w-[80%] mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">{product.productName}</h2>
      <div className="flex  flex-row items-start justify-between mb-6">
        
        <div className="flex w-full md:w-[50%] justify-center mb-6 md:mb-0">
          <img
            src={`${imageApi}/${product.images[0].images}`}
            alt={product.productName}
            className="w-64 h-64 object-contain"
          />
        </div>
        
        
        <div className="md:ml-6 text-[30px] flex flex-col justify-center w-full md:w-[50%]">
          <p className="text-gray-700 dark:text-gray-300 mb-1">Brand: {product.brand}</p>
          <div className="mb-4">
            <StarRating count={5} initialRating={productRating} onChange={setProductRating} />
          </div>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Price: {product.hasDiscount ? product.discountPrice : product.price}$
          </p>
          <p className="text-[25px] font-mono font-[700] mb-4">{product.description}</p>
 
          <div className="flex items-center mb-4">
            <p className="text-gray-700 dark:text-gray-300 mb-1">Colors:</p>
            <div
              className="w-6 h-6 mr-5 rounded-full"
              style={{ backgroundColor: product.color, border: '1px solid black' }}
            ></div>
          </div>
 
          <div className="mb-4 flex items-center">
            <label htmlFor="quantity" className="text-gray-700 dark:text-gray-300 mr-2">
              Quantity:
            </label>
            <button
              onClick={decrementQuantity}
              className="bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-300 px-3 py-1 rounded"
            >
              -
            </button>
            <input
              type="number"
              id="quantity"
              name="quantity"
              min="1"
              value={quantity}
              onChange={(e) => handleQuantityChange(parseInt(e.target.value))}
              className="w-20 px-2 py-1 border border-gray-300 dark:border-gray-700 rounded-lg ml-2 text-center"
            />
            <button
              onClick={incrementQuantity}
              className="bg-[#DB4444] text-white dark:bg-gray-800 dark:text-gray-300 px-3 py-1 rounded"
            >
              +
            </button>
          </div>

          {/* Total Price */}
          <p className="text-xl font-bold mb-4">Total Price: {totalPrice}$</p>

         
          <button
            onClick={() => handleAddToCart(product.id)}
            className="bg-[#DB4444] w-full md:w-auto m-auto text-white py-2 rounded hover:bg-white hover:text-black border hover:border-[#DB4444] transition-colors"
          >
            Buy Now
          </button>
        </div>
      </div>

      
      <div className="flex justify-center mt-4">
        <img src={dostavka} alt="Dostavka" className="w-32 md:w-24" />
      </div>
    </div>
  );
};

export default GetProductById;
