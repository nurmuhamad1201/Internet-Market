import { useClearCartMutation } from "../services/api";

 
 
const ClearCartButton = () => {
  const [clearCart, { isLoading, isError, isSuccess }] = useClearCartMutation();

  const handleClearCart = async () => {
    try {
      await clearCart();
      if (isSuccess) {
        console.log('Cart cleared successfully');
      }
    } catch (error) {
      console.error('Error clearing cart:', error);
    }
  };
 
  if (isError) return <div>Error clearing cart: {console.error(isError)}</div>;

  return (
    <button onClick={handleClearCart} disabled={isLoading}>
      {isLoading ? 'Clearing Cart...' : 'Clear Cart'}
    </button>
  );
};

export default ClearCartButton;
