import { Heart, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import offImage from "@/public/30.svg";

export default function Component() {
  return (
    <div className="container mx-auto p-4 bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Special Offers Section */}
        <div className="md:col-span-1 space-y-4">
          <div className="bg-gray-200 p-4 rounded-lg">
            <h2 className="font-bold text-lg mb-2">🏷️ Special offers</h2>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Summer Collection</h3>
            <p className="text-sm text-gray-600 mb-2">by FashionTrend</p>
            <div className="flex justify-between items-center mb-2">
              <div className="relative">
                <Image src={offImage} alt="Summer clothes" width={100} height={100} className="rounded" />
                <div className="absolute top-0 right-0 bg-yellow-400 text-xs font-bold px-2 py-1 rounded">30% OFF</div>
              </div>
            </div>
            <button className="bg-black text-white px-4 py-2 rounded w-full">Shop Now</button>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">New Arrivals!</h3>
            <p className="text-sm mb-2">Check out our latest styles</p>
            <div className="relative mb-2">
              <Image src="/newArrivals.png" alt="New arrivals" width={100} height={100} className="rounded" />
              <div className="absolute top-0 right-0 bg-green-400 text-xs font-bold px-2 py-1 rounded">20% OFF</div>
            </div>
            <button className="bg-black text-white px-4 py-2 rounded w-full">Shop Now</button>
          </div>
          <div className="bg-black text-white p-4 rounded-lg">
            <h3 className="font-semibold mb-2">FLASH DEALS</h3>
            <p className="text-sm mb-2">Ends soon</p>
            <div className="flex justify-center space-x-2">
              <div className="bg-white text-black px-2 py-1 rounded">10</div>
              <div className="bg-white text-black px-2 py-1 rounded">57</div>
            </div>
          </div>
        </div>

        {/* Trending Products Section */}
        <div className="md:col-span-2 space-y-4">
          <div className="bg-gray-200 p-4 rounded-lg flex justify-between items-center">
            <h2 className="font-bold text-lg">🔥 Trending products</h2>
            <div className="flex space-x-2">
              <button className="p-1 bg-white rounded"><ChevronLeft size={20} /></button>
              <button className="p-1 bg-white rounded"><ChevronRight size={20} /></button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "Summer Dress", price: 49.99, originalPrice: 59.99, image: "/Clothing.jpeg" },
              { name: "Casual Shirt", price: 29.99, image: "/casual Tshirt.jpeg" },
              { name: "Denim Jeans", price: 39.99, originalPrice: 49.99, image: "/Denim Jeans.png" },
              { name: "Sneakers", price: 79.99, image: "/Sneakers.jpeg" },
              { name: "Sunglasses", price: 19.99, image: "/eyewear.jpeg" },
              { name: "Beach Hat", price: 24.99, image: "/beach hat.jpeg" },
            ].map((product, index) => (
              <div key={index} className="bg-white p-2 rounded-lg shadow">
                <div className="w-[100%] h-[70%] min-h-52 m-1 p-1 relative">
                  {/* <Image layout="fill" objectFit="cover" src={product?.image} alt={product.name} className="rounded w-4 h-4" /> */}
                  {/* <div className="relative h-[300] w-[100%] mb-2"> */}
                    <Image
                    className="rounded"
                      src={product.image} // Replace with your image path
                      alt={product.name}
                      layout="fill"         // Stretch image to fill both width and height
                      objectFit="cover"
                      quality={100}
                    />
                  {/* </div> */}
                  <button className="absolute top-2 right-2 text-gray-600"><Heart size={20} /></button>
                </div>
                <h3 className="font-semibold text-sm mb-1">{product.name}</h3>
                <div className="flex items-baseline space-x-2">
                  <span className="font-bold">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                  )}
                </div>
                <button className="mt-2 bg-gray-800 text-white text-sm px-3 py-1 rounded w-full">Add to cart</button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Clothing Categories Section */}
      {/* <div className="mt-8">
        <div className="bg-gray-200 p-4 rounded-lg mb-4">
          <h2 className="font-bold text-lg">👚 Clothing Categories</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-200 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Summer Collection</h3>
            <p className="text-sm mb-2">Light and breezy styles for hot days</p>
            <button className="bg-black text-white px-4 py-2 rounded">Shop Now</button>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Formal Wear</h3>
            <p className="text-sm mb-2">Elegant suits and dresses for special occasions</p>
            <button className="bg-black text-white px-4 py-2 rounded">Shop Now</button>
          </div>
        </div>
      </div> */}
    </div>
  )
}