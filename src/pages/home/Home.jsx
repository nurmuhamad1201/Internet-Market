import { Button, Container } from '@mui/material'
import iphone14 from '../../assets/images/iphone14.png'
import chair from '../../assets/images/chair.png';
import kayboard from '../../assets/images/kayboard.png';
import tv from '../../assets/images/tv.png';
import zhostik from '../../assets/images/zhostik.png';
import PlaySatation from '../../assets/images/product5.png';
import woman from '../../assets/images/product6.png';
import Speakers from '../../assets/images/product7.png';
import kamaz from '../../assets/svg/dostavaka.svg';
import call from '../../assets/svg/call.svg';
import send from '../../assets/svg/send.svg';
import mp3 from '../../assets/svg/mp3.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import '../../pages/home/home.css'
import FlashSales from '../../components/time';
import Cards from '../../components/cards';
import Categories from '../../components/categories';
import BestSellingProducts from '../../components/selling';
import Kardochka from '../../components/kardochka';
import ProductList from '../../components/cards';



const Home = () => {

  const initialProducts = [
    { id: 1, name: 'Gaming Controller', image: zhostik, description: 'High-quality gaming controller', price: '$49.99', rating: 4 },
    { id: 2, name: 'Mechanical Keyboard', image: kayboard, description: 'RGB Mechanical Keyboard', price: '$89.99', rating: 4 },
    { id: 3, name: 'Smart TV', image: tv, description: '4K UHD Smart TV', price: '$499.99', rating: 4 },
    { id: 4, name: 'Comfort Chair', image: chair, description: 'Ergonomic comfort chair', price: '$129.99', rating: 4 },
  ];
  const Products2 = [
    { id: 5, name: 'Breed Dry Dog Food', image: zhostik,  price: '$49.99', rating: 4 },
    { id: 6, name: 'CANON EOS DSLR Camera', image: kayboard,  price: '$89.99', rating: 4 },
    { id: 7, name: 'ASUS FHD Gaming Laptop', image: Speakers,  price: '$499.99', rating: 4 },
    { id: 8, name: 'Curology Product Set ', image: chair, price: '$129.99', rating: 4 },
    { id: 9, name: 'Kids Electric Car', image: zhostik,  price: '$49.99', rating: 4 },
    { id: 10, name: 'Jr. Zoom Soccer Cleats', image: PlaySatation,  price: '$899+.99', rating: 4 },
    { id: 11, name: 'GP11 Shooter USB Gamepad', image: tv,  price: '$499.99', rating: 4 },
    { id: 12, name: 'Quilted Satin Jacket ', image: chair, price: '$129.99', rating: 4 },
  ];

  const SmallCard = [
    {  name: 'FREE AND FAST DELIVERY', image: kamaz, description: 'Free delivery for all orders over $140'},
    {  name: '24/7 CUSTOMER SERVICE', image: call, description: 'Friendly 24/7 customer support' },
    { name: 'MONEY BACK GUARANTEE', image: send, description: 'We reurn money within 30 days' },

  ]


  return (
    <div className=' px-10 ld:px-1 '>
 
    <main>
    
    <section className="bg-gray-100 py-[50px] px-[50px] md:px-0 ">
      <Container maxWidth="xl">
        <div className="flex items-center gap-5 md:flex-wrap">

           
          <div className='flex flex-col md:flex-row md:flex-wrap'>
            <button className=" font-sans text-start font-[500] text-[18px] ">WomanFashion</button>
            <button className=" font-sans text-start font-[500] text-[18px]">Men’s Fashion</button>
            <button className=" font-sans text-start font-[500] text-[18px]">Electronics</button>
            <button className=" font-sans text-start font-[500] text-[18px]">Home & Lifestyle</button>
            <button className=" font-sans text-start font-[500] text-[18px]">Medicine</button>
            <button className=" font-sans text-start font-[500] text-[18px]">Sports & Outdoor</button>
            <button className="font-sans text-start font-[500] text-[18px]">Baby’s & Toys</button>
            <button className="font-sans text-start font-[500] text-[18px]">Groceries & Pets</button>
            <button className="font-sans text-start font-[500] text-[18px]">Health & Beauty</button>
          </div>

          
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          modules={[Autoplay, Pagination, Navigation]}
          loop={true}
          pagination={{
            clickable: true,
          }}
          
              
          className="mySwiper"
        >
         
      
<SwiperSlide>
  <div className="py-8 w-full h-full bg-black rounded-md flex lg:flex-wrap justify-around mx-auto px-8">
    {/* Product Card */}
    <div className="bg-black text-white py-10  px-6 rounded-lg mb-8">
      <div className="flex py-8 items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" className="fill-current text-white w-10 h-10 mr-2">
          <path d="M 44.527344 34.75 C 43.449219 37.144531 42.929688 38.214844 41.542969 40.328125 C 39.601563 43.28125 36.863281 46.96875 33.480469 46.992188 C 30.46875 47.019531 29.691406 45.027344 25.601563 45.0625 C 21.515625 45.082031 20.664063 47.03125 17.648438 47 C 14.261719 46.96875 11.671875 43.648438 9.730469 40.699219 C 4.300781 32.429688 3.726563 22.734375 7.082031 17.578125 C 9.457031 13.921875 13.210938 11.773438 16.738281 11.773438 C 20.332031 11.773438 22.589844 13.746094 25.558594 13.746094 C 28.441406 13.746094 30.195313 11.769531 34.351563 11.769531 C 37.492188 11.769531 40.8125 13.480469 43.1875 16.433594 C 35.421875 20.691406 36.683594 31.78125 44.527344 34.75 Z M 31.195313 8.46875 C 32.707031 6.527344 33.855469 3.789063 33.4375 1 C 30.972656 1.167969 28.089844 2.742188 26.40625 4.78125 C 24.878906 6.640625 23.613281 9.398438 24.105469 12.066406 C 26.796875 12.152344 29.582031 10.546875 31.195313 8.46875 Z"/>
        </svg>
        <p className="text-xl font-bold">iPhone 14 Series</p>
      </div>
      <h1 className="text-[50px] font-extrabold mb-4">Up to 10% off Voucher</h1>
      <button className="bg-white text-black py-2 px-4 rounded mt-4">Shop Now {'->'}</button>
    </div>

    {/* Image */}
    <div>
      <img src={iphone14} alt="iPhone 14" className="object-cover rounded-lg w-full h-auto" />
    </div>
  </div>
</SwiperSlide>
<SwiperSlide>
  <div className="py-8 w-full h-full bg-black rounded-md flex lg:flex-wrap justify-around mx-auto px-8">
    {/* Product Card */}
    <div className="bg-black text-white py-10  px-6 rounded-lg mb-8">
      <div className="flex py-8 items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" className="fill-current text-white w-10 h-10 mr-2">
          <path d="M 44.527344 34.75 C 43.449219 37.144531 42.929688 38.214844 41.542969 40.328125 C 39.601563 43.28125 36.863281 46.96875 33.480469 46.992188 C 30.46875 47.019531 29.691406 45.027344 25.601563 45.0625 C 21.515625 45.082031 20.664063 47.03125 17.648438 47 C 14.261719 46.96875 11.671875 43.648438 9.730469 40.699219 C 4.300781 32.429688 3.726563 22.734375 7.082031 17.578125 C 9.457031 13.921875 13.210938 11.773438 16.738281 11.773438 C 20.332031 11.773438 22.589844 13.746094 25.558594 13.746094 C 28.441406 13.746094 30.195313 11.769531 34.351563 11.769531 C 37.492188 11.769531 40.8125 13.480469 43.1875 16.433594 C 35.421875 20.691406 36.683594 31.78125 44.527344 34.75 Z M 31.195313 8.46875 C 32.707031 6.527344 33.855469 3.789063 33.4375 1 C 30.972656 1.167969 28.089844 2.742188 26.40625 4.78125 C 24.878906 6.640625 23.613281 9.398438 24.105469 12.066406 C 26.796875 12.152344 29.582031 10.546875 31.195313 8.46875 Z"/>
        </svg>
        <p className="text-xl font-bold">iPhone 14 Series</p>
      </div>
      <h1 className="text-[50px] font-extrabold mb-4">Up to 10% off Voucher</h1>
      <button className="bg-white text-black py-2 px-4 rounded mt-4">Shop Now {'->'}</button>
    </div>

    {/* Image */}
    <div>
      <img src={iphone14} alt="iPhone 14" className="object-cover rounded-lg w-full h-auto" />
    </div>
  </div>
</SwiperSlide>
<SwiperSlide>
  <div className="py-8 w-full h-full bg-black rounded-md flex lg:flex-wrap justify-around mx-auto px-8">
    {/* Product Card */}
    <div className="bg-black text-white py-10  px-6 rounded-lg mb-8">
      <div className="flex py-8 items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" className="fill-current text-white w-10 h-10 mr-2">
          <path d="M 44.527344 34.75 C 43.449219 37.144531 42.929688 38.214844 41.542969 40.328125 C 39.601563 43.28125 36.863281 46.96875 33.480469 46.992188 C 30.46875 47.019531 29.691406 45.027344 25.601563 45.0625 C 21.515625 45.082031 20.664063 47.03125 17.648438 47 C 14.261719 46.96875 11.671875 43.648438 9.730469 40.699219 C 4.300781 32.429688 3.726563 22.734375 7.082031 17.578125 C 9.457031 13.921875 13.210938 11.773438 16.738281 11.773438 C 20.332031 11.773438 22.589844 13.746094 25.558594 13.746094 C 28.441406 13.746094 30.195313 11.769531 34.351563 11.769531 C 37.492188 11.769531 40.8125 13.480469 43.1875 16.433594 C 35.421875 20.691406 36.683594 31.78125 44.527344 34.75 Z M 31.195313 8.46875 C 32.707031 6.527344 33.855469 3.789063 33.4375 1 C 30.972656 1.167969 28.089844 2.742188 26.40625 4.78125 C 24.878906 6.640625 23.613281 9.398438 24.105469 12.066406 C 26.796875 12.152344 29.582031 10.546875 31.195313 8.46875 Z"/>
        </svg>
        <p className="text-xl font-bold">iPhone 14 Series</p>
      </div>
      <h1 className="text-[50px] font-extrabold mb-4">Up to 10% off Voucher</h1>
      <button className="bg-white text-black py-2 px-4 rounded mt-4">Shop Now {'->'}</button>
    </div>

    {/* Image */}
    <div>
      <img src={iphone14} alt="iPhone 14" className="object-cover rounded-lg w-full h-auto" />
    </div>
  </div>
</SwiperSlide>

       
      
       
         

        
 
        </Swiper>

        </div>
      </Container>
    </section>


       
    </main>

<FlashSales />

  <ProductList />

 <Categories />
 <BestSellingProducts />



 <div className="my-8 p-8 flex justify-around items-center flex-wrap bg-black text-white rounded-lg">
     <div>
     <h2 className="text-3xl font-bold mb-4">Enhance Your Music Experience</h2>
      <p>High-quality speakers with surround sound</p>
      <button className="bg-green-500 text-white px-4 py-2 rounded mt-4">Buy Now</button>
     </div>
      <img src={mp3} alt="" />
    </div>

    <Cards products={Products2} />


    <section className="container mx-auto py-8">
  <div className="flex md:flex-row gap-4">
  <div className="bg-black flex justify-center items-center p-4 rounded-lg shadow-md w-full md:w-2/5 mb-4">
  <div className="text-white text-center md:text-left">
    <img src={PlaySatation} alt="PlayStation 5" className=" w-[95%] object-cover mb-4 rounded-md" />
    <h1 className="text-2xl font-bold mb-2">PlayStation 5</h1>
    <p className="text-gray-600">Black and White version of the PS5 coming out on sale.</p>
  </div>
</div>

    <div className="flex flex-col md:flex-row gap-4 w-full">
    <div className="bg-black text-white w-full md:w-2/5 p-4 rounded-lg shadow-md mb-4 flex items-center">
  <div className="flex-1">
    <h1 className="text-2xl font-bold mb-2  ">New Women's Fashion</h1>
    <p className="text-gray-600">Check out our latest trends and styles.</p>
  </div>
  <img src={woman} alt="New Women's Fashion" className=" w-44 h-44 object-cover rounded-md" />
</div>

        <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 w-full md:w-3/5">
          <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center hover:shadow-lg transition-shadow duration-200">
            <img src={Speakers} alt="Speakers" className="w-full object-fill mb-4 rounded-md" />
            <div className="text-white text-center">
              <h1 className="text-xl font-bold mb-2">Speakers</h1>
              <p className="text-gray-600">Experience the best sound in your earbuds.</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center hover:shadow-lg transition-shadow duration-200">
            <img src={Speakers} alt="Speakers" className="w-full object-fill mb-4 rounded-md" />
            <div className="text-white text-center">
              <h1 className="text-xl font-bold mb-2">Speakers</h1>
              <p className="text-gray-600">Experience the best sound in your earbuds.</p>
            </div>
          </div>
        </div>
    </div>
  </div>
</section>


<div className='flex justify-around py-9 flex-wrap '>
  {
    SmallCard.map((el , id) => {
      return (
        <Kardochka key={id} img={el.image} text1={el.name} text2={el.description} />
      )
    })
  }
</div>

  </div>
  )
}

export default Home