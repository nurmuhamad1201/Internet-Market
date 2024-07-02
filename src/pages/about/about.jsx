import african from '../../assets/svg/african.png'
import khalta from '../../assets/svg/khalta.svg'
import podar from '../../assets/svg/padarka.svg'
import dolar from '../../assets/svg/dolar.svg'
import send from '../../assets/svg/send.svg'
import Kardochka from '../../components/kardochka'
import woman from '../../assets/images/woman.png'
import man1 from '../../assets/images/man1.png'
import man2 from '../../assets/images/man2.png'
import kamaz from '../../assets/svg/dostavaka.svg';
import call from '../../assets/svg/call.svg';




const About = () => {

    const Cards1About = [
        {  name: 'FREE AND FAST DELIVERY', image: send, description: 'Free delivery for all orders over $140'},
        {  name: '24/7 CUSTOMER SERVICE', image: dolar, description: 'Friendly 24/7 customer support' , bg:"#DB4444" , color: 'white'},
        { name: 'MONEY BACK GUARANTEE', image: podar, description: 'We reurn money within 30 days' },
        { name: '100% Satisfaction GUARANTEE', image: khalta, description: 'We are 100% satisfied with our customers' },
    
      ]

      const peoples = [
          {  name: 'Tom Cruise', image: man1, description: 'Founder & Chairman.' },
        {  name: 'WomanEmma Watson', image: woman, description: 'Managing Director.'},
        { name: 'Will Smith', image: man2, description: 'Product Designer.' },
      ]

      const SmallCard = [
        {  name: 'FREE AND FAST DELIVERY', image: kamaz, description: 'Free delivery for all orders over $140'},
        {  name: '24/7 CUSTOMER SERVICE', image: call, description: 'Friendly 24/7 customer support' },
        { name: 'MONEY BACK GUARANTEE', image: send, description: 'We reurn money within 30 days' },
    
      ]

  return (
    <div className=' px-[50px] '>
         
         <div className="flex justify-around flex-wrap items-center ">
  <div className="flex flex-wrap  w-[50%] md:w-[90%] px-4">
    <div className='  '>
      <h1 className="text-[45px] font-bold mb-4">Our Story</h1>
      <p className="text-gray-700 text-[18px] mb-4">
        Launched in 2015, Exclusive is South Asia’s premier online shopping marketplace with an active presence in Bangladesh. Supported by a wide range of tailored marketing, data, and service solutions, Exclusive has 10,500 sellers and 300 brands and serves 3 million customers across the region.
      </p>
      <p className="text-gray-700 text-[18px] mb-4">
        Exclusive has more than 1 million products to offer, growing at a very fast pace. Exclusive offers a diverse assortment in categories ranging from consumer electronics to fashion and lifestyle products.
      </p>
    </div>
  </div>
  <div className="flex-1 md:w-[90%] px-4">
    <img src={african} alt="African" className=" w-full h-auto rounded-lg shadow-md" />
  </div>
</div>

<div className=' flex py-10 flex-wrap gap-5 '>
    {
        Cards1About.map((item, index) => (
            <Kardochka key={index} img={item.image} bg={item.bg} color={item.color} text1={item.name} text2={item.description} />
        ))
    }
</div>

<div className=' flex justify-around items-center flex-wrap text-center px-[50px] '>
    {
        peoples.map((item, index) => (
            <Kardochka key={index} text1={item.name} text2={item.description} img={item.image} />
        ))
    }
</div>


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

export default About