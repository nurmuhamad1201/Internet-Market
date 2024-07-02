 
import ReactStars from 'react-rating-stars-component';
import coatImage from '../../src/assets/images/coat.png';
import bagImage from '../../src/assets/images/bag.png';
import rgbImage from '../../src/assets/images/rgb.png';
import bookshelfImage from '../../src/assets/images/bookshelf.png';

const products = [
  { id: 1, name: 'The north coat', price: '$206', originalPrice: '$260', rating: 4.5, image: coatImage },
  { id: 2, name: 'Gucci duffle bag', price: '$600', originalPrice: '$1100', rating: 5.0, image: bagImage },
  { id: 3, name: 'RGB lights', price: '$180', originalPrice: '$300', rating: 4.8, image: rgbImage },
  { id: 4, name: 'Small Bookshelf', price: '$300', originalPrice: '$360', rating: 4.6, image: bookshelfImage },
];

const BestSellingProducts = () => {
  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold mb-4">Best Selling Products</h2>
      <div className="grid grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-md relative group">
               <div className="relative group">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-contain rounded-md mb-4"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
                <button onClick={() => console.log(product)} className="bg-black w-[80%] m-auto text-white py-2 rounded">
                  Add To Cart
                </button>
              </div>
            </div>
            <h3 className="text-lg font-bold">{product.name}</h3>
            <div className="flex justify-between items-center">
              <p className="text-gray-500 line-through">{product.originalPrice}</p>
              <p className="text-gray-900 font-bold">{product.price}</p>
            </div>
            <ReactStars
              count={5}
              value={product.rating}
              size={24}
              edit={false}
              activeColor="#ffd700"
              classNames="mb-2"
            />
         
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellingProducts;
