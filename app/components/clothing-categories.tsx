
import Pants from "@/app/components/PantIcon";
import Shirt from "@/app/components/ShirtIcon";
import Shoe from "@/app/components/ShoeIcon";
import Watch from "@/app/components/WatchIcon";
import Hat from "@/app/components/HatIcon";
import Eyewear from "@/app/components/EyewearIcon";
const categories = [
  { name: "Shirts", icon: Shirt },
  { name: "Pants", icon: Pants },
  { name: "Shoes", icon: Shoe },
  { name: "Hats", icon: Hat },
  { name: "Accessories", icon: Watch },
  { name: "Eyewear", icon: Eyewear },
]

export default function Component() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Categories</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {categories.map((category) => (
          <div
            key={category.name}
            className="bg-gray-100 hover:bg-gray-200 transition-colors duration-200 p-4 rounded-lg flex flex-col items-center justify-center aspect-square shadow-sm"
          >
            <category.icon className=" w-8 h-8 mb-2 text-primary" />
            <span className="text-sm font-medium text-gray-800">{category.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}