import { Search } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="relative h-[500px] bg-cover bg-center" style={{backgroundImage: "url('./heroImage.png')"}}>
      <div className="absolute inset-0 bg-black bg-opacity-50">
        <div className="max-w-6xl mx-auto px-4 py-12 h-full flex flex-col justify-center">
          {/* <div className="absolute top-4 left-4 bg-purple-600 text-white px-2 py-1 rounded-md">
            <span className="text-sm font-bold">278</span>
          </div> */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 max-w-2xl">
           Discover the best clothing for your wardrobe at EcomTech!
          </h1>
          <p className="text-xl text-white mb-6">
           Shop by category, brand, or sale items!
          </p>
          <div className="flex w-full max-w-[90%]">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="flex-grow px-4 py-2 rounded-l-md border-0 focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-black text-white px-6 py-2 rounded-r-md hover:bg-gray-800 transition duration-300 flex items-center">
              <Search size={20} className="mr-2" />
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}