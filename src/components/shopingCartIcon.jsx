import { useNavigate } from 'react-router-dom';
import { useGetCartProductsQuery } from '../services/api';
import { getToken } from '../utils/token';

const CartIcon = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useGetCartProductsQuery();

  if (isLoading) return <span>Loading...</span>;

  const totalProducts = data?.data[0]?.totalProducts || 0;

  const handleClick = () => {
    const isAuthorized = Boolean(getToken());
    if (isAuthorized) {
      navigate('/cart');
    } else {
      navigate('/login');
    }
  };

  return (
    <div
      onClick={handleClick}
      className="relative cursor-pointer text-gray-800 dark:text-white"
    >
      <svg
        height="24"
        width="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
      >
        <path
          d="M8.50033 19.6667C8.96056 19.6667 9.33366 19.2936 9.33366 18.8333C9.33366 18.3731 8.96056 18 8.50033 18C8.04009 18 7.66699 18.3731 7.66699 18.8333C7.66699 19.2936 8.04009 19.6667 8.50033 19.6667Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.4993 19.6667C18.9596 19.6667 19.3327 19.2936 19.3327 18.8333C19.3327 18.3731 18.9596 18 18.4993 18C18.0391 18 17.666 18.3731 17.666 18.8333C17.666 19.2936 18.0391 19.6667 18.4993 19.6667Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1 1H4.63636L7.07273 12.9019C7.15586 13.3112 7.38355 13.6788 7.71595 13.9404C8.04835 14.202 8.46427 14.341 8.89091 14.333H17.7273C18.1539 14.341 18.5698 14.202 18.9022 13.9404C19.2346 13.6788 19.4623 13.3112 19.5455 12.9019L21 5.44434H5.54545"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {totalProducts > 0 && (
        <span className="absolute top-0 left-0 bg-red-600 dark:bg-red-400 text-white dark:text-black rounded-full px-2 py-1 text-xs transform -translate-x-1/2 -translate-y-1/2">
          {totalProducts}
        </span>
      )}
    </div>
  );
};

export default CartIcon;
