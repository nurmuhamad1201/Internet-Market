
const Contact = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-4xl">
        <div className="grid grid-cols-2  md:grid-cols-1 gap-10">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2 text-red-500">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 2v4M8 2v4M3 10h18M21 10v10a2 2 0 01-2 2H5a2 2 0 01-2-2V10M7 20h10M9 16h6M12 12h.01" />
              </svg>
              <div>
                <p className="font-bold">Call To Us</p>
                <p>We are available 24/7, 7 days a week.</p>
                <p>Phone: +88016112222</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-red-500">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12V8m0 0V4m0 4H8m8 0h4M3 16v2a2 2 0 002 2h14a2 2 0 002-2v-2m-4 0h-2M9 16h6M7 20h10m0 0v-2M7 20v-2" />
              </svg>
              <div>
                <p className="font-bold">Write To Us</p>
                <p>Fill out our form and we will contact you within 24 hours.</p>
                <p>Emails: customer@exclusive.com, support@exclusive.com</p>
              </div>
            </div>
          </div>
          <div>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
                <input type="text" placeholder="Name" className="p-2 border md:w-[95%] md:m-auto border-gray-300 rounded" />
                <input type="email" placeholder="Email" className="p-2 border md:w-[95%] md:m-auto border-gray-300 rounded" />
                <input type="tel" placeholder="Phone" className="p-2 border md:w-[95%] md:m-auto border-gray-300 rounded col-span-1 sm:col-span-2" />
              </div>
              <textarea placeholder="Your Message" className="w-full p-2 border border-gray-300 rounded h-32"></textarea>
              <button type="submit" className="w-full p-2 bg-red-500 text-white rounded">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
