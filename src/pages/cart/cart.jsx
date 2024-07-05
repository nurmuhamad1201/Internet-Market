import { useGetCartProductsQuery } from "../../services/api";
import { useState } from 'react';
import { axiosRequest } from "../../utils/axiosRequest";
import icons8 from "../../assets/icons/icons8-x-50.png"
const Cart = () => {
  const { data, error, isLoading , refetch } = useGetCartProductsQuery();
  const [quantities, setQuantities] = useState({});

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>Error loading cart: {error.message}</p>;

  const cart = data?.data?.[0];

  if (!cart) return <p>No cart data found.</p>;

  const handleQuantityChange = (productId, delta) => {
    setQuantities((prevQuantities) => {
      const newQuantities = { ...prevQuantities };
      newQuantities[productId] = (newQuantities[productId] || 1) + delta;
      return newQuantities;
    });
  };

  const getQuantity = (productId) => {
    return quantities[productId] || 1;
  };

  const getTotalPrice = () => {
    return cart.productsInCart.reduce((total, item) => {
      const quantity = getQuantity(item.product.id);
      return total + item.product.price * quantity;
    }, 0).toFixed(2);
  };

  const getTotalDiscountPrice = () => {
    return cart.productsInCart.reduce((total, item) => {
      const quantity = getQuantity(item.product.id);
      return total + (item.product.discountPrice || item.product.price) * quantity;
    }, 0).toFixed(2);
  };


  const handleDeleteProduct = async (productId) => {
    try {
      await axiosRequest({
        url: `/Cart/delete-product-from-cart?id=${productId}`,
        method: 'DELETE',
      });
     
      refetch();
    } catch (error) {
      console.error('Error deleting product:', error);
     
    }
  };

  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 dark:text-white">Cart Products</h2>
      <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-700">
            <th className="py-2 px-4">ID</th>
            <th className="py-2 px-4">Product Name</th>
            <th className="py-2 px-4">Image</th>
            <th className="py-2 px-4">Color</th>
            <th className="py-2 px-4">Price</th>
            <th className="py-2 px-4">Discount Price</th>
            <th className="py-2 px-4">Quantity</th>
            <th className="py-2 px-4">Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.productsInCart.map((item) => (
            <tr key={item.id} className="border-b dark:border-gray-700">
              <td className="py-2 px-4">{item.product.id}</td>
              <td className="py-2 px-4">{item.product.productName}</td>
              <td className="py-2 px-4">
                <img
                  src={`http://65.108.148.136:8072/images/${item.product.image}`}
                  alt={item.product.productName}
                  width="50"
                  className="rounded"
                />
              </td>
              <td className="py-2 px-4">{item.product.color}</td>
              <td className="py-2 px-4">{item.product.price}$</td>
              <td className="py-2 px-4">{item.product.discountPrice || 'N/A'}$</td>
              <td className="py-2 px-4 flex items-center">
                <button
                  className="px-2 py-1 bg-gray-200 dark:bg-gray-600 rounded"
                  onClick={() => handleQuantityChange(item.product.id, -1)}
                  disabled={getQuantity(item.product.id) <= 1}
                >
                  -
                </button>
                <span className="mx-2">{getQuantity(item.product.id)}</span>
                <button
                  className="px-2 py-1 bg-gray-200 dark:bg-gray-600 rounded"
                  onClick={() => handleQuantityChange(item.product.id, 1)}
                >
                  +
                </button>
              </td>
              <td className="py-2 px-4">
                {((item.product.discountPrice || item.product.price) * getQuantity(item.product.id)).toFixed(2)}$
              </td>
              <td>
                <button
                  onClick={() => handleDeleteProduct(item.product.id)}
                  className=" text-white w-[30px] h-[30px]   py-1 rounded"
                >
                  <img className="w-[30px] h-[30px]" src={icons8} alt="delete" /> 
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4">
        <p className="dark:text-white">Total Products: {cart.totalProducts}</p>
        <p className="dark:text-white">Total Price: {getTotalPrice()}$</p>
        <p className="dark:text-white">Total Discount Price: {getTotalDiscountPrice()}$</p>
      </div>
    </div>
  );
};

export default Cart;
