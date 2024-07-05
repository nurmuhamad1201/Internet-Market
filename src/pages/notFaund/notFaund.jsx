
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className=' py-[200px] '>
     <h1 className="text-2xl  text-center font-[600] dark:text-white sm:text-3xl md:text-4xl lg:text-5xl">404 Not Found</h1>
     <p className="text-center text-gray-500">Your visited page not found. You may go home page.</p>
   <Link to='/' >  <button className=" w-[254px] h-[56px]  ml-[40%] dark:text-white text-center m-auto bg-[#DB4444] text-white rounded-md hover:bg-[#DB5844] mt-[20px]">Back to home page</button></Link>
  


    </div>
  )
}

export default NotFound